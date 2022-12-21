import React from 'react'

const FourthTask = () => {
const arr=[
    {
        model:"car",
        type:"two wheels"
    },
    {
        model:"car",
        type:"four wheels yuj ioxaoui"
    }
]
  return (
    <div className='mt-10 flex justify-center'>
<div className='bg-gray-500 flex gap-5 p-10'>
{arr.map((item)=>(
    <div className='bg-white px-2 py-2'>
<p>
    Model:<span>{item.model}</span>
</p>
<p>
    Model:<span>{item.type}</span>
</p>
    </div>

))

}
</div>
    </div>
    
  );
}

export default FourthTask