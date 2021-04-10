import React, { useState } from "react";

interface Props {
  placeholder: string;
  buttonLabel: string;
  add: (name: string) => void;
  addTargetForm: string;
  addTargetButton: string;
}

export const AddTargetEntry: React.FC<Props> = ({
  placeholder,
  buttonLabel,
  add,
  addTargetForm,
  addTargetButton,
}) => {
  const [input, setInput] = useState("");

  const clickHandler = () => {
    console.log("clickHandler");
    if (input !== "") {
      add(input);
    }
    setInput("");
  };

  return (
    <div>
      <form className="m-4 flex" data-testid={addTargetForm}>
        <input
          className="rounded-lg p-4 mr-4 border text-gray-800 border-gray-200 text-sm"
          placeholder={placeholder}
          onChange={(event) => setInput(event.target.value)}
          // onChange={() => changeHandler(value)}
        />
        <button
          type="button"
          className="px-8 p-4 border rounded-full bg-purple-800 text-white font-semibold text-sm"
          onClick={clickHandler}
          data-testid={addTargetButton}
        >
          {buttonLabel}
        </button>
      </form>
    </div>
  );
};

export default AddTargetEntry;
