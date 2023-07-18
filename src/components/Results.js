import React from "react";
import "../styles/Results.css";

const Results = (props) => {
  return (
    <div className="result">
      <img src={props.icon} className="result__icon" alt="icone" />
      <div className="result__compteur">
        <p className="result__compteur--count">{props.count}</p>
        <p className="result__compteur--denom">{props.denom}</p>
      </div>
    </div>
  );
};

export default Results;
