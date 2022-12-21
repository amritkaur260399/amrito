import React from "react";

const FifthTask = () => {
  const arr = [
    {
      text: "Lorem ipsum dolor sit  ipsum dolor sit.",
    },
    {
      text: "Lorem ipsum dolor sit  ipsum dolor sit.",
    },
    {
      text: "Lorem ipsum dolor sit  ipsum dolor sit.",
    },
    {
      text: "Lorem ipsum dolor sit ipsum dolor sit.",
    },
    {
      text: "Lorem ipsum dolor sit ipsum dolor sit.",
    },
  ];
  const arr2 = [
    {
      text: "jfpo ipsum dolor sit  ipsum dolor sit.",
    },
    {
      text: "dkpsd[ ipsum dolor sit  ipsum dolor sit.",
    },
    {
      text: "djpodp ipsum dolor sit ipsum dolor sit.",
    },
    {
      text: "idpowd ipsum dolor sit ipsum dolor .",
    },
    {
      text: "wedwop ipsum dolor sit ipsum dolor .",
    },
  ];
  return (
    <div className="mx-20 my-10 border border-gray-60 h-full rounded-md">
      <div className="flex   py-16  border-b border-gray-60 mx-6">
        <div className="w-3/4">
          <h2 className="text-5xl font-bold">
            <span >Everything you need for</span>
            <span className="text-indigo-700"> $99 a month</span>
          </h2>
          <p className="font-bold pl-3 text-xl pt-3  text-gray-400 text-left">
            Includes every feature we offer plus unlimited projects and
            unlimited users.
          </p>
        </div>
        <div className="w-1/4 pt-10 text-right ">
          <a
            href="#"
            class="items-center bg-indigo-600  px-6 py-4  rounded-md font-medium text-white  mr-4 hover:bg-indigo-900"
          >
            Get started today
          </a>
        </div>
      </div>
      <div className="flex px-8 py-20 gap-7">
        <div className="  w-1/3 text-left">
          <span className="  text-indigo-600 font-bold  pb-10">
            
            Everything you need
          </span>
          <h2 className="text-2xl font-bold pb-6">All-in-one-plateform</h2>
          <p className="font-bold text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ullam
            quae est deserunt quasi nobis id voluptatibus rerum! Officiis iusto
            ut dicta nostrum sapiente?
          </p>
        </div>
        <div className=" w-1/3">
          {arr.map((item) => (
            <div className="flex  py-3 border-b border-gray-60 ">
              <svg
                height={15}
                width={60}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>

              <p className="text-gray-500 font-bold ">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="  w-1/3">
          {arr2.map((item) => (
            <div className="flex  py-3 border-b border-gray-60 ">
              <svg
                height={15}
                width={60}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
              <p className="text-gray-500 font-bold ">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FifthTask;
