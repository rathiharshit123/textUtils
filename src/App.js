import "./App.css";
import React, {useState} from 'react'
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message,type) =>{
    setalert({
      message,
      type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#262424';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
    }
  }

  return (
    <>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <TextForm heading = "Enter your Text Below" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
