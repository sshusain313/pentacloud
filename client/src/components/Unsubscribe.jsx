import React, { useState } from "react";
import Sad from "../assets/images/heartbroken.jpg";

const UnsubscribePage = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
      {/* Header Section */}
      <div className="bg-yellow-500 w-full flex flex-col items-center py-8">
        <img src={Sad} alt="Sad Character" className="w-60 h-32" />
        <h2 className="text-2xl font-semibold mt-4 text-center">
          Hi Jon, do you really want to leave us?
        </h2>
      </div>

      {/* Unsubscribe Box */}
      <div className="bg-white shadow-lg p-6 rounded-lg max-w-lg w-full mt-4">
        {show ? (
          <>
            <button
              className="w-full text-left font-semibold p-3 border border-gray-300 rounded-md bg-gray-100"
              onClick={() => setShow(false)} // Corrected the state update
            >
              No, I want to give a second chance, let me change my preferences
            </button>

            {/* Preferences Form */}
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-700">
                Phew! That was close. You scared us.
              </h3>
              <p className="mt-2">Choose the frequency of emails:</p>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center">
                  <input type="radio" name="frequency" className="mr-2" /> Weekly
                </label>
                <label className="flex items-center">
                  <input type="radio" name="frequency" className="mr-2" /> Monthly
                </label>
                <label className="flex items-center">
                  <input type="radio" name="frequency" className="mr-2" /> Quarterly
                </label>
              </div>

              <p className="mt-4">Choose the type of email content:</p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Newsletters
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Sales Emails
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Company Updates
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Infographics
                </label>
              </div>

              <p className="mt-4">Update your email address, if required:</p>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 mt-2"
              />

              <button
                className="w-1/2 mt-4 bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600"
                onClick={() => setShow(false)} // Fix: Ensure button updates the state
              >
                Change Preference »
              </button>
            </div>
          </>
        ) : (
          <button
            className="w-full text-left font-semibold p-3 border border-gray-300 rounded-md bg-gray-100"
            onClick={()=>setShow(true)} // Clicking should show preferences again
          >
            Yes, Unsubscribe me please. We aren’t made for each other. Let’s part ways.
          </button>
        )}
      </div>
    </div>
  );
};

export default UnsubscribePage;
