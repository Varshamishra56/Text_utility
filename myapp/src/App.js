import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import ToastCopy from "./Components/ToastCopy";

function App() {
  const [darkmode, setdarkMode] = useState(true);
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const [toast, SetToast] = useState(null);
  const showToast = (message, text) => {
    SetToast({
      message: message,
      text: text,
    });
  };
  return (
    <div
      className={`${darkmode ? "bg-dark text-white" : "bg-light text-dark"}`}
      style={{ minHeight: "100vh" }}
    >
      <Navbar
        title="TextAnalyser"
        darkmode={darkmode}
        setdarkMode={setdarkMode}
        showalert={showalert}
      />
      <Alert alert={alert} />
      <TextForm showalert={showalert} showToast={showToast} />
      <ToastCopy toast={toast} />
    </div>
  );
}

export default App;
