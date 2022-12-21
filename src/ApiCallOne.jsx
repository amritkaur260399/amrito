import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ApiCallOne() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [id, setId] = useState( 9);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setData(response.data);
    });
  }, []);








  const detail = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        console.log(response.data);
        setData1(response.data);
      });

  };



  return (
    <div className="flex  justify-center items-center h-screen w-screen gap-6 bg-black ">
      <div className="flex flex-wrap  justify-center items-center gap-2 py-4 h-[600px] w-[540px] bg-black rounded-2xl">
        {data.map((element) => (
          <div
            className="h-24 w-64 p-2 bg-blue-200 cursor-pointer text-left rounded-2xl key={id}"
            onClick={() => {
              detail(element.id);
              
            }}
          >
         <span className="font-bold text-xl">Name:</span>   {element.name}<br></br>
         <span className="font-bold text-xl ">Email:</span>   {element.email}
          </div>
        ))}
      </div>

      <div className="h-[600px] w-[450px] bg-black pb-10 px-4 border-4 border-gray-600 text-left rounded-2xl">
        <div className="  h-72 w-full  " >
        <img className=' h-[60%]  px-16 ' style={{
            borderRadius:"100%"
        }} src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'></img>

<div className="h-12 flex justify-center items-center text-white text-2xl font-bold"> {data1.name}</div>

        <div className="flex gap-2 rounded-lg w-full h-[20%] mt-4 ">
            <div className="w-[50%] rounded-xl h-full  flex  border-4 border-gray-600 ">

            <svg height={32} width={40} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
           <span className="text-white ">{data1.phone}</span> 
            </div>
            <div className="w-[50%] rounded-xl h-full flex  border-4 border-gray-600 ">
            <svg   height={32} width={40} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
            <span className="text-white ">{data1.email}</span> 
            </div>
            
        </div>
        </div>
        <div className="mt-10">
       <div className="flex">
       <svg height={32} width={40} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>
        <span className=" text-white ">  {data1.name}   </span>
          </div>
      <div className="flex mt-6" >
      <svg height={32} width={40} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M88 104C88 95.16 95.16 88 104 88H152C160.8 88 168 95.16 168 104V152C168 160.8 160.8 168 152 168H104C95.16 168 88 160.8 88 152V104zM280 88C288.8 88 296 95.16 296 104V152C296 160.8 288.8 168 280 168H232C223.2 168 216 160.8 216 152V104C216 95.16 223.2 88 232 88H280zM88 232C88 223.2 95.16 216 104 216H152C160.8 216 168 223.2 168 232V280C168 288.8 160.8 296 152 296H104C95.16 296 88 288.8 88 280V232zM280 216C288.8 216 296 223.2 296 232V280C296 288.8 288.8 296 280 296H232C223.2 296 216 288.8 216 280V232C216 223.2 223.2 216 232 216H280zM0 64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM48 64V448C48 456.8 55.16 464 64 464H144V400C144 373.5 165.5 352 192 352C218.5 352 240 373.5 240 400V464H320C328.8 464 336 456.8 336 448V64C336 55.16 328.8 48 320 48H64C55.16 48 48 55.16 48 64z"/></svg>
      <span className=" text-white ">  {data1.company.name}</span></div>
      
      <div className="flex mt-6">
<span className="text-white font-bold">Street :</span>
<span className="text-white">{data1.address.street}</span>
      </div>
      </div>
        
      

      </div>
    </div>
  );
}

export default ApiCallOne;
