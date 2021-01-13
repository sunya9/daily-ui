import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

const SignUp = () => {
  return (
    <>
      <Head>
        <title>2. Credit card checkout</title>
      </Head>
      <div className="bg-gray-100	h-screen flex justify-center content-center">
        <div className="w-full sm:w-2/3 lg:w-1/3 md:m-auto lg:max-w-1/3 my-auto mx-5">
          <h1 className="text-center text-2xl mb-6">Credit card checkout</h1>
          <div className="border border-gray-300 bg-gradient-to-t from-gray-100 p-10 shadow-md">
            <form>
              <label className="uppercase block text-gray-600 -mb-px">
                <span className="relative z-20 px-2 text-xs text-gray-400">
                  Card number
                </span>
                <input
                  type="text"
                  placeholder="1234 5678 9101 2345"
                  className="focus:shadow-inner text-gray-900 bg-white border-gray-300 border p-2 pt-6 -mt-6 block w-full outline-none relative focus:z-10 focus:border-blue-400 rounded-tl-xl rounded-tr-xl"
                  required
                />
              </label>

              <label className="uppercase block text-gray-600 -mb-px">
                <span className="relative z-20 px-2 text-xs text-gray-400">
                  Card holder ame
                </span>
                <input
                  type="text"
                  placeholder="JOHN DOE"
                  className="focus:shadow-inner text-gray-900 bg-white border-gray-300 border p-2 pt-6 -mt-6 block w-full outline-none relative focus:z-10 focus:border-blue-400"
                  required
                />
              </label>

              <div className="flex flex-wrap">
                <label className="uppercase w-1/2 text-gray-600 flex-1">
                  <span className="relative z-20 px-2 text-xs text-gray-400">
                    Expiration date
                  </span>
                  <input
                    type="text"
                    className="focus:shadow-inner text-gray-900 bg-white border-gray-300 border p-2 pt-6 -mt-6 block w-full outline-none relative focus:z-10 focus:border-blue-400 rounded-bl-xl"
                    required
                    placeholder="12/25"
                  />
                </label>
                <label className="uppercase w-1/2 text-gray-600 -ml-px flex-1">
                  <span className="relative z-20 px-2 text-xs text-gray-400">
                    CVV
                  </span>
                  <input
                    type="password"
                    className="focus:shadow-inner text-gray-900 bg-white border-gray-300 border p-2 pt-6 -mt-6 block w-full outline-none relative focus:z-10 focus:border-blue-400 rounded-br-xl"
                    required
                  />
                </label>
              </div>

              <button
                type="submit"
                className="text-lg border-blue-500 text-white bg-blue-400 order mb-3 py-2 block w-full mt-3 rounded-full"
              >
                Checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
