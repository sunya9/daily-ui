import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";

const SignUp = () => {
  return (
    <>
      <Head>
        <title>1. Sign up</title>
      </Head>
      <div className="bg-gray-100	h-screen flex justify-center content-center">
        <div className="w-full sm:w-3/5 lg:w-1/3 sm:m-auto my-auto mx-5">
          <h1 className="text-center text-2xl mb-6">Sign up</h1>

          <div className="border border-gray-300 bg-gradient-to-t from-gray-100 p-10 rounded-lg shadow-md">
            <form>
              <label className="block text-gray-600">
                Mail
                <input
                  type="email"
                  className="shadow-inner focus:outline-none focus:border-blue-300 text-gray-900 bg-white border-gray-300 border mb-3 p-2 rounded block w-full"
                  required
                />
              </label>

              <label className="block text-gray-600">
                Password
                <input
                  type="password"
                  className="shadow-inner focus:outline-none focus:border-blue-300 text-gray-900 bg-white border-gray-300 border mb-3 p-2 rounded block w-full"
                  required
                />
              </label>

              <input
                type="submit"
                value="Sign up"
                className="active:bg-blue-600 focus:bg-blue-300 hover:bg-blue-300 text-white bg-blue-400 border-gray-300 border mb-3 p-2 rounded block w-full"
              />

              <button
                type="button"
                className="hover:bg-gray-50 bg-gray-100 border-gray-300 border mb-3 py-2 rounded block w-full"
              >
                <span className="mx-2">
                  <FontAwesomeIcon icon={faGoogle} />
                </span>
                Sign up with Google
              </button>

              <p className="text-center">
                or <br />
                <a
                  href="#"
                  className="hover:text-red-500 text-red-600 hover:underline"
                >
                  Login?
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
