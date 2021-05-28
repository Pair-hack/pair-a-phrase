import './App.css';
import { ChatEngine } from 'react-chat-engine';
import stringTranslator from "./helperfunctions/stringTranslator";
// import ChatFeed from './components/ChatFeed'

function App() {

  stringTranslator("This app is great", "en", "fj")
    .then((response) => {
      console.log("stringTranslator: ", response.data[0].translations[1].text)
    })

  return (
    <ChatEngine
      height="100vh"
      projectID="8b2efd59-f1b9-458d-89d4-616c2e6e6713"
      userName="luke"
      userSecret="password"
      // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;