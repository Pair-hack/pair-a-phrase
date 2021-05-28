import { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': "8b2efd59-f1b9-458d-89d4-616c2e6e6713", 'username': username, 'secret': password,  }

    try {
      await axios.post('https://api.chatengine.io/users', { headers: authObject});
    } catch (error) {
      
    }

  }

  return (
    <div className="wrapper">
      <div className="form">
          <h1 className="title"> Chat Registration </h1>
          <form onSubmit={handleSubmit}>
            <input type="text"  value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
            <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
            <input type="text"  value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input" placeholder="First Name" required />
            <input type="text"  value={lastName} onChange={(e) => setLastName(e.target.value)} className="input" placeholder="Last Name" required />
            <div align="center">
              <button type="submit" className="button">
                <span>Register Now</span>
              </button>
            </div>
          </form>
      </div>

    </div>
  );

}

export default RegisterForm;