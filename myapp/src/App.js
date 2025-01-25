import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import ToastCopy from "./Components/ToastCopy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";

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
    <Router>
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

        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <>
                <TextForm showalert={showalert} showToast={showToast} />
                <ToastCopy toast={toast} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
