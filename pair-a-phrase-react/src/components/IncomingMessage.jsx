function IncomingMessage({ lastMessage, message }) {
  //i dont know why formating is doing this
  const isFirstMessageFromOther =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageFromOther && (
        <div
          className="message-avatar"
          style={{
            color: "black",
            backgroundImage: `url(${message?.sender?.avatar})`,
          }}
        >
          {message.sender.first_name}:
        </div>
      )}
      <div
        className="message"
        style={{
          float: "left",
          marginLeft: isFirstMessageFromOther ? "4px" : "48p",
          color: "white",
          backgroundColor: "#FF5C83",
        }}
      >
        {message.text}
      </div>
    </div>
  );
}
export default IncomingMessage;
