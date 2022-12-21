import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function ApiCall() {
    const  arr=[
        {
            title:"jkk",
        },
        {
            title:"jkk",
        },
        {
            title:"jkk",
        },
    ]
    
 const[data,setData]=useState(arr)
useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        console.log(response)
        setData(response.data)
    })


})

  return (
    <div className=' flex  flex-wrap  items-center justify-center ' >
        
        {
            data.map((element)=>(
                
                <div className='text white py-2 px-2 text-left h-72  w-64 m-4 rounded-lg bg-gray-200'>
                    
                 <div>   <span className='text-indigo-500 text-2xl font-bold'>Title:</span> {element.title}</div>
                 <div className='mt-2'>  <span className='text-red-500 text-2xl font-bold'>Description:</span>{element.body}</div>
                    
                    
                    </div>
            ))
        }
        
    </div>
  )
}

export default ApiCall