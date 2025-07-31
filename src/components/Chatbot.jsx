import React from 'react'
import Bot from './chatbot/bot'
import User from './chatbot/User'
import Oldchat from './chatbot/Oldchat'
const Chatbot = () => {
  return (

      <div id="cb-contaner" className="chatbot-container hiden">
        <div className="chat-header">Chatbot</div>
        <div className="chat-body" id="chatBody">
    <div className="message bot">Wellcome to S.R.G.P.C. Sagar</div>
        </div>
        <div className="chat-footer">
         { Oldchat()}
            <input type="text" id="userInput" placeholder="Type a message..."/>
            <button id="send" onClick=
            {()=>{
              localStorage.setItem("q", parseInt(localStorage.q)+1);
              let userInput = document.getElementById("userInput");
              let chatBody = document.getElementById("chatBody");
              User(userInput.value)
              localStorage.setItem("user"+localStorage.q, userInput.value);
              Bot(userInput.value)
              localStorage.setItem("bot"+localStorage.q, userInput.value);} }>Send</button>
        </div>
    </div>

  )
}

export default Chatbot
// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//     const [input, setInput] = useState("");
//     const [response, setResponse] = useState("");

//     const handleSend = async () => {
//         if (!input.trim()) return;
//         const res = await axios.post("http://localhost:5000/chat", { prompt: input });
//         setResponse(res.data.response);
//     };

//     return (
//         <div style={{ padding: "20px" }}>
//             <h2>Ollama Chatbot</h2>
//             <textarea
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 rows="4"
//                 cols="50"
//                 placeholder="Type your message..."
//             />
//             <br />
//             <button onClick={handleSend}>Send</button>
//             <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
//                 <strong>Response:</strong> {response}
//             </div>
//         </div>
//     );
// }

// export default App;
