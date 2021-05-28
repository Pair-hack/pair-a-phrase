const { useState } = require("react")
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const authObject = {"Project-ID": "8b2efd59-f1b9-458d-89d4-616c2e6e6713", "User-Name": username, "User-Secret": password}

        try {
            axios.get("https://api.chatengine.io/chats", { headers: authObject });
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            window.location.reload();
        } catch (err) {

        }
    }

    return (
        <>
            <h1>Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="username" required />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="password" required />
                <button type="submit" className="button">
                    <span>Start Chatting</span>
                </button>
            </form>
        </>
    )
}