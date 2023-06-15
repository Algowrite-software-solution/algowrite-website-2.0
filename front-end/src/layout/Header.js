import React from "react";
import Button from "../components/Button";
import logo from "../assets/logo.png"

function Header() {
    const ui = (
        <div class="relative flex justify-center">
          <div class="absolute w-full bg-[#0F5AEC] flex justify-between h-20 items-center z-0">
            <div class="items-center sm:p-3 p-5">
              <img src={logo} class="w-8" />
            </div>
            <div>
              <button class="p-3">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/random-115/24/notifications-256.png"
                  class="w-8"
                />
              </button>
            </div>
          </div>
          <div class="absolute z-10 flex bg-[#8CD5FF] sm:bg-transparent  transition duration-500 p-5 sm:p-3 justify-around mt-20 w-full sm:w-auto sm:mt-0">
            <Button className="w-20 rounded-full sm:w-28 bg-slate-200 sm:m-4 z-30" text="ss"/>
            <Button className="w-20 rounded-full sm:w-28 bg-slate-200 sm:m-4 z-30" text="ss"/>
            <Button className="w-20 rounded-full sm:w-28 bg-slate-200 sm:m-4 z-30" text="ss"/>
            <Button className="w-20 rounded-full sm:w-28 bg-slate-200 sm:m-4 z-30" text="ss"/>
          </div>
        </div>
      );
    
      return ui;
}

export default Header;
