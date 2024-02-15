import chatBot from "/chatbot.jpg"

const Chat = () => {
  return (
    <div className="mt-20 ">
      <div className="flex justify-center">
        <img className="h-[75px] w-[75px] rounded-full" src={chatBot} alt="" />
      </div>
      <div className="flex justify-center">
        <iframe
          className="w-[400px] h-[calc(100vh-200px)]"
          src="https://www.chatbase.co/chatbot-iframe/s4hQC7lLk_zlEPoJvfI5f"
          width="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Chat;
