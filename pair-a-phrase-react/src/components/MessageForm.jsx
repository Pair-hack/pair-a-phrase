import { SendOutlined } from "@ant-design/icons";
import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

function MessageForm(props) {
  const [inputVal, setInputVal] = useState("");
  const { chatId, creds, language } = props;

  //console.log(props);

  //console.log(creds);
  const submitHandler = (event) => {
    event.preventDefault();

    const text = inputVal.trim();
    if (text.length > 0)
      sendMessage(creds, chatId, {
        text,
        custom_json: language,
      });
    //message.sender.language = "en";
    setInputVal("");
  };
  const onChangeHandler = (event) => {
    setInputVal(event.target.value);

    isTyping(props, chatId);
  };

  return (
    <form className="message-form" onSubmit={submitHandler}>
      <input
        className="message-input"
        placeholder="send a message"
        value={inputVal}
        onChange={onChangeHandler}
        onSubmit={submitHandler}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
}
export default MessageForm;
