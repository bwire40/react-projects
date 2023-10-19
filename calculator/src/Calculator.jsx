import React, { useState } from "react";

function Calculator() {
  const [inputValue, setInputvalue] = useState("");

  function display(value) {
    setInputvalue(inputValue + value);
  }

  function calculate() {
    let answers = eval(inputValue);
    setInputvalue(answers);
  }
  function clear() {
    setInputvalue("");
  }
  return (
    <div className="w-7/12 m-auto mt-32">
      <h1 className="text-center font-bold text-slate-700 text-4xl my-10">
        Calculator
      </h1>
      <form
        name="calc"
        className="flex flex-col justify-center w-full items-center "
      >
        <input
          type="text"
          value={inputValue}
          className=" grid-cols-4 rounded-sm shadow-md w-11/12 text-right p-4 outline-none items-center justify-cen4 my-3 mx-auto text-xl border bg-slate-300 "
        />
        <div className="w-full grid grid-cols-4 p-3">
          <span
            onClick={clear}
            className="w-full  hover:bg-slate-700  cursor-pointer flex items-center justify-center p-5 text-xl font-bold text-slate-300 bg-yellow-600  text-center mx-2 col-span-2"
          >
            C
          </span>
          <span
            onClick={() => display("/")}
            className="w-full  hover:bg-slate-700  cursor-pointer flex items-center justify-center p-5 text-xl font-bold text-slate-300 bg-slate-900  text-center mx-2"
          >
            /
          </span>
          <span
            onClick={() => display("*")}
            className="w-full   hover:bg-slate-700 cursor-pointer flex items-center justify-center p-5 text-xl font-bold text-slate-300 bg-slate-900  text-center mx-2"
          >
            *
          </span>
          <span
            onClick={() => display("7")}
            className="w-full  hover:bg-slate-700  cursor-pointer flex items-center justify-center p-5 text-xl font-bold text-slate-300 bg-slate-900  text-center mx-2"
          >
            7
          </span>

          <span
            onClick={() => display("8")}
            className="w-full  hover:bg-slate-700  cursor-pointer flex items-center justify-center p-5 text-xl font-bold text-slate-300 bg-slate-900  text-center mx-2"
          >
            8
          </span>
          <span
            onClick={() => display("9")}
            className="w-full  hover:bg-slate-700  cursor-pointer flex items-center justify-center p-5 text-xl font-bold text-slate-300 bg-slate-900  text-center mx-2"
          >
            9
          </span>
          <span
            onClick={() => display("-")}
            className="w-full  hover:bg-slate-700  cursor-pointer flex items-center justify-center p-5 text-xl font-bold text-slate-300 bg-slate-900  text-center mx-2"
          >
            -
          </span>
          <span
            onClick={() => display("4")}
            className="w-full  hover:bg-slate-700  cursor-pointer flex items-center justify-center p-5 text-xl font-bold text-slate-300 bg-slate-900  text-center mx-2"
          >
            4
          </span>
          <span
            onClick={() => display("5")}
            className="w-full  hover:bg-slate-700  cursor-pointer flex items-center justify-center p-5 text-xl font-bold text-slate-300 bg-slate-900  text-center mx-2"
          >
            5
          </span>
          <span
            onClick={() => display("6")}
            className="w-full  hover:bg-slate-700  cursor-pointer flex items-center justify-center p-5 text-xl font-bold text-slate-300 bg-slate-900  text-center mx-2"
          >
            6
          </span>
          <span
            onClick={() => display("+")}
            className="w-full  hover:bg-slate-700  cursor-pointer p-5 text-xl font-bold text-slate-300 bg-yellow-600  flex items-center justify-center text-center mx-2 row-span-2"
          >
            +
          </span>
          <span
            onClick={() => display("1")}
            className="w-full  hover:bg-slate-700  cursor-pointer flex items-center justify-center p-5 text-xl font-bold text-slate-300 bg-slate-900  text-center mx-2"
          >
            1
          </span>
          <span
            onClick={() => display("2")}
            className="w-full  hover:bg-slate-700  cursor-pointer flex items-center justify-center p-5 text-xl font-bold text-slate-300 bg-slate-900  text-center mx-2"
          >
            2
          </span>
          <span
            onClick={() => display("3")}
            className="w-full  hover:bg-slate-700  cursor-pointer flex items-center justify-center p-5 text-xl font-bold text-slate-300 bg-slate-900  text-center mx-2"
          >
            3
          </span>
          <span
            onClick={() => display("0")}
            className="w-full  hover:bg-slate-700  cursor-pointer flex items-center justify-center p-5 text-xl font-bold text-slate-300 bg-slate-900  text-center mx-2"
          >
            0
          </span>
          <span
            onClick={() => display("00")}
            className="w-full  hover:bg-slate-700  cursor-pointer flex items-center justify-center p-5 text-xl font-bold text-slate-300 bg-slate-900  text-center mx-2"
          >
            00
          </span>
          <span
            onClick={() => display(".")}
            className="w-full  hover:bg-slate-700  cursor-pointer flex items-center justify-center p-5 text-xl font-bold text-slate-300 bg-slate-900  text-center mx-2"
          >
            .
          </span>
          <span
            onClick={() => calculate()}
            className="w-full  hover:bg-slate-700  cursor-pointer flex items-center justify-center p-5 text-xl font-bold text-slate-300 bg-slate-600  text-center mx-2"
          >
            =
          </span>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
