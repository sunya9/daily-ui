import Link from "next/link";
import Head from "next/head";

interface LinkInfo {
  title: string;
  path: string;
}
const linkList: LinkInfo[] = [{ title: "Sign up", path: "1-sign-up" }];
const title = "Daily UI by sunya9";

const Index = () => {
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
              {linkList.map((link) => (
                <li key={link.path}>
                  <Link href={`/ui/${link.path}`}>{link.title}</Link>
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

export default Index;
