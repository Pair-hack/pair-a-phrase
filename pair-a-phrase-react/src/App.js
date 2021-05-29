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

  const [logNotReg, setLogNotReg] = useState(true)
  //if (!localStorage.getItem("username")) return <LoginForm />
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




  // stringTranslator("This app is great", "en", "fj")
  //   .then((response) => {
  //     console.log("stringTranslator: ", response.data[0].translations[1].text)
  //   })

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
        <ChatEngine
          height="calc(100vh - 60px)"
          projectID="8b2efd59-f1b9-458d-89d4-616c2e6e6713"
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