import React, { useState } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
function Todo() {
  const [todos, settodos] = useState([]);
  let [error, setError] = useState(null);

  const [input, setInput] = useState("");

  // generate new ids for our todos
  const generateId = () => {
    // ids
    return Math.floor(Math.random() * 1000);
  };

  // handle submit button
  const handleSubmit = () => {
    // do something with the button

    if (input !== "") {
      settodos((todos) =>
        todos.concat({
          text: input,
          id: generateId(),
        })
      );
    } else {
      let errorMessage = "Invalid Input! field cannot be empty!";
      setError(errorMessage);
    }
    // setInput("");
  };

  // remove todo
  const removeTodo = (id) => {
    // remove
    settodos((todos) => todos.filter((t) => t.id !== id));
  };

  // remove error
  const removeError = () => {
    error = false;
    setError(error);
  };
  return (
    <div className="w-10/12 my-auto p-2 flex flex-col justify-center items-center">
      <h1 className="my-4 text-3xl w-full text-center text-slate-500 font-bold p-5">
        To Do App
      </h1>
      <div className="flex items-center justify-between">
        <input
          required
          className="mr-4 ring-4 ring-yellow-300 border-yellow-300 shadow-md p-3 w-10/12 text-xl text-slate-800 m-auto  focus:ring-3 focus:ring-yellow-400 focus:outline-0 rounded-md"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New to do item"
        />

        <button
          className="rounded-md bg-yellow-500 text-slate-200 text-xl font-bold p-3 
          hover:bg-blue-600 shadow-md "
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div className="my-3 w-5/12">
        {error ? (
          <p className="flex items-center justify-between font-bold bg-green-300 rounded-md p-4 text-red-600">
            <span className="text-center">{error}</span>
            <span>
              <button
                onClick={removeError}
                className="text-black text-xl p-1 w-10 rounded-md animate-pulse hover:bg-black hover:text-slate-300"
              >
                X
              </button>
            </span>
          </p>
        ) : (
          ""
        )}
      </div>

      <div className=" w-full flex items-center justify-center">
        <ul className="flex flex-col justify-center items-center m-2 w-8/12">
          {todos.map(({ text, id }) => {
            return (
              <li
                key={id}
                className="border p-2 w-full flex justify-between items-center my-1"
              >
                <span className="text-yellow-500 text-2xl flex items-center justify-between w-full">
                  <BsPersonWorkspace className=" mx-auto" />
                  <p className="text-slate-600 w-10/12 text-xl">{text}</p>
                </span>
                <button
                  className="w-4/12 p-2 bg-yellow-400 rounded-md ml-3 text-white font-bold text-xl hover:bg-blue-700"
                  onClick={() => removeTodo(id)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
