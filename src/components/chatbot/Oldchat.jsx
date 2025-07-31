import React, { useEffect } from 'react'

function Oldchat(){ useEffect(() => {
    for (let index = 1; parseInt(localStorage.q) >= index; index++) {
    
        document.getElementById('chatBody').innerHTML+=`<div class="message user">${localStorage.getItem('user'+index)}</div><div class="message bot">${localStorage.getItem('bot'+index)}</div>`;
    };
},[]);}


export default Oldchat
