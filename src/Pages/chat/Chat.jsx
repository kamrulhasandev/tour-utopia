const Chat = () => {
  return (
    <div className="mt-20 ">
      <h1 className="text-center text-3xl font-bold text-red-600 my-3 mt-10">
        Chat with AI
      </h1>
      <div className="flex justify-center">
        <iframe
          className="w-[400px] h-[calc(100vh-200px)]"
          src="https://www.chatbase.co/chatbot-iframe/vu0sTSw3VvY6nAKNpRuAp"
          width="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Chat;
