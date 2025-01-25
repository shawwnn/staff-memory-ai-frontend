import React from 'react'

const Chat = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-md h-[600px] rounded-lg shadow-lg flex flex-col p-4">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for members..."
            className="w-full p-3 text-sm text-gray-700 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Chat Header */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-semibold text-gray-800">Welcome to ChatGPT</h1>
          <p className="text-gray-500 text-sm">What can I help with?</p>
        </div>

        {/* Chat Box */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 rounded-lg space-y-4">
          {/* Bot's Message */}
          <div className="text-gray-700 bg-gray-200 p-3 rounded-lg max-w-[80%] ml-auto">
            <p>What can I help with?</p>
          </div>
        </div>

        {/* Input Field */}
        <div className="flex items-center border-t border-gray-300 pt-4">
          <input
            type="text"
            className="flex-1 p-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Type your message..."
          />
          <button className="bg-green-500 text-white px-4 py-2 ml-2 rounded-lg hover:bg-green-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat