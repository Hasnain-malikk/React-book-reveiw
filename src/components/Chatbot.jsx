import React, { useState } from 'react';

const App = () => {
  return (
    <div className="App">
      {/* <h1 className="text-3xl font-bold p-4">My Bookstore</h1> */}
      {/* Other components and content for your bookstore */}
      <Chatbot />
    </div>
  );
};

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! Ask me anything about your books.' }
  ]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    // Simple bot reply
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { from: 'bot', text: "I'm just a demo bot. Try asking about a book title!" }
      ]);
    }, 700);
    setInput('');
  };

  return (
    <div>
      <button
        className="fixed bottom-6 right-6 bg-yellow-400 text-white rounded-full p-4 shadow-lg z-50"
        onClick={() => setOpen(o => !o)}
        aria-label="Open chatbot"
      >
        💬
      </button>
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col z-50">
          <div className="p-3 border-b font-semibold text-gray-700 flex justify-between items-center">
            Chatbot
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-700">&times;</button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto" style={{ maxHeight: 300 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-3 py-2 rounded-lg ${msg.from === 'user' ? 'bg-yellow-100 text-gray-800' : 'bg-gray-100 text-gray-600'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex">
            <input
              className="flex-1 px-2 py-1 border rounded-l focus:outline-none"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
            />
            <button
              className="bg-yellow-400 text-white px-4 rounded-r"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;