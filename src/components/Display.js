import React from "react";

function Display({ calculatedTip, total, people, handleResetBtn }) {
  const returnCurrencyAtm = (amt) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amt);

  return (
    <div className="display">
      <div className="display-group">
        <div className="display-row">
          <div className="display-label">
            <p className="header">Tip Amount</p>
            <p className="unit">/ person</p>
          </div>
          <p className="display-amt">
            {returnCurrencyAtm(
              `${calculatedTip ? calculatedTip / Number(people) : "0"}`
            )}
          </p>
        </div>
      </div>
      <div className="display-row">
        <div className="display-label">
          <p className="header">Total</p>
          <p className="unit">/ person</p>
        </div>
        <p className="display-amt">
          {returnCurrencyAtm(`${total ? Number(total) / Number(people) : "0"}`)}
        </p>
      </div>
      {total ? (
        <button className="reset-btn" onClick={handleResetBtn}>
          RESET
        </button>
      ) : (
        <button className="reset-btn" disabled>
          RESET
        </button>
      )}
    </div>
  );
}

export default Display;
