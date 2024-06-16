import React from "react";
import Navbar from "./Navbar";
import img1 from "../src/WhatsApp Image 2024-06-16 at 10.22.55_cbcbcfe3.jpg";
import img2 from "../src/WhatsApp Image 2024-06-16 at 10.23.03_5acbfae6.jpg";
import img3 from "../src/WhatsApp Image 2024-06-16 at 10.23.04_2d03cf35.jpg";
import img4 from "../src/WhatsApp Image 2024-06-16 at 10.23.04_51b9cf5f.jpg";

function LandingPage() {
  return (
    <div>
      <div>
        <Navbar />

        <div className="flex justify-center mt-10">
          <div className="grid w-[500px]  gap-5 grid-cols-2">
            <img
              src={img1}
              className="h-[250px] shadow-xl rounded-xl w-[300px]"
            />
            <img
              src={img2}
              className="h-[250px] shadow-xl rounded-xl w-[300px]"
            />
            <img
              src={img3}
              className="h-[250px] shadow-xl rounded-xl w-[300px]"
            />
            <img
              src={img4}
              className="h-[250px] shadow-xl rounded-xl w-[300px]"
            />
          </div>

          <div className="ml-20">
            <p className="text-2xl mb-5 font-bold">About Us </p>
            <div className="  rounded-tr-3xl rounded-bl-3xl font-serif text-[#232323] h-auto w-[700px]">
              <p className="text-justify">
                WELCOME TO JYOTI FABRICATORS! WE ARE A PROUD SUBSIDIARY OF JYOTI
                FABRICATORS, AND HAVE BEEN SERVING CUSTOMERS FOR OVER 30 YEARS.
                WE SPECIALIZE IN PROVIDING PROCESS STEEL DRUMS, MS SPOOLS,
                WOODEN SPOOLS AND DRUM ACCESSORIES. FROM THE BEGINNING, OUR
                MISSION HAS BEEN TO PROVIDE THE HIGHEST QUALITY OF WORKMANSHIP,
                SERVICE, AND CUSTOMER SATISFACTION. OUR TEAM OF HIGHLY TRAINED
                PROFESSIONALS IS DEDICATED TO DELIVERING THE FINEST PRODUCTS
                AVAILABLE. WE TAKE TREMENDOUS PRIDE IN OUR CRAFTSMANSHIP AND OUR
                COMMITMENT TO EXCELLENCE. THROUGHOUT THE YEARS, WE HAVE
                ESTABLISHED AN IMPRESSIVE REPUTATION AMONG OUR CUSTOMERS. WE
                STRIVE TO MAINTAIN THAT REPUTATION AND CONTINUE TO BE THE LEADER
                IN OUR INDUSTRY. WE UNDERSTAND THAT IT IS ESSENTIAL TO KEEP UP
                WITH MODERN TECHNOLOGY TO REMAIN COMPETITIVE. AT JYOTI
                FABRICATORS, WE UNDERSTAND THAT OUR CUSTOMERS COME FIRST. WE ARE
                ALWAYS STRIVING TO FIND WAYS TO IMPROVE OUR SERVICES AND
                PRODUCTS. WE ARE COMMITTED TO PROVIDING THE BEST POSSIBLE
                PRODUCTS AND SERVICES TO OUR CUSTOMERS. WE LOOK FORWARD TO
                WORKING WITH YOU AND PROVIDING YOU WITH THE HIGHEST QUALITY
                PRODUCTS AND SERVICES. THANK YOU FOR CHOOSING JYOTIFABRICATORS
                -THE LEADER IN PROCESS STEEL DRUMS, MS SPOOLS, WOODEN SPOOLS AND
                DRUM ACCESSORIES.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
