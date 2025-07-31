import React from 'react'


const User = (props) => {
  
document.getElementById('chatBody').innerHTML+=`<div class="message user">${props}</div>`
}

export default User
