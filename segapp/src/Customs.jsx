import React from "react";
import pic1 from "./assets/hompage1.png"
import pic2 from "./assets/home2.png"


const Customs = () => {
  return (
    <div className="bg-red-50 h-screen flex flex-wrap text-center justify-center">
      <div className="w-2/6 flex flex-col justify-center m-10">
        <img src={pic1} alt="Computer" className="w-full h-auto justify-center"></img>
      </div>
      <div className="bg-slate-300 w-2/6 h-1/6 flex flex-col justify-center m-10 mt-60">
        <p className="text-sky-600 text-8xl">Atlas Custom Computer Solutions</p>
      </div>
      <div className="bg-slate-300 w-2/6 h-1/6 flex flex-col justify-center m-10 mt-60">
      <p className="m-10 text-black">Atlas has been in business since 1983. We offer a wide range of services including PC builds and repairs. 
             We specialized in providing custom PCs and home office solutions according to your needs.</p>
      </div>
      <div className="bg-red-50 w-2/6 flex flex-col justify-center m-10">
      <img src={pic2} alt="Computer" className="w-full h-auto justify-center"></img>

      </div>
    </div>
  );
};

export default Customs;

