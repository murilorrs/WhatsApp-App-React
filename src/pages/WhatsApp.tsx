import React from 'react';

const WhatsApp: React.FC = () => {
  return (
    <div className="flex h-screen text-gray-100">
      <aside className="w-1/3 bg-customDarkGreen border-r border-customGrey">
        <header className="p-3.5 bg-customLightGreen border-b border-none">
          <h2 className="text-lg font-semibold">Chats</h2>
        </header>
        
        <div className="p-3 overflow-y-auto">
          <div className="p-2 border-b border-gray-700 hover:bg-gray-600 rounded">Contact 1</div>
          <div className="p-2 border-b border-gray-700 hover:bg-gray-600 rounded">Contact 2</div>
          <div className="p-2 border-b border-gray-700 hover:bg-gray-600 rounded">Contact 3</div>
          <div className="p-2 border-b border-gray-700 hover:bg-gray-600 rounded">Contact 4</div>
          <div className="p-2 border-b border-gray-700 hover:bg-gray-600 rounded">Contact 5</div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col bg-customDarkGreen">
        <header className="p-3.5 bg-customLightGreen border-b border-gray-600">
          <h2 className="text-lg font-semibold">Chat Name</h2>
        </header>

        <div className="flex-1 p-4 overflow-y-auto bg-[url('/wallpaper.png')] bg-cover bg-center">
          <div className="mb-2 flex justify-start">
            <div className="bg-customMessageReceived p-3 rounded inline-block">Message from contact</div>
          </div>
          <div className="mb-2 flex justify-end">
            <div className="bg-customMessageSend p-3 rounded inline-block text-gray-100">My message</div>
          </div>

        </div>

        <footer className="p-4 bg-customLightGreen border-t border-customGrey flex items-center">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 p-2 border border-customGrey bg-customLighterGreen text-gray-100 rounded"
          />
          <button className="ml-2 px-4 py-2 bg-customMessageSend text-white rounded">Send</button>
        </footer>
      </main>
    </div>
  );
}

export default WhatsApp;
