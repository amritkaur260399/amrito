import React from 'react'

const Nineth =()=> {
const arr=[
    {
name:"Lindsay Walton",
title:"Front-end Developer",
email:"lindsay@gmail.com",
role:"member",
edit:"Edit"
    },
    {
name:"Courtney Henry",
title:"Designer",
email:"courtny@gmail.com",
role:"Admin",
edit:"Edit"
    },
    {
name:"Tom Cook",
title:"Director,Product Development",
email:"tomcook@gmail.com",
role:"Member",
edit:"Edit"
    },
    {
name:"Whitney Francis",
title:"Copywriter",
email:"whitneyfrancis@gmail.com",
role:"Admin",
edit:"Edit"
    },
    {
name:"Leonard Krasner",
title:"Senior Designer",
email:"leonardkranser@gmail.com",
role:"Owner",
edit:"Edit"
    },
    {
name:"Floyd Miles",
title:"Principal Designer",
email:"floydmiles@gmail.com",
role:"Admin",
edit:"Edit"
    },
]
  return (
    <div className='m-10 h-full bg-gray-100 p-10 rounded-lg'>
        <div className='flex w-full text-left'>
            <div className='w-3/4'>
                <h1 className='font-bold text-lg'>User</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, facilis.</p>
            </div>
            <div className='w-1/4 text-right pt-2'>
            <a
            href="#"
            class="items-center bg-indigo-600 px-2 py-2   rounded-md font-medium text-white  mr-4 hover:bg-indigo-900"
          >Add User</a>
            </div>
        </div>

        <div className='h-96 text-left pt-10 '>
        <table class="table-fixed w-full bg-white border border-gray-200">
  <thead>
    <tr className='bg-gray-50 border-b border-gray-200  '>
      <th className='w-1/5 py-3 px-3 '>Name</th>
      <th className='w-1/4'>Title </th>
      <th className='w-1/3'>Email</th>
      <th className='w-1/6'>Role</th>
      <th className='1/6'>   </th>
    </tr>
  </thead>
  <tbody>
   {arr.map((item)=>(
   <tr >
      <td className='px-2 py-3 font-bold border-b border-gray-200'>{item.name}</td>
      <td className='border-b border-gray-200 '> {item.title}</td>
      <td className='border-b border-gray-200 '>{item.email}</td>
      <td className='border-b border-gray-200 '>{item.role}</td>
      <td className='text-indigo-500 font-bold border-b border-gray-200'>{item.edit}</td>
    </tr>
  ))} 
  </tbody>
</table>
        </div>
    </div>
  )
}

export default Nineth