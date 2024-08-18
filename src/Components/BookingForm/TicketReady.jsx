import React from 'react';

export default function TicketReady() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#D6E7E2] to-[#E9F2ED] p-8">
      <div className="max-w-5xl mx-auto">
        

        {/* Confirmation Message */}
        <div className="text-center mb-8 mt-20">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-green-500 text-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold">You’re All Set! Your Ticket is Ready! 🎉</h2>
          <p className="text-gray-600 mt-2">
            Your ticket has been sent via email and WhatsApp. We’re excited to have you join us!
          </p>
        </div>

        {/* Ticket Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/path/to/image.jpg" // Replace with actual image path
              alt="Event Venue"
              className="w-32 h-32 rounded-lg object-cover mr-6"
            />
            <div>
              <h3 className="text-xl font-bold">Target Edu Expo 2024</h3>
              <p className="text-gray-600">Venue: International School Riyadh</p>
              <p className="text-gray-600">Time: International School Riyadh</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-600">ID: 12345</p>
            <p className="text-gray-600">Date: 13 Sep 2024</p>
            <p className="text-gray-600">Tickets: 1</p>
          </div>
          <div className="ml-6 border-l pl-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <img
                src="/path/to/qr-code.jpg" // Replace with actual QR code path
                alt="QR Code"
                className="w-16 h-16"
              />
              <p className="text-gray-600 text-center mt-2">Scan for entry</p>
            </div>
          </div>
        </div>

        {/* Booking Date and Buttons */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-6">
            Booking Date And Time: Wed, 14 Aug, 2024, 11:10 pm
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg">
              Download Ticket
            </button>
            <button className="border border-gray-300 text-gray-600 py-2 px-4 rounded-lg">
              Resend Ticket
            </button>
            <button className="border border-gray-300 text-gray-600 py-2 px-4 rounded-lg">
              Order details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
