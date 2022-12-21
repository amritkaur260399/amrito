



import React, {useState} from 'react'


function CapitalFirst() {


    const [val,setVal] = useState('');
    const [secval,setSecval] = useState('');

    const handleChange = e =>{

        let tarVal = e.target.value;
        setVal(tarVal);
    }



    function onClick (){


       
        let reqVal = val;
       const myArray = reqVal.split(" ");
       let fname = myArray[0];
       let lname = myArray[1];
       let a = fname.charAt(0);
       let b = lname.charAt(0);
       let final = a.toUpperCase() + ' ' + b.toUpperCase();
       setSecval(final);



    }


    function onClear(){


        setVal('');
        setSecval('');
    }


  return (
    <div className='flex justify-center items-center h-[100vh] '>
        <div className="ext-cont border-2 w-[400px] h-[600px] rounded-xl">

            <div className="h-[200px] flex items-center bg-gray-200 rounded-t-xl ">

                <div className=" font-bold w-[600px] h-{100px] flex justify-center items-center justify-between">
                    <input className='ml-4 text-2xl h-24 w-[200px] bg-transparent border-none outline-none ' placeholder='Enter the text' value={val} onChange={handleChange} type="text" />
                    <button onClick={onClick} className='border-2 rounded-xl h-[50px] w-[80px] mr-2 hover:bg-gray-600 bg-gray-400 font-bold text-white'>Get</button>
                    <button onClick={onClear} className='border-2 h-[50px] w-[80px] mr-4 rounded-xl bg-gray-400 hover:bg-red-800 active:bg-red-400 font-bold text-white'>Clear</button>
                </div>
                
            </div>
           


            <div className=" h-[300px] flex items-center">

            <div className="font-bold w-[600px] h-{100px] flex justify-center items-center justify-between">
                    <input className='text-6xl h-24   w-[400px] bg-transparent  text-center ' value={secval} type="text" />
                </div>
                
            </div>


        </div>
    </div>
  )
}

export default CapitalFirst