import React ,{useState} from 'react';
//import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
//yarn add react-router-dom;

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode]= useState("light");
  const [alert,setAlert]=useState("");
  const removeClasses=()=>{
    //document.body.classList.remove('bg-light');
    //document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const modeChange=(cls)=>{
    removeClasses();
    document.body.classList.add("bg-"+cls)
  }

  const toggleMode=()=>{
    //removeClasses();
    //document.body.classList.add("bg-"+cls)
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#0d2037";
      showAlert("Dark mode has been enabled","success");
      //document.title="TextMat - Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
      //document.title="TextMat - Light Mode";
    }
  }
  return (
   <>
  <Router>
    {/*<Navbar title="TextMat" aboutText="About"/>*/}
    <Navbar title="TextMat" aboutText="About" mode={mode} toggleMode={toggleMode} modeChange={modeChange}/>
    <Alert alert={alert}></Alert>
    <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
            {/*<About />
          </Route>*/}

          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />}/>
              {/*<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>*/}
        {/*</Route>*/}
      </Routes>
    </div>
</Router>
   </>
  );
}

export default App;
