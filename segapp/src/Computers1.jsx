import React from "react";

const Computers1 = () => {
  return (
    <div className="bg-rose-200 h-screen flex text-center justify-center">
      <div className="h-full flex flex-col w-full mx-10">
        <div className="bg-blue-300 flex flex-col w-full h-1/3 justify-center m-10 ">
          <p class="text-2xl">Address:</p>
          <p>75 Laurier Ave. E, Ottawa, ON K1N 6N5</p>
        </div>
        <div className="bg-blue-300 flex flex-col w-full h-1/3 justify-center m-10 ">
        <p class="text-2xl">Hours:</p>
          <p>Mon: 8:30am-7:00pm</p>
          <p>Tue: 8:30am-7:00pm</p>
          <p>Wed: 8:30am-7:00pm</p>
          <p>Thu: 8:30am-7:00pm</p>
          <p>Fri: 8:30am-6:00pm</p>
          <p>Sat: 10:00am-5:00pm</p>
          <p>Sun: 11:00am-4:00pm</p>
        </div>
        <div className="bg-blue-300 flex flex-col w-full h-1/3 justify-center m-10 ">
          <p class="text-2xl">Contact Us:</p>
          <p>Email: contact@atlascomputers.ca</p>
          <p>Phone: (613) 123-4567</p>


        </div>
      </div>
      <div className="w-full m-10">
        <div className="bg-pink-400 flex flex-col justify-center h-full">
          <p>Atlas Computers</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11201.26887632515!2d-75.6831329!3d45.4231064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x188a59c3622fdbae!2sUniversity%20of%20Ottawa!5e0!3m2!1sen!2sca!4v1654562516871!5m2!1sen!2sca"
            className="h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Computers1;
