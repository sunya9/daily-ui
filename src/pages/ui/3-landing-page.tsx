import Head from "next/head";
import {
  faDollarSign,
  faRocket,
  faChartBar,
  faChevronDown,
  faFan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>3. Landing page</title>
      </Head>
      <div className="flex flex-col h-screen">
        <header className="flex-initial min-h-screen bg-gradient-to-tr from-purple-700 to-pink-600 flex flex-col">
          <nav className="flex-initial">
            <div className="mx-auto container">
              <div className="flex py-5 items-center">
                <span className="text-white font-bold">
                  <span className="pr-3">
                    <FontAwesomeIcon icon={faFan} />
                  </span>
                  Super CMS
                </span>

                <ul className="flex flex-initial ml-auto mr-2 py-3">
                  <li className="flex-initial">
                    <a
                      className="py-5 mx-3 text-white hover:text-gray-100"
                      href="#"
                    >
                      Features
                    </a>
                  </li>
                  <li className="flex-initial">
                    <a
                      className="py-5 mx-3 text-white hover:text-gray-100"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="flex-initial">
                    <a
                      className="py-5 mx-3 text-white hover:text-gray-100"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <span className="flex-initial">
                  <button
                    className="shadow-lg focus:ring-2 ring-opacity-40 ring-gray-600 focus:outline-none uppercase bg-purple-700 px-5 py-2 ml-2 rounded-full text-white"
                    type="button"
                  >
                    Sign in
                  </button>
                </span>
                <span className="flex-initial">
                  <button
                    className="shadow-lg focus:ring-2 ring-opacity-40 ring-gray-600 focus:outline-none uppercase bg-gray-200 px-5 py-2 ml-2 rounded-full"
                    type="button"
                  >
                    Sign up
                  </button>
                </span>
              </div>
            </div>
          </nav>
          <div className="mx-auto container my-10 text-white text-opacity-90 flex flex-col flex-1">
            <div className="flex flex-row flex-wrap items-center flex-1">
              <div className="flex-1">
                <h1 className=" text-5xl mb-5">Super CMS</h1>
                <p className="text-md">
                  Super CMS is Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Repellendus a eos asperiores nostrum quasi
                  eaque consequatur voluptatum velit aliquam vitae voluptatem
                  blanditiis hic quaerat quam, qui animi, aliquid placeat
                  minima?
                </p>
              </div>
              <div className="flex-1 ml-10">
                <img
                  src="/images/landing-header.svg"
                  className="mx-auto w-full"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-initial mt-auto text-center animate-bounce">
              <a href="" className="text-2xl">
                <FontAwesomeIcon icon={faChevronDown} />
              </a>
            </div>
          </div>
        </header>

        <main className="flex-1 bg-gray-50">
          <div className="mx-auto container">
            <div className="w-full xl:w-4/5 xl:mx-auto">
              <h2 className="text-center text-3xl mt-20 mb-10 text-indigo-900">
                Features
              </h2>

              <div className="flex my-24">
                <div className="flex-1">
                  <img
                    src="/images/analytics.svg"
                    alt="Analytics"
                    className="mx-auto"
                    width="406"
                    height="306"
                  />
                </div>
                <div className="flex-1 z-10 mx-10">
                  <div className="mx-16">
                    <h3 className="font-bold text-gray-900 text-lg mb-4 text-indigo-900">
                      <span className="block mb-5 text-indigo-700">
                        <FontAwesomeIcon size="2x" icon={faChartBar} />
                      </span>
                      <span className="border-b-2 border-gray-200 pb-1">
                        Analytics
                      </span>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus quod sunt quaerat repellat vero magni
                      perferendis accusamus dolor, dolorum recusandae labore
                      vitae quisquam iusto optio voluptatem sed minus rem a!
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex my-24">
                <div className="flex-1 order-2">
                  <img
                    src="/images/credit-card.svg"
                    alt="Payment"
                    width="406"
                    className="mx-auto"
                    height="306"
                  />
                </div>
                <div className="flex-1 z-10 mx-10">
                  <div className="mx-16">
                    <h3 className="font-bold text-gray-900 text-lg mb-4 text-indigo-900">
                      <span className="block mb-5 text-indigo-700">
                        <FontAwesomeIcon size="2x" icon={faDollarSign} />
                      </span>
                      <span className="border-b-2 border-gray-200 pb-1">
                        Payment
                      </span>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus quod sunt quaerat repellat vero magni
                      perferendis accusamus dolor, dolorum recusandae labore
                      vitae quisquam iusto optio voluptatem sed minus rem a!
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex my-24">
                <div className="flex-1">
                  <img
                    src="/images/rocket.svg"
                    alt="Fast"
                    className="mx-auto"
                    width="406"
                    height="306"
                  />
                </div>
                <div className="flex-1 z-10 mx-10">
                  <div className="mx-16">
                    <h3 className="font-bold text-gray-900 text-lg mb-4 text-indigo-900">
                      <span className="block mb-5 text-indigo-700">
                        <FontAwesomeIcon size="2x" icon={faRocket} />
                      </span>
                      <span className="border-b-2 border-gray-200 pb-1">
                        Fast
                      </span>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus quod sunt quaerat repellat vero magni
                      perferendis accusamus dolor, dolorum recusandae labore
                      vitae quisquam iusto optio voluptatem sed minus rem a!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-gray-800 flex-initial text-white py-10">
          <div className="mx-auto container">
            <div className="flex">
              <div className="flex-1">
                <div className="font-bold mb-1">Lorem</div>
                <ul>
                  <li>
                    <li>
                      <a href="#">Link1</a>
                    </li>
                    <li>
                      <a href="#">Link2</a>
                    </li>
                    <li>
                      <a href="#">Link3</a>
                    </li>
                    <li>
                      <a href="#">Link4</a>
                    </li>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="font-bold mb-1">Lorem</div>
                <ul>
                  <li>
                    <li>
                      <a href="#">Link1</a>
                    </li>
                    <li>
                      <a href="#">Link2</a>
                    </li>
                    <li>
                      <a href="#">Link3</a>
                    </li>
                    <li>
                      <a href="#">Link4</a>
                    </li>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="font-bold mb-1">Lorem</div>
                <ul>
                  <li>
                    <li>
                      <a href="#">Link1</a>
                    </li>
                    <li>
                      <a href="#">Link2</a>
                    </li>
                    <li>
                      <a href="#">Link3</a>
                    </li>
                    <li>
                      <a href="#">Link4</a>
                    </li>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="font-bold mb-1">Lorem</div>
                <ul>
                  <li>
                    <li>
                      <a href="#">Link1</a>
                    </li>
                    <li>
                      <a href="#">Link2</a>
                    </li>
                    <li>
                      <a href="#">Link3</a>
                    </li>
                    <li>
                      <a href="#">Link4</a>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
