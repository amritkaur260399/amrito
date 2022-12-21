import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [data, setData] = useState([]);
  const [filterval,setFilterval] = useState('');


  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setData(response.data.products);
      console.log(response.data.products)
    });
  }, []);

  const handleChange = (e) =>{

    let inputval = e.target.value;
    setFilterval(inputval);
    console.log(inputval);
}



const handleClick = () =>{


   let filteredArray = data.filter((val)=>val.category === filterval)

   setData(filteredArray);


}

const deletefun = ((id)=>{
const filteritems=data.filter((ele) =>{
  return id!==ele.id;
})
setData(filteritems)
})

  return (
    
    <div >
      
        <div className="flex flex-wrap justify-center items-center h-screen w-screen m-4 gap-6">
      {data.map((element) => (
        <div className="h-[85vh] w-[45vh] shadow-lg shadow-gray-400 border-2 border-gray-800 mt-10 rounded-2xl ">
          <div className="h-[45vh] w-full  flex justify-center items-center">
          <img className='h-full w-full rounded-t-2xl' src={element.thumbnail} alt="" srcset="" />
          
          </div>
          <div className="flex justify-center h-[73px] items-center text-xl font-bold  p-4">
            {element.title}
          </div>
          <div className="flex justify-center items-center h-[14vh] ">
            {element.description}
          </div>
          <div className="h-[8vh] w-full flex ">
            <div className="p-3 font-bold w-[50%]  text-left text-2xl">
              {" "}
             $ {element.price}
            </div>
            <div className=" p-3 w-[50%] font-bold  text-right ">
              {element.rating}
            </div>
          </div>
          <div className="flex bg-yellow-400 rounded-b-xl ">
          <button className="p-2  w-full font-bold text-white text-2xl">
            Buy now
          </button>
          <button 
          onClick={()=>{
            deletefun(element.id)
          }}
          ><svg  height={24} width={40}   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg> </button>
</div>
        </div>
      ))}
      </div>
    </div>
    
  );
}

export default Home;
