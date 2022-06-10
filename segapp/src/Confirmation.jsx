import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Confirmation = () => {
  return (
    <div className="bg-red-50 h-screen">
      <div className="flex flex-col space-y-10 mx-auto bg-gray-300 justify-center w-1/2 items-center p-10">
        <div className="bg-gray flex flex-col h-1/3 justify-center m-10">
          <p className="text-black">Thank you for booking your appointnment with us. An email confirmation will be sent shortly. If you have any other questions or need to cancel, please contact us.</p>
        </div>
        <div className="flex space-x-10">
          <Button
            onSubmit={() => {
              console.log("TODO");
            }}
            variant="contained"
          >
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
