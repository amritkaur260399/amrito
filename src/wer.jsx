import axios from 'axios';
import React,{useState,useEffect} from 'react'
import back from './back.jpg'

function Search() {


    const [prodarray,setProdarray] = useState([]);


    useEffect(() => {
      
        axios.get('https://dummyjson.com/products').then((response)=>{

        console.log(response.data.products);



        setProdarray(response.data.products)

        })


    }, [])



    const handleChange = (e) =>{

        let inputval = e.target.value;
        setFilterval(inputval);
        console.log(inputval);
    }



    const handleClick = () =>{


       let filteredArray = prodarray.filter((val)=>val.category === filterval)

       setProdarray(filteredArray);


        console.log(filteredArray);
    }
    
  return (
    <div>

<div className="navbar h-16 flex bg-orange-100">
        <div className="flex items-center ">

       <svg className='h-8 w-8 ml-2' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 47.5 47.5" viewBox="0 0 47.5 47.5"><defs><clipPath id="a"><path d="M0 38h38V0H0v38Z"/></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)"><path fill="#ccd6dd" d="M0 0a4 4 0 0 0-4-4h-28a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V0Z" transform="translate(37 10)"/><path fill="#99aab5" d="m0 0-11.313-11.313c-.027-.028-.037-.063-.06-.091a3.987 3.987 0 0 1 1.384-1.384c.029.023.063.033.09.059L1.415-1.414A1 1 0 0 1 0 0" transform="translate(12.95 19.364)"/><path fill="#99aab5" d="M0 0c-.021.028-.033.063-.06.09l-11.312 11.314a1 1 0 1 1-1.415-1.414L-1.474-1.324c.027-.027.062-.037.09-.06A3.97 3.97 0 0 1 0 0" transform="translate(36.423 7.96)"/><path fill="#99aab5" d="M0 0h-28a4 4 0 0 1-4-4v-1.03l14.528-14.495a4.88 4.88 0 0 1 6.884 0L4-5.009V-4a4 4 0 0 1-4 4" transform="translate(33 32)"/><path fill="#e1e8ed" d="M0 0h-28a3.992 3.992 0 0 1-3.595-2.275l14.766-14.767a4 4 0 0 1 5.657 0L3.595-2.275A3.991 3.991 0 0 1 0 0" transform="translate(33 32)"/></g></svg>
      
       <div className=" text-3xl ml-4 font-bold                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          "> Newsmaker</div>
       <div className=" flex list-none ml-[300px]">
        <li  className='mx-8 cursor-pointer font-bold text-xl'><a href ='/'>Home</a> </li>
        <li className='mx-8 cursor-pointer font-bold text-xl'><a href ='/'>Categories</a></li>
        <li className='mx-8 cursor-pointer font-bold text-xl'><a href ='/'>Contacts</a></li>
        <li className='mx-8 cursor-pointer font-bold text-xl'><a href ='/'>About</a> </li></div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
      </div>


       <div className="absolute right-12 mt-4">
       <input placeholder='Search' value={filterval}  onChange={handleChange} className=' h-8 w-[200px] mx-2 font-bold p-2 outline-none'/>
       <button onClick={handleClick} className=' h-8 w-20 mx-2 rounded-lg bg-cyan-300 font-bold active:bg-cyan-800'>Search</button>

       </div>
      </div>


      <div className=" h-32 flex justify-center items-center text-5xl mt-20"> 

<div className="Head w-[560px]"> <span className='font-bold'>Get Amazing New Stuff </span><div className="flex justify-center"><span className=''>under your fingertips</span></div></div>

</div>


<div className="  flex justify-center items-center mt-20 w-[100%] ">

<div className="grid grid-cols-4 grid-rows-6 gap-10 w-[95%] "  >

{prodarray.map((val)=>(





<div className=" w-[350px] h-[600px]  mt-4 rounded-3xl shadow-xl shadow-slate-800 overflow-hidden">

<div className="img h-[250px] "><img className='h-[250px] w-[347px] rounded-t-3xl' src={val.thumbnail} alt="" srcset="" /></div>

<div className=" flex justify-center mt-4">

<div className="date  font-bold text-2xl truncate ">{val.title}</div>
</div>

<div className=" flex justify-center items-center my-4 h-[100px]">

<div className="title font-bold mr-2 opacity-60 text-center w-[90%]">{val.description}</div>
    </div>

<div className="">

<div className="description font-bold text-3xl text-center">{'Rs.' + val.price + '.00'}</div>
</div>


<div className="mt-4">

<div className="description font-bold  flex items-center justify-center"><span className='text-2xl text-orange-500'>Rating-</span><span className='text-3xl text-orange-500'>{val.rating}</span></div>
</div>

<div className=" mt-6 h-16 bg-sky-400 text-2xl font-bold flex justify-center items-center text-white cursor-pointer">Buy Now</div>

{/* <div className=" flex mt-8 ">
<button className='border-2 ml-8 h-10 w-10 rounded-full border-green-400'>   

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M24 24H0V0h24v24z" opacity=".87"/><path fill="#34a853" d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z" class="color000000 svgShape"/></svg>


</button>

<div className=" mt-1 text-xl ml-2 text-green-600 font-bold">Find out more</div>

</div> */}

</div>

))}








</div>

</div>



    </div>
  )
}

export default Search