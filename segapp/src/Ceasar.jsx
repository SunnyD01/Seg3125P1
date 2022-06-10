import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Ceasar = () => {
  // TODO: change this for each selection you need

  // START - DROPDOWN
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // END

  //   START - INPUT
  const [textInput, setTextInput] = React.useState("");

  //

  const [value, setValue] = React.useState(null);

  return (
    <div className="bg-red-50 h-screen">
      <div className="flex flex-col space-y-10 mx-auto bg-gray-300 justify-center w-1/2 items-center p-10">

        <h1 className="text-cyan-600 text-4xl">Book Appointment</h1>

        <div class="inline-block relative w-64">
          <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Service</option>
            <option>PC Build</option>
            <option>Diagnostics</option>
            <option>Data Backup/Recovery</option>
            <option>Consultation</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>

        <div class="inline-block relative w-64">
          <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Any</option>
            <option>Chris E</option>
            <option>Chris H</option>
            <option>Markus B</option>
            <option>Crimson J</option>
            <option>Jerry R</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>

        <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="First"></input>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Last"></input>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Email
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="example@domain.ca"></input>
              </div>
            </div>
          </form>
    
    
        {/* <TextField
          variant="outlined"
          value={textInput}
          onChange={(event) => {
            setTextInput(event.target.value);
          }}
          className="w-1/3"
          label="Email"
        />

        <TextField
          variant="outlined"
          value={textInput}
          onChange={(event) => {
            setTextInput(event.target.value);
          }}
          className="w-1/3"
          label="Confirm Email"
        /> */}


        <LocalizationProvider dateAdapter={AdapterDateFns} className="w-1/3">
          <DatePicker
            label="Date"
            className="w-1/3"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>


        <TextField
          // TODO: change hook
          variant="outlined"
          value={textInput}
          onChange={(event) => {
            setTextInput(event.target.value);
          }}
          className="w-1/3"
          label="Comments/Notes"
        />
        <Button
          onSubmit={() => {
            console.log("TODO");
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Ceasar;
