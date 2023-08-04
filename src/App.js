import React from "react";
import { useState } from "react";
import { useEffect } from "react";
//styles
import "./App.css";
import "./components/style.css";
import logo from "./img/logo.svg";

//components
import Display from "./components/Display";
import Form from "./components/Form";

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState("");
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (bill > 0 && people > 0 && tip > 0) setCalculatedTip(bill * (tip / 100));
    setTotal(calculatedTip + bill);
  }, [bill, people, tip, calculatedTip]);

  const handleResetBtn = (e) => {
    setBill("");
    setPeople(1);
    setTip("");
    setCalculatedTip(0);
    setTotal(0);
  };

  return (
    <div className="wrapper">
      <img src={logo} className="logo" />
      <div className="container">
        <Form
          bill={bill}
          setBill={setBill}
          people={people}
          setPeople={setPeople}
          tip={tip}
          setTip={setTip}
        />
        <Display
          calculatedTip={calculatedTip}
          total={total}
          people={people}
          handleResetBtn={handleResetBtn}
        />
      </div>
    </div>
  );
}

export default App;
