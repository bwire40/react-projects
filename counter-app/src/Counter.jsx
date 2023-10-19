import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // handlehancrement
  const handleIncrement = () => {
    // setcount and update
    setCount(count + 1);
  };
  // handleDecrement
  const handleDecrement = () => {
    // setcount and update
    setCount(count - 1);
  };
  return (
    <div className="p-2 flex">
      <div className="flex flex-col justify-center items-center w-10/12 mx-auto mt-60  p-3">
        <h1 className="my-10 text-5xl font-bold  w-full text-center text-slate-500">
          Counter
        </h1>
        <h1 className="my-10 text-5xl font-bold w-full text-center">{count}</h1>
        <div className="flex items-center justify-center  w-full">
          <button
            className="p-4 ring-3 bg-blue-500 w-4/12 mr-3 text-white rounded-md text-3xl hover:bg-blue-600 "
            onClick={handleIncrement}
          >
            +
          </button>
          <button
            className="p-4 ring-3 bg-blue-500 w-4/12 text-white rounded-md text-3xl hover:bg-blue-600 "
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
