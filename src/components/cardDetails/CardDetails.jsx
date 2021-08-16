import React, { useState } from "react";
import { Credit } from "../credit/Credit";
import "./Card.css";

const CardDetails = () => {
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [cvv, setCvv] = useState("");
  const [valid, setValid] = useState(true);
  const [validName, setValidName] = useState(true);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const handleCardNumber = (e) => {
    e.target.value = e.target.value
      .replace(/[^\d]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
    let regex = /^(?=.*\d)[\d ]+$/.test(e.target.value);
    setValid(regex);
    setCard(e.target.value);
  };

  const handleCvv = (e) => {
    let regex = /^\d*$/.test(e.target.value);
    if (regex) {
      setCvv(e.target.value);
    }
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handleMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleName = (e) => {
    let regex = /^[a-z,A-Z,. ]+$/.test(e.target.value);
    setValidName(regex);
    setName(e.target.value);
  };
  return (
    <div className="container">
      <Credit
        name={validName ? name : ""}
        number={card}
        year={year}
        month={month}
        cvv={cvv}
      />
      <div className="form-container">
        <div className="form-control">
          <label className="input-label" htmlFor="card-number">
            Card Number
          </label>
          <div className="tag-field">
            <input
              value={card}
              type="text"
              onChange={handleCardNumber}
              maxLength="19"
              name="card-number"
              id="card-number"
            />
          </div>
          {valid !== true && (
            <div>
              <p className="error">Enter a valid card number</p>
            </div>
          )}
        </div>
        <div className="form-control">
          <label className="input-label" htmlFor="name">
            Card Holder Name
          </label>
          <div className="tag-field">
            <input
              type="text"
              value={name}
              onChange={handleName}
              name="name"
              id="name"
            />
          </div>
          {validName !== true && (
            <div>
              <p className="error">Enter a valid Name</p>
            </div>
          )}
        </div>
        <label className="input-label" htmlFor="expires">
          Expires
        </label>
        <div className="credentials">
          <div>
            <select value={month} onChange={handleMonth}>
              <option value="00">MM</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div>
            <select value={year} onChange={handleYear}>
              <option value="00">YY</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
            </select>
          </div>
          <label className="input-label" htmlFor="cvv">
            CVV
          </label>
          <div className="tag-field">
            <input
              type="text"
              value={cvv}
              maxLength="3"
              name="cvv"
              id="cvv"
              onChange={handleCvv}
            />
          </div>
        </div>
        <div className="btn-container">
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
