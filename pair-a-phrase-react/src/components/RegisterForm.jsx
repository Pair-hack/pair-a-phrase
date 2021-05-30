import { useState } from "react";
import axios from "axios";
import SimpleSelect from "./SimpleSelect";

const RegisterForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage.getItem("language") === "null") {
      return setError("Please select a language");
    } else {
      axios
        .post("/register", {
          username: username,
          secret: password,
          first_name: firstName,
          last_name: lastName,
          // "avatar": avatar,
        })
        .then((response) => {
          if (response.data === "This username is taken.") {
            return setError(response.data);
          }
          console.log("response in then in registerform", response);
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          window.location.reload();
        })
        .catch((error) => {
          console.log("Catch Error: ", error);
          // setError(error)
        });
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 style={{ marginBottom: "15px" }} className="title">
          Register Below!
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input"
            placeholder="Last Name"
            required
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white",
              fontSize: "1.3rem",
            }}
          >
            <div>Select the language you wish to chat in:</div>
            <div style={{ marginLeft: "75px" }}>
              <SimpleSelect />
            </div>
          </div>
          {/* <input type="text"  value={avatar} onChange={(e) => setAvatar(e.target.value)} className="input" placeholder="Avatar URL" /> */}
          <div align="center">
            <button type="submit" className="button">
              <span>Register Now</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
          <div style={{ color: "white", fontSize: "20px", marginLeft: "25px" }}>
            Already have an account? -
            <a href="/#" onClick={props.switchForms}>
              Back to Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
