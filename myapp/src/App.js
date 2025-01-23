import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  const [darkmode, setdarkMode] = useState(true);

  return (
    <div
      className={`${darkmode ? "bg-dark text-white" : "bg-light text-dark"}`}
      style={{ minHeight: "100vh" }}
    >
      <Navbar
        title="TextAnalyser"
        darkmode={darkmode}
        setdarkMode={setdarkMode}
      />
      <TextForm />
    </div>
  );
}

export default App;
