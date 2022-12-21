import React, { useState } from 'react'


function CalculatorTwo() {
    const [firstvalue, setFirstvalue] = useState(0);
    const [secondvalue, setSecondvalue] = useState(0);
    const [message, setMessage] = useState('');




    const Change = e => {

        setMessage(e.target.value);
        console.log(message);


    }


    function obtainValue() {


        setFirstvalue(message);
        setMessage('');


    }


    function obtainValue2() {


        setSecondvalue(message);
        setMessage('');

    }


    function clickAdd() {

        let upval1 = Number(firstvalue);
        let upval2 = Number(secondvalue);

        setMessage(upval1 + upval2);
        setFirstvalue('');
        setSecondvalue('');

    }


    function clickSub() {

        setMessage(firstvalue - secondvalue);
        setFirstvalue('');
        setSecondvalue('');

    }


    function clickMul() {

        setMessage(firstvalue * secondvalue);
        setFirstvalue('');
        setSecondvalue('');
    }



    function clickDiv() {

        setMessage(firstvalue / secondvalue);
        setFirstvalue('');
        setSecondvalue('');
    }



    function clickPer() {

        setMessage((firstvalue / secondvalue) * 100);
        setFirstvalue('');
        setSecondvalue('');
    }



    function clickAC() {

        setMessage('');
        setFirstvalue('');
        setSecondvalue('');
    }













    return (
        <div className=" flex justify-center items-center h-screen bg-grey-300 ">
            <div
                className="bg-gray-200 px-6 py-10 w-72 rounded-lg  "
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
                <div className="h-10 flex justify-end font-bold  text-3xl bg-white rounded-lg mt-2">
                    <input type="text" className='w-60 m-0  rounded-lg' value={message} onChange={Change} placeholder='Enter Value' name="" id="input1" /></div>
                <div className="flex mt-3 w-full bg-white h-84 rounded-lg">
                    <div className="w-1/2 ">
                        <div className="first-numb  w-[140px] h-[140px]">

                            <div className="value w-[130px] h-[80px] text-4xl flex items-center justify-center " >{firstvalue}</div>

                            <div className=" flex ">

                                <button onClick={obtainValue} className="inc border-2 h-[40px] w-[100px]   flex justify-center items-center rounded-full bg-gray-200 hover:bg-gray-400  font-bold text-white">Get</button>

                            </div>


                            <div className="first-numb  w-[140px] h-[140px]">

<div className="value w-[130px] h-[80px] text-4xl flex items-center justify-center " >{secondvalue}</div>

    <div className=" flex">

    <button onClick={obtainValue2} className="inc border-2 h-[40px] w-[100px] flex justify-center items-center bg-gray-200 hover:bg-gray-400 rounded-full font-bold text-white">Get</button>

    </div>




    
</div>



                        </div>


                    </div>
                    <div className="w-1/2 p-2 ">
                        <button
                            className=" font-bold bg-gray-200 p-4 rounded-full mb-2 "
                            onClick={clickAdd}
                        >
                            Add
                        </button>
                        <button
                            className=" font-bold bg-gray-200 p-4 rounded-full mb-2 "
                            onClick={clickSub}
                        >
                            Subtract
                        </button>
                        <button
                            className=" font-bold bg-gray-200 p-4 rounded-full mb-2 "
                            onClick={clickMul}
                        >
                            Multipy
                        </button>
                        <button
                            className=" font-bold bg-gray-200 p-4 rounded-full mb-2 "
                            onClick={clickDiv}
                        >
                            Divide
                        </button>
                        <button
                            className=" font-bold bg-gray-200 p-4 rounded-full mb-2 "
                            onClick={clickAC}
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalculatorTwo