import React from 'react'

const arr=[
    {
      id:1,
     text:"Lorem ipsum dolor sit amet."
    },
    {
        id:2,
        text:"olor sit damet consectetur "
    },
    {
       id:3,
        text:"repudiandae molestias esse sint"
    },
    {
      id:4,
        text:" itaque consectetur facilis ipsa"
    },
    {
      id:5,
        text:"amet consectetur adipisicing"
    },
    {
      id:6,
        text:" esse sint ad nobis non"
    },
  ]
    

const SeventhTask=()=> {
  return (
    <div className='h-full  mx-12 my-10 rounded-md border border-gray-90'>
        <div className='h-64'>
            <h2 className='pt-20 text-4xl font-bold'>Pricing Plans</h2>
            <p className=' text-gray-500 font-bold text-xl pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. quas corporis amet aliquam sit totam optio vitae eius.</p>
           <div className='py-10'> 
           <a href="#" class="   items-center justify-center bg-white rounded-md border border-gray-72  px-12 py-3  font-medium  hover:bg-indigo-900">Monthly billing</a>
           <a href="#" class="   items-center justify-center bg-gray-100 rounded-md border border-gray-72  px-12 py-3  font-medium  hover:bg-indigo-900">Yearly billing</a>
           </div> </div>
        <div className='h-full py-8 gap-5 px-8 text-left flex'>
          
          
          
          <div className='w-1/4 border border-gray-110  rounded-lg h-full'>
              <div className='px-6 py-10 border-b border-gray-60'>  <h2 className='font-bold text-2xl'>Hobby</h2>
                <p className='py-4 text-gray-500 font-bold'>All the basics for starting a new business </p>
                
                <span className='font-bold text-4xl'>$12 </span>
                <span className='text-gray-500 font-bold'>/month </span>
                <div className='pt-6 '>
                <a href="#" class="   items-center justify-center bg-gray-900 text-white rounded-md border border-gray-72  px-16 py-3  font-medium  hover:bg-indigo-900">Buy hobby</a>
                </div>
                </div>
                <div className='px-6 py-6 h-96'>
                <h2 className='font-bold'>What's Included</h2>
                {arr?.filter((item)=> item.id<3).map((item) => (
            <div className="flex  py-2  ">
              <svg
                height={15}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>

              <p className="text-gray-500  ">{item.text}</p>
            </div>
          ))}
                </div >
            </div>
            <div className='w-1/4 border border-gray-110  rounded-lg h-full'>
              <div className='px-6 py-10 border-b border-gray-60'>  <h2 className='font-bold text-2xl'>Freelancer</h2>
                <p className='py-4 text-gray-500 font-bold'>All the basics for starting a new business </p>
                
                <span className='font-bold text-4xl'>$24 </span>
                <span className='text-gray-500 font-bold'>/month </span>
                <div className='pt-6'>
                <a href="#" class="   items-center justify-center bg-gray-900 text-white rounded-md border border-gray-72  px-14 py-3  font-medium  hover:bg-indigo-900">Buy Freelancer</a>
                </div>
                </div>
                <div className='px-6 py-6 h-96'>
               
                <h2 className='font-bold'>What's Included</h2>
                {arr?.filter((item)=> item.id<4).map((item) => (
            <div className="flex  py-2  ">
              <svg
                height={15}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>

              <p className="text-gray-500  ">{item.text}</p>
            </div>
          ))}
                </div >
            </div>
            <div className='w-1/4 border border-gray-110  rounded-lg h-full'>
              <div className='px-6 py-10 border-b border-gray-60'>  <h2 className='font-bold text-2xl'>Start-up</h2>
                <p className='py-4 text-gray-500 font-bold'>All the basics for starting a new business </p>
                
                <span className='font-bold text-4xl'>$32 </span>
                <span className='text-gray-500 font-bold'>/month </span>
                <div className='pt-6'>
                <a href="#" class="   items-center justify-center bg-gray-900 text-white rounded-md border border-gray-72  px-16 py-3  font-medium  hover:bg-indigo-900">Buy Startup</a>
                </div>
                </div>
                <div className='px-6 py-6 h-96'>
               
                <h2 className='font-bold'>What's Included</h2>
                {arr?.filter((item)=> item.id<5).map((item) => (
            <div className="flex  py-2  ">
              <svg
                height={15}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>

              <p className="text-gray-500  ">{item.text}</p>
            </div>
          ))}
                </div >
            </div>
            <div className='w-1/4 border border-gray-110  rounded-lg h-full'>
              <div className='px-6 py-10 border-b border-gray-60'>  <h2 className='font-bold text-2xl'>Enterprise</h2>
                <p className='py-4 text-gray-500 font-bold'>All the basics for starting a new business </p>
                
                <span className='font-bold text-4xl'>$48 </span>
                <span className='text-gray-500 font-bold'>/month </span>
                <div className='pt-6'>
                <a href="#" class="   items-center justify-center bg-gray-900 text-white rounded-md border border-gray-72  px-14 py-3  font-medium  hover:bg-indigo-900">Buy Enterprise</a>
                </div>
                </div>
                <div className='px-6 py-6 h-96'>
               

                <h2 className='font-bold'>What's Included</h2>
                {arr.map((item) => (
            <div className="flex  py-2  ">
              <svg
                height={15}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>

              <p className="text-gray-500  ">{item.text}</p>
            </div>
          ))}
                </div >
            </div>
         
           
           
           
        </div>
    </div>
  )
}

export default SeventhTask