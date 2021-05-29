import MessageForm from "./MessageForm";
import UserMessage from "./UserMessage";
import IncomingMessage from "./IncomingMessage";
import { useEffect, useRef } from "react";

function ChatFeed(props) {
  const { chats, activeChat, userName, messages } = props;

  //find current chat
  const chat = chats && chats[activeChat];

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // const renderReadReciepts = (message, isMyMessage) => {
  //   return chat.people.map((person, index) => {
  //     person.last_read === message.id && (
  //       <div
  //         key={`read_${index}`}
  //         className="read-reciepts"
  //         style={{
  //           float: isMyMessage ? "right" : "left",
  //           backgroundImage: `url(${person?.person?.avatar})`,
  //         }}
  //       />
  //     );
  //   });
  // };

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];

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
            {/* {renderReadReciepts(message, isUserMessage)} */}
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
          {chat.people.map((person) => `${person.person.username} `)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatFeed;
