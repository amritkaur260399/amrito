import React,{useState} from 'react'

const Eleven=()=> {
    const [num,setNum]=useState(0);
  return (

    
    <div className='flex justify-center m-40'>
<div className='mr-28 bg-yellow-400 p-10  rounded-full'>
    <button className='text-6xl font-bold '
    onClick={()=>{
        if (num>0) {
            setNum(num-1);  
        } else {
            setNum(num);
        }
    }}> -</button>
</div>
<div>
    <p className='text-6xl pt-8 '>{num}</p>
</div>
<div className='ml-28 bg-yellow-400 p-10 rounded-full'>
    <button className='text-6xl font-bold '
    onClick={()=>{
        if (num<10) {
            setNum(num+1);  
        } else {
            setNum(num);
        }
       
    }}> +</button>
</div>
    </div>
  )
}

export default Eleven