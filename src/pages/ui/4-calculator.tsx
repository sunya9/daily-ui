import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

interface ButtonProps {
  cols?: number;
  className?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div className={`flex-1 ${props.className}`}>
      <button
        type="button"
        className={`
          font-mono
          focus:outline-none
          focus:ring-4
          ring-gray-500
          ring-opacity-10
          text-xl
          ${
            props.textColor ??
            "text-black text-opacity-80 hover:text-opacity-70"
          }
          relative
          focus:z-10
          flex
          w-20
          h-20
          justify-center
          mx-auto
          rounded-xl
          items-center`}
      >
        {props.children}
      </button>
    </div>
  );
};

const Calculator = () => {
  return (
    <>
      <Head>
        <title>3. Calculator</title>
      </Head>
      <div className="container mx-auto">
        <div className="h-screen flex flex-col justify-center items-center">
          <h1 className="text-center text-4xl mb-8">Calculator</h1>
          <div className="shadow-xl border border-gray-200 border-opacity-10 rounded-2xl ring-2 ring-gray-50">
            <div className="flex flex-row font-mono">
              <div className="text-2xl w-3/4 text-right px-2 py-8 text-gray-700 text-opacity-95">
                100 + 1.4142
              </div>
              <button
                type="button"
                className="w-1/4
                focus:outline-none
                border
                border-white
                border-opacity-10
                focus:ring-4
                ring-gray-500
                ring-opacity-50
                text-red-500
                text-xl
                text-center"
              >
                <div className="w-20 h-20 m-auto flex justify-center items-center">
                  <FontAwesomeIcon icon={faBackspace} />
                </div>
              </button>
            </div>
            <div className="">
              <div className="flex flex-row flex-nowrap">
                <Button>C</Button>
                <Button>CE</Button>
                <Button>%</Button>
                <Button>/</Button>
              </div>
              <div className="flex flex-row flex-nowrap">
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button>x</Button>
              </div>
              <div className="flex flex-row flex-nowrap">
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button>-</Button>
              </div>
              <div className="flex flex-row flex-nowrap">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>+</Button>
              </div>
              <div className="flex flex-row flex-nowrap">
                <Button>0</Button>
                <Button>00</Button>
                <Button>.</Button>
                <Button textColor="text-white">
                  <div className="h-12 w-12 rounded-full bg-blue-500 flex justify-center items-center shadow-lg hover:bg-blue-400">
                    =
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
