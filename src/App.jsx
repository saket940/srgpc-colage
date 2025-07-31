import React from 'react'
import Viue from './components/Viue'
import Chatbot from './components/Chatbot';

function App() {
  return (
<>
    <header>
    <div id="" className="logo">
      <h1>
        <img id="il"
          src="../public/logo.png"
          className="logo img" alt="SRGPC Logo"/>
        S. R. Government Polytechnic College, Sagar ( M.P.), India<br/>
        सहोद्रा राय शासकीय पॉलिटेक्निक महाविद्यालय, सागर(म.प्र.), भारत
      </h1>
    </div>
  </header>
  <div id='content'>
    <Viue/>
    <Chatbot/></div>
  <div className="cb" >
     <div className="chatbot-icon" onClick={()=>{const cbcontaner = document.getElementById('cb-contaner');
    cbcontaner.classList.toggle('show');}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 0-10 10 9.9 9.9 0 0 0 2.4 6.4l-1 3.6a1 1 0 0 0 1.2 1.2l3.6-1A10 10 0 1 0 12 2zm3 11h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2zm-1-4h-4a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2z"/>
    </svg>
  </div>
  </div>
  <footer id="footer">
    <div>
      <a href="https://dte.mponline.gov.in/portal/services/onlinecounselling/counshomepage/home.aspx"><button> <img className="dte"
            src="../public/dte.png"
            alt="DTE"/></button></a>
       <a href="https://www.facebook.com/SRGPCSAGAR"><button><img id="facebook"
            src="../public/facebook.png"
            alt="facebook"/></button></a>
      <a href="https://www.youtube.com/channel/UCxGj48z8UbXJC26y18HLwlg?app=desktop"><button> <img className="yt"
            src="../public/yt.png"
            alt="Youtube"/></button></a> 
      <a href="https://www.rgpvdiploma.in/"><button className="rgpv"> <img id="rgpv"
            src="../public/rgpv.png"
            alt="rgpv"/></button></a>
    </div>
    <h1>Contact Us</h1>
    <p>Address: Sahodra Rai Government Polytechnic College, Tilli Road, Sagar (M.P.)-470001<br/>Email:
      <a href="mailto:prinsrgp.sgr@mp.gov.in">prinsrgp.sgr@mp.gov.in</a><br/>Landline: 07582292470, 9425436423<br/>Web: www.srgpcsagar.in</p>
    <div id="map"><iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3649.936808761335!2d78.760861!3d23.820846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d3e47185264f%3A0xcfcddae270af19fd!2sS.%20R.%20Government%20Polytechnic%20College%2C%20Sagar!5e0!3m2!1sen!2sus!4v1729840224161!5m2!1sen!2sus"
        width="500" height="50" allowFullScreen="" loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"title="map"></iframe></div>
    <h2>&copy; 2024 SRGPC Sagar</h2>
  </footer>
    </>
  );
}

export default App;
