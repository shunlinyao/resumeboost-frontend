import React, { useContext, useState } from "react";

import { AddTargetEntry } from "../components/AddTargetEntry";
import Header from "../components/Header";
import PDFModal from "../components/PDFModal";
import { TargetEntry } from "../components/TargetEntry";
import UserContext from "../context/UserContext";
import api from "../utils/api";
import { useFormik } from "formik";

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

export const UserProfile: React.FC = () => {
  const { user, setUser } = useContext(UserContext);
  const [selectedFile, setSelectedFile] = useState();

  const onFileChange = (event: any) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    if (selectedFile && user) {
      // Create an object of formData
      const formData = new FormData();

      // Update the formData object
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      formData.append("resume", selectedFile, selectedFile.name);

      api.uploadResume(user._id, formData);
    }
  };

  const handleAddComp = (name: string) => {
    if (user) {
      setUser({
        ...user,
        targetCompanies: [...user.targetCompanies, name],
      });
    }
  };

  const handleAddPos = (name: string) => {
    if (user) {
      setUser({
        ...user,
        targetPositions: [...user.targetPositions, name],
      });
    }
  };

  const handleRemoveComp = (name: string) => {
    if (user) {
      setUser({
        ...user,
        targetCompanies: user.targetCompanies.filter(
          (company) => company !== name
        ),
      });
    }
  };

  const handleRemovePos = (name: string) => {
    if (user) {
      setUser({
        ...user,
        targetPositions: user.targetPositions.filter(
          (position) => position !== name
        ),
      });
    }
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
              <input type="file" onChange={onFileChange} />
              <button
                type="button"
                className="px-8 p-4 border rounded-full bg-purple-800 text-white font-semibold text-sm"
                onClick={onFileUpload}
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
              {user?.targetCompanies.map((item) => (
                <TargetEntry name={item} remove={handleRemoveComp} />
              ))}
            </div>
            <AddTargetEntry
              placeholder="enter company name"
              buttonLabel="Add Target Company"
              add={handleAddComp}
            />
          </div>
          {/* target positions box */}
          <div className="border rounded-lg shadow-lg">
            <div className="p-4 text-2xl">Target Positions</div>
            <div className="flex flex-wrap pl-4">
              {user?.targetPositions.map((item) => (
                <TargetEntry name={item} remove={handleRemovePos} />
              ))}
            </div>
            <AddTargetEntry
              placeholder="enter position name"
              buttonLabel="Add Target Position"
              add={handleAddPos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
