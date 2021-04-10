import React from "react";

interface Props {
  name: string;
  remove: (name: string) => void;
}

export const TargetEntry: React.FC<Props> = ({ name, remove }) => {
  const testid = "targetButton".concat(name);

  return (
    <div className="text-gray-800 text-sm pl-6 pr-10 py-2 pr border-0 rounded-full relative mb-4 mr-4 bg-gray-300 ">
      <span className="inline-block align-middle mr-4 mb-1">{name}</span>
      <button
        className="absolute bg-transparent text-xl font-semibold leading-none top-0 mt-2 outline-none focus:outline-none"
        type="button"
        onClick={() => remove(name)}
        data-testid={testid}
      >
        <span>×</span>
      </button>
    </div>
  );
};

export default TargetEntry;
