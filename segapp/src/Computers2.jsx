import React from "react";

const Computers2 = () => {
  return (
    <div className="bg-red-50  h-screen flex flex-col text-center justify-center">
      <div className="h-1/3 flex w-full my-10">
        <div className="bg-cyan-200 flex flex-col w-1/3 h-full justify-center mx-10">
          <p className="text-5xl">PC Build and Assembly</p>
        </div>
        <div className="bg-cyan-300  flex flex-col w-1/3 h-full justify-center mx-10 ">
          <p className="text-5xl">Diagnosis and Repairs</p>
        </div>
        <div className="bg-cyan-200 flex flex-col w-1/3 h-full justify-center mx-10 ">
          <p className="text-5xl">Free shipping on all orders over $100!</p>
        </div>
      </div>

      <div className="h-2/3 m-10 flex">
        <table className="table-auto bg-slate-400 border-blue-500 flex-col w-full text-white">
          <thead>
            <tr className="text-2xl text-white">
              <th>Service</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className="text-gray-200">
            <tr>
              <td>New PC Build</td>
              <td>We will help you choose your parts, check for compatibility, then assemble the components</td>
              <td>$150.00</td>
            </tr>
            <tr>
              <td>Diagnosis</td>
              <td>Don't know what's wrong? We will do a full diagnosis and provide differant solutions</td>
              <td>$40</td>
            </tr>
            <tr>
              <td>Date Backup and Recovery</td>
              <td>Backup to prevent datea loss or recovere data from a broken device</td>
              <td>$100.00</td>
            </tr>
            <tr>
              <td>Expert Consultaion</td>
              <td>Have any questions regarding office setup or general it solutions? Our expert will help you with any problem you may have!</td>
              <td>$35/Hr</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Flat rate of $15 for package under 2lbs and $24 for anything over 2lbs!</td>
              <td>$15-$24</td>
            </tr>

          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default Computers2;
