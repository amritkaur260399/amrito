import React, { useState } from "react";

function Age() {
  const [agenumber, setAgenumber] = useState("");
  const [str, setStr] = useState("");
  const [rev, setRev] = useState("");

  const agecalculate = (Age1) => {
    const milli = Date.parse(Age1);
    const milli1 = Date.now();
    const result = milli1 - milli;

    const year = 1000 * 60 * 60 * 24 * 365;
    const years = Math.round(result / year);
    setAgenumber(years);
    console.log(years);
  };

  const reversefun = () => {
    const string = str.split("").reverse();
    setRev(string);
    setStr("")
  };

  return (
    <div>
      <div className=" text-2xl h-72">
        <p className="p-2">
          {" "}
          <button
            onClick={() => {
              const Age1 = "March 1, 2000";
              agecalculate(Age1);
            }}
          >
            Amrit
          </button>
        </p>
        <p className="p-2">
          {" "}
          <button
            onClick={() => {
              const Age1 = "March 1, 1997";
              agecalculate(Age1);
            }}
          >
            Sahib
          </button>
        </p>
        <p className="p-2">
          {" "}
          <button
            onClick={() => {
              const Age1 = "September 1, 2002";
              agecalculate(Age1);
            }}
          >
            Navtej
          </button>
        </p>
        <p className="p-2">
          {" "}
          <button
            onClick={() => {
              const Age1 = "March 1, 1998";
              agecalculate(Age1);
            }}
          >
            Harman
          </button>
        </p>
        <p className="p-2">{agenumber}</p>
      </div>

      <div className="h-96 bg-blue-100">
        <div className="flex justify-center pt-16">
          <input
            className="h-16 w-72 rounded-lg text-2xl"
            type="text"
            value={str}
            placeholder="Enter String"
            onChange={(e) => {
              setStr(e.target.value);
            }}
          />
          <button
            onClick={reversefun}
            className="px-6 ml-4 py-2 rounded-lg bg-blue-300"
          >
            Reverse
          </button>
        </div>

        <p className="text-2xl mt-6">{rev} </p>
      </div>
    </div>
  );
}

export default Age;
