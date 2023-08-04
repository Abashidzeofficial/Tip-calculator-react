import React from "react";
import dollarIcon from "../img/icon-dollar.svg";
import personIcon from "../img/icon-person.svg";

function Form({ bill, setBill, tip, setTip, people, setPeople }) {
  const handleSelectedTip = (e) => {
    setTip(e.target.value);
  };

  return (
    <div className="form">
      <div className="label-group-bill">
        <div className="label-wrapper">
          <label className="bill">Bill</label>
          <p className="error"></p>
        </div>
        <div className="number-wrapper">
          <input
            placeholder="0"
            type="number"
            onInput={(e) => setBill(+e.target.value)}
            id="input-bill"
          ></input>
          <img src={dollarIcon} className="icon" />
        </div>
      </div>
      <div className="tip-section">
        <p className="label">Selected Tip %</p>
        <div className="tip-amount-wrapper">
          <div className="tip-amount">
            <input
              type="radio"
              onInput={handleSelectedTip}
              id="input-amount"
              name="amount"
              value="5"
            />
            <div className="tip-btn">
              <p className="percent">5%</p>
            </div>
          </div>
          <div className="tip-amount">
            <input
              type="radio"
              onInput={handleSelectedTip}
              id="input-amount"
              name="amount"
              value="10"
            />
            <div className="tip-btn">
              <p className="percent">10%</p>
            </div>
          </div>
          <div className="tip-amount">
            <input
              type="radio"
              onInput={handleSelectedTip}
              id="input-amount"
              name="amount"
              value="15"
            />
            <div className="tip-btn">
              <p className="percent">15%</p>
            </div>
          </div>
          <div className="tip-amount">
            <input
              type="radio"
              onInput={handleSelectedTip}
              id="input-amount"
              name="amount"
              value="25"
            />
            <div className="tip-btn">
              <p className="percent">25%</p>
            </div>
          </div>
          <div className="tip-amount">
            <input
              type="radio"
              onInput={handleSelectedTip}
              id="input-amount"
              name="amount"
              value="50"
            />
            <div className="tip-btn">
              <p className="percent">50%</p>
            </div>
          </div>
          <input
            placeholder="Custom"
            type="number"
            onInput={handleSelectedTip}
            id="input-amount"
            className="tip-custom"
          />
        </div>
        <div className="label-group">
          <div className="label-wrapper">
            <label className="People">Number of People</label>
            <p className="error">{people === 0 ? "can't be zero" : ""}</p>
          </div>
          <div className="number-wrapper">
            <input
              placeholder="0"
              type="number"
              id="input-people"
              onInput={(e) => setPeople(+e.target.value)}
            ></input>
            <img src={personIcon} className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
