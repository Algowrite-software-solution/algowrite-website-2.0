import React from "react";
import Button from "../components/Button";
import logo from "../assets/logo.png";

function Header() {
  const ui = (
    <div className="relative flex justify-center">
      <div className="absolute w-full bg-[#0F5AEC] flex justify-between items-center z-0">
        <div className="items-center sm:p-3">
          <img src={logo} className="w-8 ms-10" />
        </div>
        <div>
          <button className="p-3 me-10 ">
            <img
              src="https://cdn1.iconfinder.com/data/icons/random-115/24/notifications-256.png"
              className="w-8"
            />
          </button>
        </div>
      </div>
      <div className="absolute sm:pt-1 z-10 flex gap-1 bg-[#8CD5FF] sm:bg-transparent align-middle justify-around mt-14 w-full sm:w-auto sm:mt-0">
        <Button
          className=" my-2 text-sm sm:text-lg rounded-full py-1 px-2 md:px-5 bg-secondary text-primary font-bold z-30"
          text="Services"
        />
        <Button
          className=" my-2 text-sm sm:text-lg rounded-full py-1 px-2 md:px-5 bg-secondary text-primary font-bold z-30"
          text="Packages"
        />
        <Button
          className=" my-2 text-sm sm:text-lg rounded-full py-1 px-2 md:px-5 bg-secondary text-primary font-bold z-30"
          text="About Us"
        />
        <Button
          className=" my-2 text-sm sm:text-lg rounded-full py-1 px-2 md:px-5 bg-secondary text-primary font-bold z-30"
          text="Contacts"
        />
      </div>
    </div>
  );

  return ui;
}

export default Header;
