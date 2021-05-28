function UserMessage({ message }) {
  // could include image check here

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#9DB750",
      }}
    >
      {message.text}
    </div>
  );
}
export default UserMessage;
