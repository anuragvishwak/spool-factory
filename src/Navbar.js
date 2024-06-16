import React from "react";
import img1 from "../src/Screenshot 2024-06-16 113814.png";

function Navbar() {
  return (
    <div className="flex items-center shadow">
   <div className="text-center text-[#22287c]  font-bold">
   <img src={img1} className="h-20 mt-5 ml-5 w-36"/>
   <p>Jyoti Fabricators</p>
   </div>

      <div className="ml-20">
        <div className="flex font-serif text-xl text-[#232323] justify-between w-[500px]">
          <p>Home</p>
          <p>About Us</p>
          <p>Products</p>
          <p>Gallery</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
