import axios from "axios";
import React, { useState } from "react";

function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");

  const handleclick = () => {
    const body = {
      firstName: fname,
      lastName: lname,
      phoneNumber: phone,
      emailAddress: email,
      address: {
        addressHome: address,
        districtName: district,
        stateName: state,
      },
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", body)
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className=" flex justify-center items-center h-screen w-screen bg-blue-100">
      <div className="h-[80%] w-[%] p-6 px-20 bg-white rounded-2xl border-2 border-blue-300 shadow-xl shadow-blue-300">
        <h1 className="text-5xl font-bold ">Contact Us</h1>
        <div className="flex justify-start   mt-8">
          <div className="w-[50%] text-left mr-4 font-bold">
            <input
              className="outline-none  border-b-2 border-black h-10"
              type="text"
              placeholder="First Name"
              value={fname}
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
          </div>
          <div className="w-[50%] text-left font-bold">
            <input
              className="outline-none border-b-2 border-black h-10"
              type="text"
              placeholder="Last Name"
              value={lname}
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="w-full mt-3 text-left font-bold">
          <input
            className="outline-none border-b-2 border-black h-10 w-full"
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="w-full mt-3 text-left font-bold">
          <input
            className="outline-none border-b-2 border-black h-10 w-full"
            type="text"
            placeholder="Email "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="w-full mt-3 text-left font-bold">
          <input
            className="outline-none border-b-2 border-black h-10 w-full"
            type="text"
            placeholder="Address  "
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-start   mt-8">
          <div className="w-[50%] text-left mr-4 font-bold">
            <input
              className="outline-none border-b-2 border-black h-10 w-full"
              type="text"
              placeholder="District  "
              value={district}
              onChange={(e) => {
                setDistrict(e.target.value);
              }}
            />
          </div>
          <div className="w-[50%] text-left font-bold">
            <input
              className="outline-none border-b-2 border-black h-10 w-full"
              type="text"
              placeholder="State  "
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
          </div>
        </div>

        <button
          className="mt-20 p-4 px-20 rounded-2xl  bg-blue-400 text-white font-bold"
          onClick={handleclick}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Contact;
