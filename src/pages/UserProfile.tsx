import React, { useState } from "react";
import { TargetEntry } from "../components/TargetEntry";
import { AddTargetEntry } from "../components/AddTargetEntry";
import Header from "../components/Header";
import PDFModal from "../components/PDFModal";

const testList = [
  {
    name: "testName1",
  },
  {
    name: "testName2",
  },
  {
    name: "testName3",
  },
];

export const UserProfile = () => {
  // list of companies
  const [listComp, setListComp] = useState(testList);
  // list of positions
  const [listPos, setListPos] = useState(testList);

  const handleAddComp = (name: string) => {
    console.log("add company: ".concat(name));
    setListComp([...listComp, { name }]);
  };

  const handleAddPos = (name: string) => {
    console.log("add position: ".concat(name));
    setListPos([...listPos, { name }]);
  };

  const handleRemoveComp = (name: string) => {
    console.log("remove company: ".concat(name));
    const newList = listComp.filter((item) => item.name !== name);
    setListComp(newList);
  };

  const handleRemovePos = (name: string) => {
    console.log("remove position: ".concat(name));
    const newList = listPos.filter((item) => item.name !== name);
    setListPos(newList);
  };

  return (
    <div>
      <Header title="User Profile" />
      <div className="flex space-x-6">
        {/* Left side of page */}
        <div className="w-2/5">
          <div className="border rounded-lg shadow-lg">
            <div className="px-4 py-4 text-2xl font-bold">
              {/* TODO: get real user name */}
              FirstName LastName
            </div>
            <div className="px-4 pb-4 text-xl">My Resumes:</div>
            <PDFModal />
            <form className="p-4 flex justify-end">
              {/* TODO: Upload resume functionality */}
              <button
                type="button"
                className="px-8 p-4 border rounded-full bg-purple-800 text-white font-semibold text-sm"
              >
                Upload Resume
              </button>
            </form>
          </div>
        </div>

        {/* Right side of page */}
        <div className="w-3/5 space-y-6">
          {/* target companies box */}
          <div className="border rounded-lg shadow-lg">
            <div className="p-4 text-2xl">Target Companies</div>
            <div className="flex flex-wrap pl-4">
              {listComp.map((item) => (
                <TargetEntry name={item.name} remove={handleRemoveComp} />
              ))}
            </div>
            <AddTargetEntry
              placeholder="enter company name"
              buttonLabel="Add Target Company"
              add={handleAddComp}
              addTargetForm="AddCompForm"
              addTargetButton="AddCompButton"
            />
          </div>
          {/* target positions box */}
          <div className="border rounded-lg shadow-lg">
            <div className="p-4 text-2xl">Target Positions</div>
            <div className="flex flex-wrap pl-4">
              {listPos.map((item) => (
                <TargetEntry name={item.name} remove={handleRemovePos} />
              ))}
            </div>
            <AddTargetEntry
              placeholder="enter position name"
              buttonLabel="Add Target Position"
              add={handleAddPos}
              addTargetForm="AddPosForm"
              addTargetButton="AddPosButton"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
