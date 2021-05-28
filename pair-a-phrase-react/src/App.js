import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'

function App() {

  return (
    <ChatEngine
      height="100vh"
      projectID="8b2efd59-f1b9-458d-89d4-616c2e6e6713"
      userName="devmac"
      userSecret="password"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;