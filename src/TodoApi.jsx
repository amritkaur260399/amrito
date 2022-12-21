import React from "react";
import { useState } from "react";
import axios from "axios";

function TodoApi() {
  const [data, setData] = useState([]);
  const [filterval, setFilterval] = useState();
  const [favbutton, setFavbutton] = useState(false);
  const [fav, setFav] = useState([]);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState();
  const [infoSearch, setInfosearch] = useState(false);
  const [infoIcon, setInfoIcon] = useState(false);
  const [infodata, setInfodata] = useState();

  const star = (
    <svg
      height="22"
      width="22"
      fill="yellow"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
    </svg>
  );
  const star2 = (
    <svg
      height="22"
      width="22"
      fill="yellow"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
    </svg>
  );

  const getdata = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log(response);
        setData(response.data);
        setLoading(false);
      });
  };

  const cleardata = () => {
    setData([]);
  };
  const favorites = () => {
    // console.log(fav);
    setFavbutton(true);
  };

  const handleChange = (e) => {
    let inputval = e.target.value;
    setFilterval(inputval);
    // console.log(inputval);
  };

  const handleClick = () => {
    let filteredArray = data.find((val) => val.id == filterval);
    console.log(filteredArray);
    setInfo(filteredArray);
    setInfosearch(true);
    setFilterval("");
  };

  const favr = (id) => {
    let filteredArray = data.filter((val) => val.id == id);
    setFav([...filteredArray, ...fav]);
    //    console.log(filteredArray)
  };
  console.log(fav);
  const deletefun = (id) => {
    const filteritems = data.filter((ele) => {
      return id !== ele.id;
    });
    setData(filteritems);
  };

  const FilterFavList = (id) => {
    const fil = fav.filter((ele) => {
      return id !== ele.id;
    });
    setFav(fil);
  };

  const infoDisplay = (id) => {
    let filtered = data.find((val) => val.id == id);
    console.log(filtered);
    setInfodata(filtered);
    setInfoIcon(true);
  };

  return (
    <div >
       {infoIcon == true ? (
          <div className="flex justify-center mt-2 h-full w-full absolute   z-10 backdrop-blur-sm  ">
            <div className="h-32 w-96 bg-gray-300   rounded-xl  ">
              <div className="p-2 w-full bg-gray-400 h-12 flex rounded-t-xl font-bold">
                <div className="font-bold w-[80%] ">INFO</div>
                <div>
                  {" "}
                  <svg
                    height={30}
                    width={30}
                    fill="red"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    onClick={() => {
                      setInfoIcon(false);
                    }}
                  >
                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">{infodata.name}</div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        
<div className="m-6 flex justify-center bg-gray-50">
      
      <div className="w-full">
        <div className="p-4 flex w-full bg-black sticky top-0">
          <svg
            height={60}
            width={40}
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 0v64h64V96H64zm384 0H192v64H448V96zM64 224v64h64V224H64zm384 0H192v64H448V224zM64 352v64h64V352H64zm384 0H192v64H448V352z" />
          </svg>
          <div className="text-white text-2xl font-bold  p-3 w-[70%] text-left">
            Api Todo List
          </div>
          <div className="">
            <input
              className="h-12 w-72 rounded-lg"
              type="text"
              placeholder="Search"
              value={filterval}
              onChange={handleChange}
            ></input>
          </div>
          <button
            className="h-12 ml-2 px-8 font-bold  bg-gray-100 rounded-lg"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
       
        {infoSearch == true ? (
          <div className="flex justify-center mt-2 ">
            <div className="h-48 w-96 bg-gray-300   rounded-xl">
              <div className="p-2 w-full bg-gray-400 h-12 flex rounded-t-xl font-bold">
                <div className="font-bold w-[80%] ">INFO</div>
                <div>
                  {" "}
                  <svg
                    height={30}
                    width={30}
                    fill="red"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    onClick={() => {
                      setInfosearch(false);
                    }}
                  >
                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">{info.name}</div>
              <div className="flex justify-between m-5">
                <button
                  onClick={() => {
                    setInfo(data.find((val) => val.id == info.id - 1));
                  }}
                  className="px-4 py-2 bg-blue-600 font-bold rounded-lg"
                >
                  Prev
                </button>
                <button
                  onClick={() => {
                    setInfo(data.find((val) => val.id == info.id + 1));
                  }}
                  className="px-4 py-2 bg-blue-600 font-bold rounded-lg"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <div className="m-4 flex justify-center gap-4">
          <buttton
            className="px-10 py-4 bg-black rounded-lg font-bold text-white"
            onClick={getdata}
          >
            Get
          </buttton>
          <buttton
            className="px-10 py-4 bg-red-600 rounded-lg font-bold text-white"
            onClick={cleardata}
          >
            Clear
          </buttton>
          <buttton
            onClick={favorites}
            className="px-10 py-4 bg-yellow-300 rounded-lg font-bold text-white"
          >
            Favourites
          </buttton>
        </div>
        <div className="flex justify-center  rounded-lg  w- full ">
          <div className="flex w-[900px] gap-7 py-4 font-bold bg-gray-200 rounded-lg">
            <div className=" px-10">ID</div>
            <div className=" w-[52%]">Title</div>
            <div>Add to Favourite</div>
            <div> Info</div>
            <div>Delete</div>
          </div>
        </div>
        {favbutton == true ? (
          <div className="  w-full flex justify-center">
            <div className=" w-[30%]   bg-gray-300  rounded-2xl absolute ">
              <div className=" flex p-4 bg-gray-400 rounded-t-2xl">
                {" "}
                <span className=" text-2xl w-[90%] font-bold">Favourites</span>
                <span className="w-[20%]">
                  <svg
                    height={30}
                    width={30}
                    fill="red"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    onClick={() => {
                      setFavbutton(false);
                    }}
                  >
                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                  </svg>
                </span>
              </div>
              <div className="h-60  overflow-y-scroll">
              {fav == 0 ? (
                <div className="p-10 font-bold text-2xl ">No Favourites</div>
              ) : (
                <div className="p-4" overflow-y-scroll>
                  {fav.map((element) => (
                    
                    <div className="p-2  bg-gray-350 border-4 mb-2 flex  rounded-lg border-gray-400 ">
                      <div className="w-[15%] ">{element.id}</div>
                      <div className="w-[80%] text-left">{element.name}</div>
                      <div className="w-[10%] text-left"> 
                       <span onClick={() => {
                            FilterFavList(element.id);
                          }}>{star}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {loading === true ? (
          <div className="flex justify-center items-center h-96 text-red-500 font-bold text-3xl">
            loading...
          </div>
        ) : data.length == 0 ? (
          <div className="flex justify-center items-center h-96 text-red-500 font-bold text-3xl">
            No Data
          </div>
        ) : (
          data.map((element) => (
            <div className="flex justify-center ">
              <div className="  px-2  py-6  flex w-[900px] m-4 rounded-lg bg-white ">
                <div className=" w-20"> {element.id}</div>
                <div className="w-[580px]  text-left"> {element.name}</div>
                {/* {fav.map((val)=>{
                return val.id.toString()
                }).includes(element.id.toString())} code to fill one star*/}
                
               <span 
                  onClick={() => {
                    favr(element.id);
                  }}>
               {fav.map((e) => {
                              return e.id.toString();
                            })
                            .includes(element.id.toString())
                            ? star
                            : star2}
                
                
                
                </span>

                <svg
                  className="ml-14"
                  height={30}
                  width={40}
                  onClick={() => {
                    infoDisplay(element.id);
                  }}
                  fill="red"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192 512"
                >
                  <path d="M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" />
                </svg>

                <svg
                  onClick={() => {
                    deletefun(element.id);
                  }}
                  className="ml-14"
                  height={30}
                  width={40}
                  fill="red"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                </svg>
              </div>

            </div>
          ))
        )} 
      </div>
      </div>
    </div>
  );
}

export default TodoApi;
