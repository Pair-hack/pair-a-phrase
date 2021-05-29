import './App.css';
import { useState } from 'react'
import { ChatEngine } from 'react-chat-engine';
// import stringTranslator from "./helperfunctions/stringTranslator";
import ChatFeed from './components/ChatFeed';
import LoginForm from "./components/LoginForm";
import Dropdown from "./components/SimpleSelect";
import Navbar from './components/Navbar';
import RegisterForm from "./components/RegisterForm";

function App() {

  const [logNotReg, setLogNotReg] = useState(true);
  const setForm = () => {
    return setLogNotReg(prev => !prev)
  }

  if (!localStorage.getItem("username")) {
    return (
      <div>
        {logNotReg && <LoginForm switchForms={setForm} />}
        {logNotReg === false && <RegisterForm switchForms={setForm} />}
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
        <ChatEngine
          height="calc(100vh - 60px)"
          projectID="cdfcaae0-589e-4c45-9e64-eb0897d1f7f7"
          userName={localStorage.getItem("username")}
          userSecret={localStorage.getItem("password")}
          language={localStorage.getItem("language")}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
      </div>
    </>
  );
}

export default App;