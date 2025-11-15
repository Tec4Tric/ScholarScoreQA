import { useState } from 'react';
import { FiUpload, FiSend, FiFileText } from 'react-icons/fi';
import './App.css';

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [question, setQuestion] = useState('');
  const [pdfFiles, setPdfFiles] = useState([]);
  const [evidenceIndex, setEvidenceIndex] = useState(0);

  const hardcodedTag = "abstractive";

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).filter(file => file.type === 'application/pdf');
    setPdfFiles(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    async function foundData(question) {
      try {
        const response = await fetch(`http://localhost:8000/api/get-answer/?q=${encodeURIComponent(question)}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        return data; 
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    };


    if (foundData) {
      const newEntry = {
        question: question.trim(),
        answer: foundData.answer, // Retrieve the corresponding answer
        tag: hardcodedTag,
        evidences: foundData.evidences
      };

      // Simulate a delay of 7 seconds before showing the answer and evidence
      setTimeout(() => {
        setChatHistory((prevHistory) => [...prevHistory, newEntry]);
        setEvidenceIndex(0); // Reset the evidence index to start from the first evidence
      }, 7000);

      setQuestion('');
    } else {
      // Handle case where the question is not found in the hardcoded data
      alert("Sorry, no matching answer found.");
    }
  };

  return (
    <div className="flex w-screen h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">

      {/* Left Panel */}
      <div className="w-1/5 bg-blue-50 border-r border-gray-300 p-4 flex flex-col space-y-4 overflow-y-auto">
        <div className="flex items-center space-x-2 text-blue-900 font-semibold text-lg">
          <FiUpload />
          <span>Upload PDFs</span>
        </div>
        <input
          type="file"
          accept="application/pdf"
          multiple
          onChange={handleFileChange}
          className="text-sm text-gray-600"
        />
        <div className="space-y-2">
          {pdfFiles.length > 0 ? (
            pdfFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white shadow-sm border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-700 truncate"
              >
                <FiFileText className="text-blue-700" />
                <span className="truncate max-w-[90%]">{file.name}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-400 italic text-sm">No PDFs uploaded yet.</p>
          )}
        </div>
      </div>

      {/* Center Panel */}
      <div className="w-3/5 p-6 flex flex-col border-x border-gray-300 bg-white">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Scholarly Question Answering</h2>

        <div className="flex-grow space-y-4 overflow-y-auto pr-2">
          {chatHistory.map((chat, index) => (
            <div key={index} className="space-y-2">
              <div className="bg-blue-100 border border-blue-200 rounded-lg p-3 text-gray-800 shadow-sm">
                <strong>Q:</strong> {chat.question}
              </div>
              <div className="bg-gray-100 border border-gray-200 rounded-lg p-3 text-gray-900 shadow-sm">
                <strong>A:</strong> {chat.answer}
                <span className="ml-3 text-xs px-2 py-1 bg-blue-200 text-blue-800 rounded-full uppercase tracking-wide">
                  {chat.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-4 flex items-center space-x-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question..."
            className="flex-grow border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center space-x-1"
          >
            <FiSend />
            <span>Send</span>
          </button>
        </form>
      </div>

      {/* Right Panel */}
      <div className="w-1/5 bg-blue-50 border-l border-gray-300 p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold text-blue-900 mb-4">Highlighted Evidence</h2>
        <div className="space-y-3 max-h-[85vh] overflow-y-auto pr-1">
          {chatHistory.length > 0 && chatHistory[chatHistory.length - 1]?.evidences.map((text, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 p-4 rounded-md shadow-sm text-sm text-gray-800 leading-relaxed whitespace-pre-line"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
