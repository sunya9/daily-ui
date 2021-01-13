import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import { promises as fs } from "fs";
import * as path from "path";

interface LinkInfo {
  title: string;
  filenameWithoutExt: string;
}
const title = "Daily UI by sunya9";

interface Props {
  linkInfoList: LinkInfo[];
}

const Index = (props: Props) => {
  return (
    <div className="">
      <div className="flex flex-col h-screen">
        <Head>
          <title>{title}</title>
        </Head>
        <div className="bg-gray-200 border-b border-gray-300">
          <header className="container mx-auto py-10">
            <h1 className="text-3xl font-">{title}</h1>
          </header>
        </div>
        <div className="prose max-w-none flex-1">
          <main className="mx-3 lg:mx-auto container py-10">
            <ol>
              {props.linkInfoList.map((link) => (
                <li key={link.filenameWithoutExt}>
                  <Link href={`/ui/${link.filenameWithoutExt}`}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ol>
          </main>
        </div>
        <div className="prose max-w-none">
          <footer className="container mx-auto py-5 border-gray border-t">
            <ul>
              <li>
                Twiter:{" "}
                <a href="https://twitter.com/ephemeralmocha">@ephemeralmocha</a>
              </li>
              <li>
                GitHub: <a href="https://github.com/sunya9">@sunya9</a>
              </li>
              <li>
                Source code:{" "}
                <a href="https://github.com/sunya9/daily-ui">sunya9/daily-ui</a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
};

interface FileInfo {
  index: number;
  filenameWithExt: string;
}

const getConfig = () => ({
  uiDir: path.resolve(process.cwd(), "src", "pages", "ui"),
});

export const getStaticProps: GetStaticProps<Props> = async () => {
  return fs
    .readdir(getConfig().uiDir)
    .then(createFileInfoListFromFilenameList)
    .then((linkInfoList) => ({
      props: {
        linkInfoList,
      },
    }));
};

const createFileInfoListFromFilenameList = (filenames: string[]) =>
  Promise.all(
    filenames
      .reduce<FileInfo[]>((memo: FileInfo[], filename: string) => {
        const res = parseFilename(filename);
        return res ? memo.concat(res) : memo;
      }, [])
      .sort((a, b) => a.index - b.index)
      .map(createLinkInfoFromFileInfo)
  );

const filenameRegexp = /^((\d+)-.+)\.tsx$/;

const parseFilename = (filename: string): FileInfo | null => {
  const res = filename.match(filenameRegexp);
  if (!res) return null;
  const [, filenameWithExt, index] = res;
  return { index: +index, filenameWithExt };
};

const titleRegexp = /<title>\s*\d+\.\s(.+)<\/title>/m;

const createLinkInfoFromFileInfo = (fileInfo: FileInfo): Promise<LinkInfo> =>
  fs
    .readFile(
      path.join(getConfig().uiDir, `${fileInfo.filenameWithExt}.tsx`),
      "utf-8"
    )
    .then((body) => {
      const title = body.match(titleRegexp)?.[1].trim() || "";
      return { title, filenameWithoutExt: fileInfo.filenameWithExt };
    });

export default Index;
