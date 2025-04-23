import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Resume Chatbot</h2>
        <form className="space-y-4">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={2}
          />
          <textarea
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Paste resume text here..."
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            rows={6}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-600 transition disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>

        {loading && (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin h-6 w-6 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
            <span className="ml-2 text-gray-600">Generating response...</span>
          </div>
        )}

        {response && !loading && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <h4 className="font-semibold text-gray-700 mb-2">Response:</h4>
            <p className="text-gray-800 whitespace-pre-line">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
