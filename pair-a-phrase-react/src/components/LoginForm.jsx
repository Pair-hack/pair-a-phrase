import axios from "axios";
import { useState } from "react";
import SimpleSelect from "./SimpleSelect";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  console.log(props.switchForms);

  const handleSubmit = (event) => {
    event.preventDefault();
    const authObject = {
      "Project-ID": "cdfcaae0-589e-4c45-9e64-eb0897d1f7f7",
      "User-Name": username,
      "User-Secret": password,
    };

    axios
      .get("https://api.chatengine.io/chats", { headers: authObject })
      .then(() => {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setError("Oops! incorrect username/password");
      });
  };

  return (
    <div className="wrapper">
      <div className="form">
        <img
          style={{ width: "60%", marginLeft: "18%", marginBottom: "30px" }}
          src="pear.png"
          alt="pair-logo"
        />
        <h1 className="title">Pair-A-Phrase</h1>
        <div
          align="center"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "1.3rem",
            fontStyle: "italic",
          }}
        >
          The Cross Language Chat Platform
        </div>
        <h2 className="error">{error}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="password"
            required
          />
          <div
            align="center"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "1.3rem",
            }}
          >
            Select the language you wish to chat in:
            <div
              style={{
                marginLeft: "75px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <SimpleSelect />
            </div>
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
            <div>
              Need an account?
              <a
                style={{ color: "white", paddingLeft: "7px" }}
                href="/#"
                onClick={props.switchForms}
              >
                Register here
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
