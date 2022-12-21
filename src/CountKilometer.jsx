import React, { useState } from "react";

function CountKilometer() {
  const arr = [
    {
      id: 1,
      svg: (
        <svg
          height={40}
          width={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path d="M122.4 1.2C127.6-.9 133.4-.2 137.9 3l70.3 50.3L278.5 3c4.5-3.2 10.3-3.9 15.4-1.8s8.8 6.7 9.7 12.2l14.1 85.3L403 112.8c5.4 .9 10.1 4.6 12.2 9.7s1.4 10.9-1.8 15.4l-38.8 54.3c-2.2-.1-4.3-.2-6.5-.2c-23.2 0-45 6.2-63.8 17c.1-12.5-2.2-25.3-7.3-37.6c-20.3-49-76.4-72.2-125.4-52s-72.2 76.4-52 125.4c18.3 44.3 66 67.5 111.1 56.6c-36.3 18.2-62.8 53.3-69.1 94.9l-23.6 16.9c-4.5 3.2-10.3 3.9-15.4 1.8s-8.8-6.7-9.7-12.2L98.7 317.7 13.4 303.6c-5.5-.9-10.1-4.6-12.2-9.7S-.2 282.9 3 278.5l50.3-70.3L3 137.9c-3.2-4.5-3.9-10.3-1.8-15.4s6.7-8.8 12.2-9.7L98.7 98.7l14.1-85.3c.9-5.5 4.6-10.1 9.7-12.2zM149 232.7c-13.5-32.7 2-70.1 34.6-83.6s70.1 2 83.6 34.6s-2 70.1-34.6 83.6s-70.1-2-83.6-34.6zM639.9 431.9c0 44.2-35.8 80-80 80H288c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z" />
        </svg>
      ),
      text: "Getup early morning at 6 am",
    },
    {
      id: 2,
      svg: (
        <svg
          height={40}
          width={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M32 32c-9.3 0-18.1 4-24.2 11.1S-1 59.4 .3 68.6l50 342.9c5.7 39.3 39.4 68.5 79.2 68.5h253c39.7 0 73.4-29.1 79.2-68.5l50-342.9c1.3-9.2-1.4-18.5-7.5-25.5S489.3 32 480 32H32zM87.7 224L69 96H443L424.3 224H87.7z" />
        </svg>
      ),
      text: "Take your energy drink",
    },
    {
      id: 3,
      svg: (
        <svg
          height={40}
          width={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 160c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l40 40-71 71C114 302 112 306.9 112 312s2 10 5.7 13.7l36.7 36.7c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7l71-71 40 40c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8V176c0-8.8-7.2-16-16-16H160z" />
        </svg>
      ),
      text: "Head towards north",
    },
    {
      id: 4,
      svg: (
        <svg
          height={40}
          width={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path d="M280 32H256V80h24 57.7l16.4 30.3L256 192l-64-64H32v64h96c88.4 0 160 71.6 160 160c0 11-1.1 21.7-3.2 32h70.4c-2.1-10.3-3.2-21-3.2-32c0-52.2 25-98.6 63.7-127.8l15.4 28.6C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L418.2 128H512V32H448L391.7 78.9 373.1 44.6 366.3 32H352 280zM462.7 311.2l28.2 52.2 42.2-22.8-28.2-52.2c2.3-.3 4.7-.4 7.1-.4c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64c0-15.5 5.5-29.7 14.7-40.8zM187.3 376c-9.5 23.5-32.5 40-59.3 40c-35.3 0-64-28.7-64-64s28.7-64 64-64c26.9 0 49.9 16.5 59.3 40h66.4C242.5 268.8 190.5 224 128 224C57.3 224 0 281.3 0 352s57.3 128 128 128c62.5 0 114.5-44.8 125.8-104H187.3zM128 384c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z" />
        </svg>
      ),
      text: "Start the ride",
    },
    {
      id: 5,
      svg: (
        <svg
          height={40}
          width={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
        </svg>
      ),
      text: "Reach the destination",
    },
  ];
  const arr2 = [
    {
      id: 1,
      svg: (
        <svg
          height={40}
          width={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path d="M360 72c0-22.1-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40s40-17.9 40-40zM144 208c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM496 208c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40zM200 313.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-36.3-67.5c1.7-1.7 3.2-3.6 4.3-5.8L264 217.5V272c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V217.5l26.9 49.9c1.2 2.2 2.6 4.1 4.3 5.8l-36.3 67.5c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L440 313.5V352c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V313.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3H486.2c-16.3 0-31.9 4.5-45.4 12.6l-33.6-62.3c-15.3-28.5-45.1-46.3-77.5-46.3H310.2c-32.4 0-62.1 17.8-77.5 46.3l-33.6 62.3c-13.5-8.1-29.1-12.6-45.4-12.6H134.2c-32.4 0-62.1 17.8-77.5 46.3L18.9 340.6c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L88 313.5V352c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V313.5z" />
        </svg>
      ),
      text: "Take rest at 2 noon",
    },
    {
      id: 2,
      svg: (
        <svg
          height={40}
          width={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
        </svg>
      ),
      text: "Take your meal at 1pm",
    },
    {
      id: 3,
      svg: (
        <svg
          height={40}
          width={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z" />
        </svg>
      ),
      text: "Come back at 3 pm",
    },
    {
      id: 4,
      svg: (
        <svg
          height={40}
          width={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z" />
        </svg>
      ),
      text: "Take rest for one day",
    },
    {
      id: 5,
      svg: (
        <svg
          height={40}
          width={20}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z" />
        </svg>
      ),
      text: "Continue daily routine",
    },
  ];

  const [arr1, setArr1] = useState(arr);
  const [arrtwo, setArrTwo] = useState(arr2);
  const [name, setName] = useState("Amrit");
  const [north, setNorth] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [total, setTotal] = useState(0);

  const change = (value) => {
    if (name === "Amrit") {
      setName("Saab");
      setTotal(0);
      setArr1(arr);
      setArrTwo(arr2);
    } else {
      setName("Amrit");
      setTotal(0);
      setArr1(arr);
      setArrTwo(arr2);
    }
  };

  const add = () => {
    setNorth(north + 1);
  };
  const addleft = () => {
    setLeft(left + 1);
  };
  const addright = () => {
    setRight(right + 1);
  };
  const changetotal = () => {
    setTotal(right + left + north);
    setLeft(0);
    setRight(0);
    setNorth(0);
  };

  const deleteitem = (index) => {
    const updatedItem = arr1.filter((element) => {
      return index !== element.id;
    });

    setArr1(updatedItem);
  };
  const deleteitem2 = (index) => {
    const updatedItem = arrtwo.filter((element) => {
      return index !== element.id;
    });

    setArrTwo(updatedItem);
  };
  return (
    <div>
      <div className="bg-gray-50  p-4 h-full w-screen border-2 border-b border-gray-200">
        <div className="flex bg-gray-200 p-4 rounded-lg shadow-lg shadow-gray-300  ">
          <div className="w-[80%]">
            <h1 className="text-violet-500 text-left font-bold text-2xl">
              Head Toward North{" "}
            </h1>
          </div>
          <div className="w-[20%] flex text-left">
            <p className="w-[25%] text-violet-400 font-bold pt-2">{name}</p>
            <button
              className="p-2 bg-violet-400 w-[50%] text-white font-bold rounded-lg"
              onClick={change}
            >
              Change rider
            </button>
            <p className="w-30% pl-4 pt-2">
              <svg
                height={40}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M280 32H256V80h24 57.7l16.4 30.3L256 192l-64-64H32v64h96c88.4 0 160 71.6 160 160c0 11-1.1 21.7-3.2 32h70.4c-2.1-10.3-3.2-21-3.2-32c0-52.2 25-98.6 63.7-127.8l15.4 28.6C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L418.2 128H512V32H448L391.7 78.9 373.1 44.6 366.3 32H352 280zM462.7 311.2l28.2 52.2 42.2-22.8-28.2-52.2c2.3-.3 4.7-.4 7.1-.4c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64c0-15.5 5.5-29.7 14.7-40.8zM187.3 376c-9.5 23.5-32.5 40-59.3 40c-35.3 0-64-28.7-64-64s28.7-64 64-64c26.9 0 49.9 16.5 59.3 40h66.4C242.5 268.8 190.5 224 128 224C57.3 224 0 281.3 0 352s57.3 128 128 128c62.5 0 114.5-44.8 125.8-104H187.3zM128 384c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z" />
              </svg>
            </p>
          </div>
        </div>
        <div className="   w-[100%]  flex">
          <div className="w-[33%] text-center">
            <h1 className="text-violet-400 pt-8 font-bold text-xl">North</h1>
            <p className="ml-32">
              <svg
                height={55}
                width={200}
                className=" pt-8 pl-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M280 32H256V80h24 57.7l16.4 30.3L256 192l-64-64H32v64h96c88.4 0 160 71.6 160 160c0 11-1.1 21.7-3.2 32h70.4c-2.1-10.3-3.2-21-3.2-32c0-52.2 25-98.6 63.7-127.8l15.4 28.6C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L418.2 128H512V32H448L391.7 78.9 373.1 44.6 366.3 32H352 280zM462.7 311.2l28.2 52.2 42.2-22.8-28.2-52.2c2.3-.3 4.7-.4 7.1-.4c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64c0-15.5 5.5-29.7 14.7-40.8zM187.3 376c-9.5 23.5-32.5 40-59.3 40c-35.3 0-64-28.7-64-64s28.7-64 64-64c26.9 0 49.9 16.5 59.3 40h66.4C242.5 268.8 190.5 224 128 224C57.3 224 0 281.3 0 352s57.3 128 128 128c62.5 0 114.5-44.8 125.8-104H187.3zM128 384c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z" />
              </svg>
            </p>
            <div className="mt-8 p-2  mx-40 pl-4  flex bg-gray-200 ">
              <p className="px-2 font-bold text-violet-600">{north}</p>
              <button className=" text-violet-600 font-bold  " onClick={add}>
                Kms North
              </button>
            </div>
          </div>
          <div className="w-[33%] text-center">
            <h1 className="text-violet-400 pt-8 font-bold text-xl">
              Turn Left
            </h1>
            <p className="ml-32">
              <svg
                height={55}
                width={200}
                className=" pt-8 pl-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </p>
            <div className="mt-8 p-2  mx-40 pl-4 flex bg-gray-200 ">
              <p className="px-2 font-bold text-violet-600">{left}</p>
              <button
                className=" text-violet-600 font-bold  "
                onClick={addleft}
              >
                Kms Left
              </button>
            </div>
          </div>{" "}
          <div className="w-[33%] text-center">
            <h1 className="text-violet-400 pt-8 font-bold text-xl">
              Turn Right
            </h1>
            <p className="ml-32">
              <svg
                height={55}
                width={200}
                className=" pt-8 pl-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </p>
            <div className="mt-8 p-2 mx-40 pl-4  flex bg-gray-200 ">
              <p className="px-2 font-bold text-violet-600">{right}</p>
              <button
                className=" text-violet-600 font-bold  "
                onClick={addright}
              >
                Kms Right
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-96 bg-gray-50 p-4 w-100%">
        <div className="w-[33%]  bg-white ">
          {arr1.length == 0 ? (
            <div className="text-4xl flex justify-center pt-24 font-bold">
              {" "}
              Item not found
            </div>
          ) : (
            arr1.map((element) => (
              <div className="flex pl-8 py-2 bg-white border border-gray-100">
                <p> {element.svg}</p>
                <p className="p-2 w-[400px] text-left font-bold">
                  {element.text}
                </p>
                <button
                  className="p-2 mr-2 rounded-lg text-white font-bold bg-red-400"
                  onClick={() => {
                    deleteitem(element.id);
                    alert(element.text + "  " + "is deleted");
                  }}
                >
                  delete
                </button>
              </div>
            ))
          )}
        </div>
        <div className="w-[33%] pt-24 text-center">
          <button
            className="p-2 bg-violet-600 w-[50%] text-white font-bold rounded-lg"
            onClick={changetotal}
          >
            Total
          </button>
          <p className="mt-4 w-[130px] ml-40 py-3 px-5 rounded-lg text-violet-600 font-bold  bg-gray-200">
            {" "}
            {total} Kms
          </p>
        </div>
        <div className="w-[33%] bg-white ">
          {arrtwo.length == 0 ? (
            <div className="text-4xl flex justify-center pt-24 font-bold">
              {" "}
              Item not found
            </div>
          ) : (
            arrtwo.map((element) => (
              <div className="flex pl-8 py-2 bg-white border border-gray-100">
                <p> {element.svg}</p>
                <p className="p-2 w-[400px] text-left font-bold">
                  {element.text}
                </p>
                <button
                  className="p-2 mr-2 rounded-lg text-white font-bold bg-red-400"
                  onClick={() => {
                    deleteitem2(element.id);
                    alert(element.text + "  " + "is deleted");
                  }}
                >
                  delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default CountKilometer;
