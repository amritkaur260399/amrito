import React from "react";
import { useState } from "react";
import axios from "axios";

const TaskOne = () => {
  const [search, setSearch] = useState("");
  const [searchcnt, setSearchcnt] = useState("");
  const [showsearch, setShowsearch] = useState(false);
  const [api, setApi] = useState([]);
  const [favourite, setFavourite] = useState(false);
  const [loading, setLoading] = useState(false);
  const [favouriteList, setFavouriteList] = useState([]);
  const [infoo, setInfo] = useState(false);
  const [infodata, setInfodata] = useState({});
  const logo = (
    <svg
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 488 512"
    >
      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
    </svg>
  );
  const get = (
    <svg
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M407.6 64h-367C18.5 64 0 82.5 0 104.6v135.2C0 364.5 99.7 464 224.2 464c124 0 223.8-99.5 223.8-224.2V104.6c0-22.4-17.7-40.6-40.4-40.6zm-162 268.5c-12.4 11.8-31.4 11.1-42.4 0C89.5 223.6 88.3 227.4 88.3 209.3c0-16.9 13.8-30.7 30.7-30.7 17 0 16.1 3.8 105.2 89.3 90.6-86.9 88.6-89.3 105.5-89.3 16.9 0 30.7 13.8 30.7 30.7 0 17.8-2.9 15.7-114.8 123.2z" />
    </svg>
  );
  const clear = (
    <svg
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
    </svg>
  );
  const star = (
    <svg
      height="22"
      width="22"
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
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
    </svg>
  );
  const info = (
    <svg
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192 512"
    >
      <path d="M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" />
    </svg>
  );
  const del = (
    <svg
      height="22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
    </svg>
  );
  const circle = (
    <svg
      height="25"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
    </svg>
  );
  const cross = (
    <svg
      height="25"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
    </svg>
  );

  return (
    <div className="outer ">
      {infoo === true ? (
        <div className="flex justify-center">
          <div
            className={
              infoo == true
                ? `flex justify-center mt-4 absolute mt-8 flex z-10 `
                : `flex justify-center mt-4`
            }
          >
            <div className="infoBox w-min  py-2 bg-slate-300 rounded-xl">
              <div className="top flex justify-between mb-2 ">
                <span className="mr-16 ml-4  fill-amber-400">{logo}</span>
                <span
                  className=" ml-16 mr-4 fill-red-500"
                  onClick={() => {
                    setInfo(false);
                  }}
                >
                  {cross}
                </span>
              </div>
              <div className="name justify-center mx-1 border-t-2 border-slate-400 rounded-full shadow-xl">
                <div className="id font-semibold text-slate-500">
                  {infodata.id}
                </div>
                <div className="name font-semibold text-slate-500 text-lg">
                  {" "}
                  {infodata.name}
                </div>
              </div>
            </div>
          </div></div>
        ) : (
          <div></div>
        )}
      <div className={ infoo===true? `content p-4 blur-sm` :`content p-4`}>

        <div className="navbar bg-slate-600 p-2 rounded-xl shadow-xl">
          <nav className="flex justify-between">
            <div className="left list-none flex ml-4">
              <div className="logo fill-amber-400 mr-4 mt-1 bg-amber-100 rounded-full p-2">
                {logo}
              </div>
              <div className="name text-white font-semibold text-xl mr-8 mt-2">
                GetInfoo
              </div>
              <li className="text-white mr-4 text-lg mt-2 cursor-pointer hover:text-xl">
                Company
              </li>
              <li className="text-white mr-4 text-lg mt-2 cursor-pointer hover:text-xl">
                Products
              </li>
              <li className="text-white text-lg mt-2 cursor-pointer      hover:text-xl">
                About Us
              </li>
            </div>
            <div className="right flex mr-4">
              <input
                value={search}
                type="text"
                placeholder="Search comments"
                className="h-min mt-1 rounded-xl px-2 py-1 mr-4"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />

              <button
                className="rounded-xl bg-slate-200 h-min text-slate-800 font-semibold mt-1 px-2 py-1 hover:text-white hover:bg-slate-700"
                onClick={() => {
                  setSearchcnt(api.find((val) => val.id == search));                                    setShowsearch(true);
                }}
              >
                Search
              </button>
            </div>
          </nav>
        </div>
        {showsearch == true ? (
          <div className="flex justify-center mt-4">
            <div className="infoBox w-min  py-2 bg-slate-300 rounded-xl">
              <div className="top flex justify-between mb-2 ">
                <span className="mr-16 ml-4  fill-amber-400">{logo}</span>
                <span
                  className=" ml-16 mr-4 fill-red-500"
                  onClick={() => {
                    setShowsearch(false);
                    setSearch("");
                  }}
                >
                  {cross}
                </span>
              </div>
              <div className="name justify-center mx-1 border-t-2 border-slate-400 rounded-full shadow-xl">
                <div className="id font-semibold text-slate-500">
                  {searchcnt.id}
                </div>
                <div className="name font-semibold text-slate-500 text-lg">
                  {" "}
                  {searchcnt.name}
                </div>
              </div>
              <div className="buttons mt-2 flex justify-between">
                <button
                  className="rounded-2xl bg-slate-500 ml-3 font-semibold text-slate-200 p-1 px-2"
                  onClick={() => {
                    setSearchcnt(api.find((val) => val.id == searchcnt.id - 1));
                  }}
                >
                  Back
                </button>
                <button
                  className="rounded-2xl bg-slate-500 mr-3 font-semibold text-slate-200  p-1 px-2"
                  onClick={() => {
                    setSearchcnt(api.find((val) => val.id == searchcnt.id + 1));
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {favourite === true ? (
          api.length > 1 ? (
            <div className="flex justify-center mt-4  ">
              <div className="favlist   py-2 bg-slate-300 rounded-xl w-[500px] absolute top-[220px]">
                <div className="top flex  mb-2 justify-center">
                  <span className=" text-2xl font-semibold">
                    Your Favourite List
                  </span>
                  <span
                    className="  mt-1  fill-red-500"
                    onClick={() => {
                      setFavourite(false);
                      console.log("favouritelist", favouriteList);
                    }}
                  >
                    {cross}
                  </span>
                </div>
                {favouriteList.length < 1 ? (
                  <div className="">No Data Found</div>
                ) : (
                  <div className="name  justify-center mx-1 px-3">
                    {favouriteList.map((e) => (
                      <div className="flex justify-between mt-2 shadow-xl p-2">
                        <div className="left flex items-center">
                          <div className=" id mr-2 font-bold text-lg text-slate-700">
                            {e.id}
                          </div>
                          <div className="text-lg font-semibold text-slate-500 text-start">
                            {e.name}
                          </div>
                        </div>

                        <div
                          className="star fill-amber-500"
                          onClick={() => {
                            setFavouriteList(
                              favouriteList.filter((val) => val.id !== e.id)
                            );
                          }}
                        >
                          {star}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>Get data First</div>
          )
        ) : (
          <div></div>
        )}
       
        {/* {infoo === true ? (
          <div
            className={
              infoo == true
                ? `flex justify-center mt-4 backdrop-blur-xl`
                : `flex justify-center mt-4`
            }
          >
            <div className="infoBox w-min  py-2 bg-slate-300 rounded-xl">
              <div className="top flex justify-between mb-2 ">
                <span className="mr-16 ml-4  fill-amber-400">{logo}</span>
                <span
                  className=" ml-16 mr-4 fill-red-500"
                  onClick={() => {
                    setInfo(false);
                  }}
                >
                  {cross}
                </span>
              </div>
              <div className="name justify-center mx-1 border-t-2 border-slate-400 rounded-full shadow-xl">
                <div className="id font-semibold text-slate-500">
                  {infodata.id}
                </div>
                <div className="name font-semibold text-slate-500 text-lg">
                  {" "}
                  {infodata.name}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )} */}

        <div className="buttons flex justify-center mt-4">
          <button
            className="get flex bg-slate-300 p-2 rounded-2xl mr-8 shadow-xl"
            onClick={() => {
              setLoading(true);

              axios
                .get("https://jsonplaceholder.typicode.com/comments")
                .then((res) => {
                  const filtereddata = res.data.filter((a) => a.id < 21);
                  setApi(filtereddata);
                  console.log(filtereddata);
                  setLoading(false);
                });
            }}
          >
            <span className="fill-green-500 mr-2 mt-1">{get}</span>
            <span className="font-semibold text-xl">Get API</span>
          </button>
          <button
            className="clear flex bg-slate-300 p-2 rounded-2xl mr-8    shadow-xl"
            onClick={() => {
              setApi([]);
            }}
          >
            <span className="fill-red-500 mr-2 mt-1">{clear}</span>
            <span className="font-semibold text-xl">Clear</span>
          </button>
          <button
            className="favourite flex bg-slate-300 p-2 rounded-2xl shadow-xl"
            onClick={() => {
              setFavourite(!favourite);
            }}
          >
            <span className="fill-amber-400 mr-2 mt-1">{star}</span>
            <span className="font-semibold text-xl">Favourites</span>
          </button>
        </div>
        <div className="outer my-4 mx-8 py- px-16 ">
          <div className="titlesss flex justify-between px-4 mb-2  rounded py-2  bg-slate-300 shadow-xl">
            <div className="left ml-8">
              <span className="mr-6 text-xl font-semibold">Id</span>
              <span className="ml-6 text-xl font-semibold ">Title</span>
            </div>
            <div className="right mr-8">
              <span className=" text-xl font-semibold ">Favourites</span>
              <span className="ml-4 text-xl font-semibold "> Info</span>
              <span className="ml-4 text-xl font-semibold ">Delete</span>
            </div>
          </div>
          {loading === true ? (
            <div
              className="text-3xl text-black flex justify-center items-center mt-12 "
              viewBox="0 0 24 24"
            >
              <svg
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="animate-spin fill-blue-500"
              >
                <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
              </svg>
            </div>
          ) : (
            <div className="list">
              {api.length < 1 ? (
                <div className="text-black border-2">No Data Found</div>
              ) : (
                <div className="listcnt ">
                  {api.map((val) => (
                    <div
                      className="tile flex  justify-between px-4 mb-2  rounded py-3  bg-slate-200 shadow-xl"
                      key={val.id}
                    >
                      <div className="left ml-8">
                        <span className="mr-6 text-lg font-semibold">
                          {val.id}
                        </span>
                        <span className="ml-6  text-lg">{val.name}</span>
                      </div>
                      <div className="right mr-8 flex w-[17%] justify-between ">
                        <span
                          className=" fill-amber-400  "
                          onClick={() => {
                            const data = {
                              id: val.id,
                              name: val.name,
                              title: val.title,
                              body: val.body,
                            };
                            // favouriteList.filter((val) => val.id !== e.id)
                            favouriteList
                              .map((e) => {
                                return e.id.toString();
                              })
                              .includes(val.id.toString())
                              ? setFavouriteList(favouriteList.filter(
                                (value) => value.id !== val.id
                              )) 
                              : setFavouriteList(favouriteList.concat(data));
                            console.log("favorite List id", favouriteList);
                          }}
                        >
                          {favouriteList
                            .map((e) => {
                              return e.id.toString();
                            })
                            .includes(val.id.toString())
                            ? star
                            : star2}
                        </span>
                        <span
                          className="fill-blue-500"
                          onClick={() => {
                            const data2 = {
                              id: val.id,
                              name: val.name,
                            };
                            setInfodata(data2);
                            setInfo(true);
                          }}
                        >
                          {info}
                        </span>
                        <span
                          className=" fill-red-500  "
                          onClick={() => {
                            setApi(api.filter((e) => e.id !== val.id));
                          }}
                        >
                          {del}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskOne;
