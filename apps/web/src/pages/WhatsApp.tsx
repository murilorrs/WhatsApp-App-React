import React from "react";
import ChatList from "@/components/ChatList";

const WhatsApp: React.FC = () => {

  return (
    <div className="flex h-screen text-gray-100">
      <aside className="w-1/3 bg-customDarkGreen border-r border-customGrey">
        <header className="flex items-center p-3.5 bg-customLightGreen border-b border-none">
        <img
        src='../../public/hyerdev.png'
        alt={`${name}'s HyerDev`}
        className="w-12 h-12 rounded-full object-cover mr-3"
      />
          <h2 className="text-lg font-semibold">Chats</h2>
        </header>

        <div className="p-4 overflow-y-auto">
          <ChatList/>
        </div>
      </aside>

      <main className="flex-1 flex flex-col bg-customDarkGreen">
        <header className="p-6 bg-customLightGreen">
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
