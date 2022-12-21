import React, { useState } from "react";

function StringMethods() {
  const [message, setMessage] = useState("");

  const inputValue = (e) => {
    setMessage(e.target.value);
  };

  const upper = (element) => {
    setMessage(message.toUpperCase());
  };

  const lower = (element) => {
    setMessage(message.toLowerCase());
  };
  const CountWords = (element) => {
    setMessage(message.split(" ").length);
  };
  const CountLetter = (element) => {
    setMessage(message.replace(" ", "").length);
  };

  const Clear = (element) => {
    setMessage("");
  };

  const firstCapital = (element) => {
    const updated = message.split(" ").map(str=>{
      return message.charAt(0).toUpperCase()+message.slice(1).toLowerCase()
    }).join(" ")
  
    setMessage(updated);
  };

  return (
    <div className="flex justify-center mt-10 ">
      <div className="  h-[500px] w-[400px] bg-gray-100 border-2 border-gray-300 rounded-2xl">
        <div className="px-8 py-8 w-[300px] ">
          <input
            className="h-12 text-2xl w-[320px] rounded-lg"
            type="text"
            value={message}
            placeholder="Enter string"
            onChange={inputValue}
          />
        </div>
        <div>
          <div className="m-2">
            <button
              className="p-2 rounded-lg text-white font-bold bg-gray-400"
              onClick={upper}
            >
              upercase
            </button>
          </div>

          <div className="m-2">
            <button
              className="p-2 rounded-lg text-white  font-bold bg-gray-400"
              onClick={lower}
            >
              LowerCase
            </button>
          </div>

          <div className="m-2">
            {" "}
            <button
              className="p-2 rounded-lg text-white  font-bold bg-gray-400"
              onClick={CountWords}
            >
              Count Words
            </button>
          </div>

          <div className="m-2">
            {" "}
            <button
              className="p-2 rounded-lg text-white  font-bold bg-gray-400"
              onClick={CountLetter}
            >
              Count Letters
            </button>
          </div>
          <div className="m-2">
            {" "}
            <button
              className="p-2 rounded-lg text-white  font-bold bg-gray-400"
              onClick={firstCapital}
            >
              Capital
            </button>
          </div>
          <div className="m-2">
            {" "}
            <button
              className="p-2 rounded-lg text-white  font-bold bg-gray-400"
              onClick={Clear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StringMethods;
