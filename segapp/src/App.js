import logo from "./logo.svg";
import "./App.css";
import Customs from "./Customs";
import Computers1 from "./Computers1";
import Computers2 from "./Computers2";
import Computers3 from "./Computers3";
import Ceasar from "./Ceasar";
import Form from "./Form";
import Confirmation from "./Confirmation";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* this div will be your <Switch> for react-router */}
      <div>
        <Customs />
        <Computers1 />
        <Computers2 />
        <Computers3 />
        <Ceasar />
        <Form />
        <Confirmation />
      </div>
    </div>
  );
}

export default App;
