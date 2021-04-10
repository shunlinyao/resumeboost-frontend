import React, { useState } from "react";

interface Props {
  placeholder: string;
  buttonLabel: string;
  add: (name: string) => void;
}

export const AddTargetEntry: React.FC<Props> = ({
  placeholder,
  buttonLabel,
  add,
}) => {
  const [input, setInput] = useState("");

  const changeHandler = (name: string) => {
    console.log("changeHandler: ".concat(name));
    setInput(name);
  };

  const clickHandler = () => {
    console.log("clickHandler");
    if (input !== "") {
      add(input);
    }
    setInput("");
  };

  return (
    <div>
      <form className="m-4 flex">
        <input
          className="rounded-lg p-2 mr-4 border text-gray-800 border-gray-200 text-sm"
          placeholder={placeholder}
          onChange={(event) => setInput(event.target.value)}
          // onChange={() => changeHandler(value)}
        />
        <button
          type="button"
          className="px-6 p-2 border rounded-full bg-purple-800 text-white font-semibold text-sm"
          onClick={clickHandler}
        >
          {buttonLabel}
        </button>
      </form>
    </div>
  );
};

export default AddTargetEntry;
