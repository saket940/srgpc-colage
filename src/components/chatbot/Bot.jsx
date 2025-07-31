import React from 'react'

const Bot =  (props) => {
  
  document.getElementById('chatBody').innerHTML+=`<div class="message bot ">${props}</div>`
  }
export default Bot
