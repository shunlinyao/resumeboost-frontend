import React from "react";
import PDFView from "./PDFview";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="px-4 pb-2">
      <button
        className="pr-4 py-1 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        type="button"
        onClick={() => setShowModal(true)}
      >
        placeholderResumeName.pdf
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-between py-2 pl-4 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    placeholderResumeName.pdf
                  </h3>
                </div>
                {/* body */}
                <div className="relative flex-auto">
                  <PDFView />
                </div>
                {/* footer */}
                <div className="flex items-center justify-between p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    // onClick={() => setShowModal(false)}
                  >
                    Delete Resume
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </div>
  );
}
