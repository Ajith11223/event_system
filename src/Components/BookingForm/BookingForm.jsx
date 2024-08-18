import React from "react";

const BookingForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F4E6DA] to-[#F7ECE1] p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#3A3A3A] text-white py-4 px-8 rounded-md flex justify-between items-center mb-6">
          <div className="text-lg font-semibold">Target edu expo</div>
          <div className="text-sm">13th September 2024</div>
        </div>

        {/* Form and Checkout Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex">
          {/* Form Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Ticket Booking Form</h2>
            <p className="text-gray-500 mb-6">
              Please fill out the form below to secure your spot at the event.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name."
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select className="mt-1 p-2 border border-gray-300 rounded-lg w-full">
                  <option>Select your gender</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date of Birth (DOB)
                </label>
                <input
                  type="date"
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your active mobile number"
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  WhatsApp Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your WhatsApp number"
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Occupation
                </label>
                <select className="mt-1 p-2 border border-gray-300 rounded-lg w-full">
                  <option>Select your current occupation</option>
                </select>
              </div>

              <div className="md:col-span-2 flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm font-medium text-gray-700">
                  I confirm my attendance for the event.
                </label>
              </div>
            </div>
          </div>

          {/* Checkout Section */}
          <div className="ml-6">
            <div className="bg-[#F7ECE1] p-6 rounded-lg shadow-lg text-center">
              <p className="text-lg font-semibold">Silver</p>
              <p className="text-3xl font-bold mt-2 mb-4">₹235</p>
              <button className="bg-[#FF7A00] text-white py-2 px-6 rounded-lg">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
