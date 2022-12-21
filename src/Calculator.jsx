import React, { useState } from "react";

function Calculator() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className=" flex justify-center items-center h-screen bg-grey-300 ">
      <div
        className="bg-yellow-300 px-6 py-10 w-72 rounded-lg  "
        style={{
          height: "80%",
        }}
      >
        <div className="flex  ">
          <div>
            <svg
              height={40}
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 224c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zm32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zM160 320c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zM288 192c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zM256 320c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zm32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32z" />
            </svg>
          </div>
          <div className="font-bold text-2xl pl-4">Calculator</div>
        </div>
        <div className="h-10 flex justify-end font-bold pr-2 text-3xl bg-white rounded-lg mt-2">{result}</div>
        <div className="flex mt-3 w-full bg-white h-84 rounded-lg">
          <div className="w-1/2 ">
            <div>
              <p className="text-6xl bg-white ">{num}</p>
            </div>
            <div className="flex justify-center bg-yellow-400 gap-4 m-2 rounded-lg ">
              <div >
                <button
                  className="text-6xl font-bold "
                  onClick={() => {
                    setNum(num - 1);
                  }}
                >
                  {" "}
                  -
                </button>
              </div>

              <div className=" bg-yellow-400  rounded-full">
                <button
                  className="text-6xl font-bold "
                  onClick={() => {
                    setNum(num + 1);
                  }}
                >
                  {" "}
                  +
                </button>
              </div>
            </div>
            <div>
              <p className="text-6xl bg-white ">{num2}</p>
            </div>
            <div className="flex justify-center bg-yellow-400 gap-4 m-2 rounded-lg ">
              <div className="   ">
                <button
                  className="text-6xl font-bold "
                  onClick={() => {
                    setNum2(num2 - 1);
                  }}
                >
                  {" "}
                  -
                </button>
              </div>

              <div className=" bg-yellow-400  rounded-full">
                <button
                  className="text-6xl font-bold "
                  onClick={() => {
                    setNum2(num2 + 1);
                  }}
                >
                  {" "}
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-2 ">
          <button
                  className=" font-bold bg-yellow-300 p-4 rounded-full mb-2 "
                  onClick={() => {
                    setResult(num + num2);
                  }}
                >
                Add
                </button>
          <button
                  className=" font-bold bg-yellow-300 p-4 rounded-full mb-2 "
                  onClick={() => {
                    setResult(num - num2);
                  }}
                >
                Subtract
                </button>
          <button
                  className=" font-bold bg-yellow-300 p-4 rounded-full mb-2 "
                  onClick={() => {
                    setResult(num * num2);
                  }}
                >
                Multipy
                </button>
          <button
                  className=" font-bold bg-yellow-300 p-4 rounded-full mb-2 "
                  onClick={() => {
                    setResult(num2 / num);
                  }}
                >
                Divide
                </button>
          <button
                  className=" font-bold bg-yellow-300 p-4 rounded-full mb-2 "
                  onClick={() => {
                    setResult(0);
                    setNum(0);
                    setNum2(0);

                  }}
                >
                Clear
                </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
