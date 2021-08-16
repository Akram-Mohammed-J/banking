import React from "react";
import credit from "./credit.css";
export const Credit = (props) => {
  return (
    <div className="credit-container">
      <div className="cardtype">
        <h3>VISA</h3>
      </div>
      <div className="card-no-container">
        <h4 className="card-number">
          {props.number !== "" && props.number !== undefined
            ? props.number
            : "XXXX XXXX XXXX XXXX"}
        </h4>
      </div>
      <div className="personal-info">
        <div>
          <p className="subtitle">Card Holder</p>
          <p className="content">
            {props.name !== "" && props.name !== undefined
              ? props.name.toUpperCase()
              : "XXXXXXXXXXX"}
          </p>
        </div>
        <div>
          <p className="subtitle">Expires</p>
          <p className="content">
            {props.month !== "" &&
            props.month !== undefined &&
            props.month !== "00"
              ? props.month
              : "XX"}
            /
            {props.year !== "" &&
            props.year !== undefined &&
            props.year !== "00"
              ? props.year
              : "XX"}
          </p>
        </div>
      </div>
    </div>
  );
};
