import React,{useState}from 'react'
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Index from './admin/index';
const admin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
    async function handleSubmit(e){
        e.preventDefault();

        try {
          const response = await fetch("https://srgpc-colage.onrender.com/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            Cookies.set("auth",data.message );
            navigate("/admin/index")
          } else {
            alert(data.message);
          }
        } catch (error) {
          console.error("Error:", error);
        }
    }
    return (
        <div className='formd'>
            <form onSubmit={handleSubmit} id="form">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button id="login" type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default admin
