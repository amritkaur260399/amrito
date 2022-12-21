import React from 'react'

function ThirdTask() {
  return (
    <div className=' bg-gray-50 h-full  mx-8 my-8 rounded-lg border border-gray-72'>
      <div className='h-20 py-4 bg-white flex  '>
        <div className='w-1/3 flex pl-4 '><svg height={36} width={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg></div>
        <div className='w-1/2 py-4'>
        <ul className="inline-flex  ">
                        <li className="px-5  font-bold text-gray-500 text-lg">Solutions  </li>
                        <li className="px-5 font-bold text-gray-500 text-lg">Pricing</li>
                        <li className="px-5 font-bold text-gray-500 text-lg">Docs</li>
                        <li className="px-5 font-bold text-gray-500 text-lg">More</li>


                    </ul></div>
        <div className='w-1/3 pr-5 inline-flex   justify-end '>
        <a href="#" class=" items-center justify-center bg-white rounded-md   px-5 py-3 font-medium text-indigo-600   hover:bg-indigo-900">Sign in</a>
       <a href="#" class=" items-center justify-center bg-white rounded-md   px-6 py-3 font-medium bg-indigo-600  text-white hover:bg-indigo-900">Sign Up</a>
</div>
      </div>
      <div  className='flex '>
        <div className='w-1/2 px-10 py-36'>
        <h2 className="text-6xl font-bold  ">
                    <span>Data to enrich your </span>
                    <span className="text-indigo-600" >online buisness</span>
                </h2>
                <p className="py-5   text-2xl text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit elit. Ipsa quas atquidem cumque ipsam. Eaque eligendi accusamus provident  amet!</p>
                <div class="pt-8 " >
                    <a href="#" class="items-center bg-indigo-600  px-12 py-5 rounded-md font-medium text-white  mr-4 hover:bg-indigo-900">Get started</a>
                    <a href="#" class="   items-center justify-center bg-white rounded-md border border-gray-72  px-12 py-5  font-medium text-indigo-600 hover:bg-indigo-900">Live demo</a>
                </div></div>
        <div className='w-1/2 height-[100%]' style={{
          backgroundImage:'url(https://previews.123rf.com/images/mikelaptev/mikelaptev1501/mikelaptev150100058/35303633-beautiful-student-girl-n-glasses-studying.jpg)'
        }}>
       
        </div>
      </div>
    </div>
  )
}

export default ThirdTask