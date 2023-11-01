/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from "react";
import Donations from "../../Donations/Donations";

const Banner = ({ donations }) => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (input) {
      setSearch(input);
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="w-full h-[70vh] bg-[url('https://i.ibb.co/1GxqHzY/fc1f79e18cdc1a12320b9b10ec3e253d.jpg')] bg-cover bg-center">
          <div
            className="w-full h-full flex flex-col justify-center items-center
             bg-white opacity-80"
          >
            <span className="text-[#0B0B0B] text-base md:text-2xl lg:text-5xl font-bold w-1/2 text-center">
              I Grow By Helping People In Need
            </span>
            <div className="form-control mt-5">
              <form onSubmit={handleSearch} className="input-group">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered w-full"
                />
                <button className="btn bg-[#FF444A] text-white hover:text-black">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div>
          <Donations donations={donations} search={search}></Donations>
        </div>
      </div>
    </div>
  );
};

export default Banner;
