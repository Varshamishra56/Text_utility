import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  const [darkmode, setdarkMode] = useState(true);
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
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
      <TextForm />
    </div>
  );
}

export default App;
