const { useState } = require("react")
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {

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