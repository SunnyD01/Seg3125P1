import React from "react";
import CEvan from "./assets/ChrisEvans.png"
import CHems from "./assets/ChrisHemsworth.png"
import MRuff from "./assets/MarkRuffalo.png"
import SJoha from "./assets/ScarlettJohansson.png"
import JRenn from "./assets/JeremyRenner.png"


const Computers3 = () => {
  return (
    <div className="bg-rose-200 h-screen flex text-center justify-center">
      <div className="h-full flex-col w-full">
        <div className="bg-pink-500 flex h-1/12 justify-center mx-10 my-5">
          <p>Meet our Specialists</p>
        </div>

        <div className="bg-pink-500 flex h-1/6 justify-center mx-10 my-5">
          <div className="bg-slate-200 flex flex-col h-full w-2/12 justify-center">
            <img src={CEvan} alt="Chris Evans" className="w-auto h-full justify-center"></img>
          </div>
          <div className="bg-slate-100 flex flex-col h-full w-8/12">
            <p className="text-black text-2xl">Christopher Ewen</p>
            <p className="text-black text-left mx-5"><br></br><br></br>Chris E has been in the industry for 20 years. He has graduated from MIT and has a degree in IT technology.</p>
            <p className="text-black text-left mx-5"><br></br>Chris specializes in data recovery and diagnostics</p>
          </div>
          <div className="bg-slate-200 flex flex-col h-full w-2/12 justify-center">
            <p className="text-black">Mon: 8:30am-4:00pm<br></br>Tue: 8:30am-4:00pm<br></br>Wed: 8:30am-4:00pm<br></br>Thu: 8:30am-4:00pm<br></br>Fri: 8:30am-4:00pm<br></br>Sat: N/A<br></br>Sun: N/A<br></br></p>
          </div>
        </div>

        <div className="bg-pink-500 flex h-1/6 justify-center mx-10 my-5">
          <div className="bg-slate-200 flex flex-col h-full w-2/12 justify-center">
            <img src={CHems} alt="Chris Hemsworth" className="w-auto h-full justify-center"></img>
          </div>
          <div className="bg-slate-100 flex flex-col h-full w-8/12">
            <p className="text-black text-2xl">Christopher Hemming</p>
            <p className="text-black text-left mx-5"><br></br><br></br>Chris H has been building computers since he was 12. He has a degree in  human kinetics.</p>
            <p className="text-black text-left mx-5"><br></br>Chris specializes in PC builds and office setups.</p>
          </div>
          <div className="bg-slate-200 flex flex-col h-full w-2/12 justify-center">
            <p className="text-black">Mon: 8:30am-4:00pm<br></br>N/A<br></br>Wed: 8:30am-4:00pm<br></br>Thu: 8:30am-4:00pm<br></br>Fri: 8:30am-4:00pm<br></br>Sat: N/A<br></br>Sun: N/A<br></br></p>
          </div>
        </div>

        <div className="bg-pink-500 flex h-1/6 justify-center mx-10 my-5">
          <div className="bg-slate-200 flex flex-col h-full w-2/12 justify-center">
            <img src={MRuff} alt="Mark Ruffalo" className="w-auto h-full justify-center"></img>
          </div>
          <div className="bg-slate-100 flex flex-col h-full w-8/12">
            <p className="text-black text-2xl">Markus Buffalo</p>
            <p className="text-black text-left mx-5"><br></br><br></br>Markus is a full time data recovery specialist. Graduating with a degree in computer Engineering from CalTech, he is extremly skilled at recovering lost data.</p>
            <p className="text-black text-left mx-5"><br></br>Markus specializes in data recovery.</p>
          </div>
          <div className="bg-slate-200 flex flex-col h-full w-2/12 justify-center">
            <p className="text-black">Mon: N/A<br></br>Tue: 8:30am-4:00pm<br></br>N/A<br></br>Thu: 8:30am-4:00pm<br></br>Fri: N/A<br></br>Sat: N/A<br></br>Sun: N/A<br></br></p>
          </div>
        </div>

        <div className="bg-pink-500 flex h-1/6 justify-center mx-10 my-5">
          <div className="bg-slate-200 flex flex-col h-full w-2/12 justify-center">
            <img src={SJoha} alt="Scarlett" className="w-auto h-full justify-center"></img>
          </div>
          <div className="bg-slate-100 flex flex-col h-full w-8/12">
            <p className="text-black text-2xl">Crimson Johnson</p>
            <p className="text-black text-left mx-5"><br></br><br></br>Crimson has worked with ergonomic designs for over 10 years. She has extensive research into optimal office setups.</p>
            <p className="text-black text-left mx-5"><br></br>Crimson is an expert consultant.</p>
          </div>
          <div className="bg-slate-200 flex flex-col h-full w-2/12 justify-center">
            <p className="text-black">Mon: 8:30am-4:00pm<br></br>Tue: 8:30am-4:00pm<br></br>Wed: 8:30am-4:00pm<br></br>Thu: 8:30am-4:00pm<br></br>Fri: 8:30am-4:00pm<br></br>Sat: N/A<br></br>Sun: N/A<br></br></p>
          </div>
        </div>

        <div className="bg-pink-500 flex h-1/6 justify-center mx-10 my-5">
          <div className="bg-slate-200 flex flex-col h-full w-2/12 justify-center">
            <img src={JRenn} alt="Jeremy" className="w-auto h-full justify-center"></img>
          </div>
          <div className="bg-slate-100 flex flex-col h-full w-8/12">
            <p className="text-black text-2xl">Jerry Runner</p>
            <p className="text-black text-left mx-5"><br></br><br></br>Jerry is deeply pasionate about technology. He has a deep understanding of anything electronic.</p>
            <p className="text-black text-left mx-5"><br></br>Jerry specializes in diagnostics.</p>
          </div>
          <div className="bg-slate-200 flex flex-col h-full w-2/12 justify-center">
            <p className="text-black">Mon: 8:30am-4:00pm<br></br>Tue: 8:30am-4:00pm<br></br>Wed: 8:30am-4:00pm<br></br>Thu: 8:30am-4:00pm<br></br>Fri: 8:30am-4:00pm<br></br>Sat: N/A<br></br>Sun: N/A<br></br></p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Computers3;
