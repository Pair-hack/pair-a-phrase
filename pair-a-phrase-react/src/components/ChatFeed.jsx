import MessageForm from "./MessageForm";
import UserMessage from "./UserMessage";
import IncomingMessage from "./IncomingMessage";

function ChatFeed(props) {
  const { chats, activeChat, userName, messages } = props;

  //find current chat
  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      console.log(message);
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isUserMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isUserMessage ? (
              <UserMessage message={message} />
            ) : (
              <IncomingMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read--reciepts"
            style={{
              marginRight: isUserMessage ? "18px" : "0px",
              marginLeft: isUserMessage ? "0px" : "68px",
            }}
          >
            read-reciepts here
          </div>
        </div>
      );
    });
  };

  if (!chat) return "...Loading....";

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => `${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
}

export default ChatFeed;
