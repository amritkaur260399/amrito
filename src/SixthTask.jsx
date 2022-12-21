import React from "react";

const SixthTask = () => {
  const arr = [
    {
      svg: (
        <svg
          height={15}
          width={15}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      ),
      heading: "List view",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta tempore error odio, fugiat, dolorem praesentium deserunt in nemo, consequuntur quaerat veritatis.",
    },
    {
      svg: (
        <svg
          height={15}
          width={15}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C87.5 32 35.1 48.6 9 59.9c-5.6 2.4-9 8-9 14V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V73.9c0-6.1-3.4-11.6-9-14C540.9 48.6 488.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" />
        </svg>
      ),
      heading: "Boards",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta tempore error odio, fugiat, dolorem praesentium deserunt in nemo, consequuntur quaerat veritatis.",
    },
    {
      svg: (
        <svg
          height={15}
          width={15}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z" />
        </svg>
      ),
      heading: "Calender",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta tempore error odio, fugiat, dolorem praesentium deserunt in nemo, consequuntur quaerat veritatis.",
    },
    {
      svg: (
        <svg
          height={15}
          width={15}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path d="M211.2 96c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zM32 256c0 17.7 14.3 32 32 32h85.6c10.1-39.4 38.6-71.5 75.8-86.6c-9.7-6-21.2-9.4-33.4-9.4H96c-35.3 0-64 28.7-64 64zm461.6 32H576c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64H448c-11.7 0-22.7 3.1-32.1 8.6c38.1 14.8 67.4 47.3 77.7 87.4zM391.2 226.4c-6.9-1.6-14.2-2.4-21.6-2.4h-96c-8.5 0-16.7 1.1-24.5 3.1c-30.8 8.1-55.6 31.1-66.1 60.9c-3.5 10-5.5 20.8-5.5 32c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32c0-11.2-1.9-22-5.5-32c-10.8-30.7-36.8-54.2-68.9-61.6zM563.2 96c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zM321.6 192c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" />
        </svg>
      ),
      heading: "Teams",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta tempore error odio, fugiat, dolorem praesentium deserunt in nemo, consequuntur quaerat veritatis.",
    },
  ];
  const arr2 = [
    {
      text: "Unlimited project",
    },
    {
      text: "Unlimited Access",
    },
    {
      text: "Cancel any time",
    },
  ];
  const arr3 = [
    {
      text: "Per user fees",
    },
    {
      text: "24/7 Access",
    },
    {
      text: "14 days free",
    },
  ];
  return (
    <div className="flex h-full mx-28 my-10 rounded-md border border-gray-52">
      <div className="w-1/2  h-full  text-left  rounded-l-lg px-6 pt-16">
        <span className="  text-indigo-600 font-bold ">Full-Featured</span>

        <h2 className="text-3xl font-bold">
          Everything you need to talk with your customer
        </h2>

        <div className="my-12">
          {arr.map((item) => (
            <div className="flex pb-8">
              <div className="h-20 w-10 pt-2">
                <div className="h-10 w-full p-3 rounded-md bg-indigo-600">
                  {item.svg}
                </div>
              </div>
              <div className="pl-4">
                <h2 className="font-bold">{item.heading}</h2>
                <p className="text-gray-500 font-bold pr-4"> {item.desc} </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2 h-full py-48 px-20 text-left bg-indigo-700 rounded-r-lg">
        <pre className="text-white text-6xl font-bold"> 99$ + 4$</pre>
        <pre className="text-white font-bold">    Setup Fee           Per month</pre>
        <div className="flex w-full mt-6">
          <div className=" w-1/2">
            {arr2.map((item) => (
            <div className="bg-indigo-900 rounded-l-lg">
              <div className="flex  py-3 border border-indigo-700  ">
                <svg
                  height={15}
                  width={40}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
                <p className="text-white font-bold ">{item.text}</p>
              </div></div>
            ))}
          </div>
          <div className="w-1/2">
            {arr3.map((item) => (
                <div className="bg-indigo-900 rounded-r-lg">
              <div className="flex  py-3 border border-indigo-700  ">
                <svg
                  height={15}
                  width={40}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
                <p className="text-white font-bold ">{item.text}</p>
              </div></div>
            ))}
          </div>
        </div>
        <div className="my-8">
          <a
            href="#"
            class=" items-center justify-center bg-white rounded-md   px-32 py-4 font-medium bg-white  text-indigo-600 hover:bg-indigo-900"
          >
            Get Started Today
          </a>
        </div>
        <div className="pb-4">
          <h2 className="text-white font-bold pl-24">
            Try workflow lite for free
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SixthTask;
