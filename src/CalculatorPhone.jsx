import React from "react";
import { useState } from "react";




function CalculatorPhone() {
  const [result, setResult] = useState("");
  const [calculated, setCalculated] = useState("");



  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };



  const clear = (e) => {
    setResult("");
    setCalculated("");
  };



  const back = (e) => {
    setResult(result.slice(0, -1));
  };



  const calculate = () => {
    setCalculated(result);
    setResult(eval(result.toString()));
  };
  return (
    <div className="flex  justify-center items-center rounded-lg">
      <div
        className="  justify-center items-center h-screen rounded-xl w-72 bg-gray-900 p-4"
        style={{
          height: "90%",
        }}
      >
        <div className="h-[150px]  font-bold p-2 pb-4 text-2xl  text-white">
          <div className="h-[90px]  flex justify-end items-end font-bold p-2 pb-4">
            {calculated}
          </div>
          <div className="h-[50px] flex justify-end items-end font-bold p-2 pb-4 text-2xl  text-white">
            {result}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-0.5 gap-y-1.5 ">

          <button
            className="h-14 w-14 rounded-full  text-2xl bg-gray-300 font-bold hover:bg-white"
            onClick={clear} >
            AC
          </button>

          <button
            className="h-14 w-14 rounded-full  text-2xl bg-gray-300 font-bold hover:bg-white"
            onClick={back} >
            C
          </button>


          <button
            className="h-14 w-14 rounded-full text-2xl  bg-gray-300 font-bold hover:bg-white"
            name="%"
            onClick={handleClick}  >
            %
          </button>

          <button
            className="h-14 w-14 rounded-full  text-2xl bg-orange-600 font-bold text-white  hover:bg-white hover:text-orange-600"
            name="/"
            onClick={handleClick} >
            /
          </button>


          <button
            className="h-14 w-14 rounded-full text-2xl font-bold bg-white hover:bg-gray-200"
            name="7"
            onClick={handleClick}>
            7
          </button>


          <button
            className="h-14 w-14 rounded-full  text-2xl font-bold bg-white hover:bg-gray-200"
            name="8"
            onClick={handleClick}
          >
            8
          </button>
          <button
            className="h-14 w-14 rounded-full text-2xl  font-bold bg-white hover:bg-gray-200"
            name="9"
            onClick={handleClick}
          >
            9
          </button>
          <button
            className="h-14 w-14 rounded-full text-2xl  font-bold text-white bg-orange-600 hover:bg-white hover:text-orange-600"
            name="*"
            onClick={handleClick}
          >
            X
          </button>
          <button
            className="h-14 w-14 rounded-full  text-2xl font-bold bg-white hover:bg-gray-200"
            name="4"
            onClick={handleClick}
          >
            4
          </button>
          <button
            className="h-14 w-14 rounded-full text-2xl  font-bold bg-white hover:bg-gray-200"
            name="5"
            onClick={handleClick}
          >
            5
          </button>
          <button
            className="h-14 w-14 rounded-full  text-2xl font-bold bg-white hover:bg-gray-200"
            name="6"
            onClick={handleClick}
          >
            6
          </button>
          <button
            className="h-14 w-14 rounded-full  text-2xl font-bold   text-white bg-orange-600 text-4xl  hover:bg-white hover:text-orange-600"
            name="-"
            onClick={handleClick}
          >
            -
          </button>
          <button
            className="h-14 w-14 rounded-full  text-2xl font-bold bg-white hover:bg-gray-200"
            name="1"
            onClick={handleClick}
          >
            1
          </button>
          <button
            className="h-14 w-14 rounded-full  text-2xl font-bold bg-white hover:bg-gray-200"
            name="2"
            onClick={handleClick}
          >
            2
          </button>
          <button
            className="h-14 w-14 rounded-full  text-2xl  font-bold bg-white hover:bg-gray-200"
            name="3"
            onClick={handleClick}
          >
            3
          </button>
          <button
            className="h-14 w-14 rounded-full  text-2xl font-bold  text-white bg-orange-600  hover:bg-white hover:text-orange-600"
            name="+"
            onClick={handleClick}
          >
            +
          </button>
          <button
            className=" col-span-2 h-14 w-28  text-2xl text-left pl-4 rounded-full font-bold bg-white hover:bg-gray-200 "
            name="0"
            onClick={handleClick}
          >
            0
          </button>
          <button
            className="h-14 w-14 rounded-full  text-2xl font-bold bg-white hover:bg-gray-200"
            name="."
            onClick={handleClick}
          >
            .
          </button>
          <button
            className="h-14 w-14 rounded-full  text-2xl font-bold  text-white bg-orange-600  hover:bg-white hover:text-orange-600"
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>{" "}
    </div>
  );
}

export default CalculatorPhone;
