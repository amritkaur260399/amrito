import React, { useState } from "react";

function ToggleTask() {
  const [btn, setBtn] = useState(true);

  const change = () => {
    setBtn(!btn);
  }

  return (
    <div className="justify-center items-center flex">
      <div className="h-[95vh] w-[200vh] bg-gray-800 mt-4 rounded-lg">
        <div className="w-full flex bg-gray-600 rounded-t-lg p-4  text-xl text-white">
          <div className="w-[60%] items-center flex">
            <svg
            fill="white"
              height={30}
              width={70}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
            <ul className="md:flex ">
              <li className="px-8">Product</li>
              <li className="px-8">Features</li>
              <li className="px-8">Marketplace</li>
              <li className="px-8">Company</li>
            </ul>
          </div>
          <div className="w-[40%]  text-left text-right">
            <button className="px-4 py-2 text-white ">Log in</button>
            <button className="px-4 py-2 text-white bg-gray-300 rounded-lg">
              Start free trail
            </button>
          </div>
        </div>
        <div className="w-full flex">
          <div className="w-[100vh] py-28 px-8 text-white text-left ">
            <div className="text-white w-[60%] " onClick={change}>
              {btn ? (
                <div className="bg-black rounded-lg flex  w-[80%] text:white">
                  <div className="p-2 w-[40%] rounded-xl bg-green-400">
                    We are hiring
                  </div>
                  <div className=" p-2 w-[60%]">Visit our carrer page</div>
                </div>
              ) : (
                <div className="bg-black rounded-lg flex  w-[80%] text:white">
                  <div className="p-2 w-[40%] ">We are hiring</div>
                  <div className=" p-2 w-[60%] rounded-xl bg-green-400">
                    Visit our carrer page
                  </div>
                </div>
              )}
            </div>

            <h1 className="text-white text-6xl mt-4 font-bold">
              A better way to
            </h1>
            <h1 className="text-green-400 text-6xl font-bold">ship web apps</h1>
            <p className="text-gray-400 text-xl mt-4 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate maxime accusamus sit doloribus dolorum molestiae nihil
              molestiae nihil sint eligendi.
            </p>
            <div className="flex gap-2 mt-4">
              <input
                className=" w-[70%] rounded-lg"
                placeholder="Enter your email"
              />
              <button className="bg-green-400 py-2 px-4 rounded-lg">
                Start free trail
              </button>
            </div>
            <p className="mt-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              libero qui ad molestias quas quibusdam cumque deserunt sit
              consequatur sapiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToggleTask;
