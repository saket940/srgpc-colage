import React from 'react'
import { Link } from 'react-router'

const nav = () => {    

     
  return (  <nav id="nav">
    <img src="/logo.png" alt="logo" className="il"/>
    <h2 id="sr">S.R.G.P.C.</h2>
    <button id="navimg" onClick={()=>{const ul = document.getElementById('ul');
    ul.classList.toggle('show');}}><img src="/nav.svg" alt="nav"/></button>
    <ul id="ul">
    <li><Link to ="/">Home</Link></li>
    <li><Link to ="/department">Department</Link></li>
    <li><Link to ="/admissions">Admissions</Link></li>
    <li><Link to ="/student">Student</Link></li>
    <li><Link to ="/event">Event</Link></li>
    <li><Link to ="/about">About</Link></li>
    <li><Link to ="/news">News</Link></li>
        <li onClick={(event)=>{event.preventDefault();
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" })}}>
          <a id="contact-link">Contact us </a>
        </li>
    </ul>
  </nav> 
)
}

export default nav
