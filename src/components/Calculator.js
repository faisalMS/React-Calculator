import React from "react";
import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const addClick = (e) => {
    setResult(parseInt(num1) + parseInt(num2));
  };

  const MinusClick = (e) => {
    setResult(parseInt(num1) - parseInt(num2));
  };

  const MultipliedClick = (e) => {
    setResult(parseInt(num1) * parseInt(num2));
  };

  const DividedClick = (e) => {
    setResult(parseInt(num1) / parseInt(num2));
  };

  const ModulusClick = (e) => {
    setResult(parseInt(num1) % parseInt(num2));
  };

  return (
    <div className="continer">
      <div className="box">
        <input
          onChange={(e) => setNum1(e.target.value)}
          value={num1}
          type="text"
          className="form-control"
          placeholder=""
        />

        <input
          onChange={(e) => setNum2(e.target.value)}
          value={num2}
          type="text"
          className="form-control"
          placeholder=""
        />
      </div>
      <div className="buttons">

      <button
          onClick={ModulusClick}
          type="button"
          className="b btn btn-outline-info"
        >
          {" "}
          %{" "}
        </button>
        <button
          onClick={DividedClick}
          type="button"
          className="b btn btn-outline-info"
        >
          {" "}
          /{" "}
        </button>
        <button
          onClick={MultipliedClick}
          type="button"
          className="b btn btn-outline-info"
        >
          {" "}
          *{" "}
        </button>
        <button
          onClick={addClick}
          type="button"
          className="b btn btn-outline-info"
        >
          {" "}
          +{" "}
        </button>
        <button
          onClick={MinusClick}
          type="button"
          className="b btn btn-outline-info"
        >
          {" "}
          -{" "}
        </button>
      </div>

      <div className="result">
        <input
          onChange={setResult}
          value={result}
          type="text"
          className="form-control"
          disabled
          readOnly
          {...result}
        />
      </div>
    </div>
  );
}

export default Calculator;
