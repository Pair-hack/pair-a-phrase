import { useEffect, useState } from "react";
import stringTranslator from "../helperfunctions/stringTranslator";

function IncomingMessage({ lastMessage, message }) {
  const [translatedMessage, setTranslatedMessage] = useState("");
  //i dont know why formating is doing this
  const isFirstMessageFromOther =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  useEffect(() => {
    //console.log(message.sender);
    // next step some how set this conditionally
    console.log(typeof JSON.parse(message.custom_json));

    stringTranslator(
      message.text,
      JSON.parse(message.custom_json),
      localStorage.getItem("language")
    ).then((response) => {
      setTranslatedMessage(response.data[0].translations[1].text);
    });
  }, [message]);

  return (
    <div className="message-row">
      {isFirstMessageFromOther &&
        (message.sender.avatar ? (
          <div
            className="message-avatar"
            style={{
              color: "black",
              backgroundImage: `url(${message?.sender?.avatar})`,
            }}
          ></div>
        ) : (
          <div>{message.sender.first_name}:</div>
        ))}
      <div
        className="message"
        style={{
          float: "left",
          marginLeft: isFirstMessageFromOther ? "4px" : "48px",
          color: "white",
          backgroundColor: "#FF5C83",
        }}
      >
        <p style={{ fontStyle: "italic", color: "#F9C94C", fontSize: "13px" }}>
          {JSON.parse(message.custom_json)} {">"} {message.text}
        </p>
        <p>{translatedMessage}</p>
      </div>
    </div>
  );
}
export default IncomingMessage;
