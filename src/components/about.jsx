import React, { useState, useEffect } from 'react'
import Bu from './bu'
import H2 from './h2'
import Down from './down'
import Vision from './vision'
import Principal from './principal'
import Sahodra from './sahodra'

const About = () => {
  const [showVision, setShowVision] = useState(false);
  const [showPrincipal, setShowPrincipal] = useState(false);
  const [showSahodra, setShowSahodra] = useState(false);

  useEffect(() => {
    const visionButton = document.getElementById("gub1");
    const sahodraButton = document.getElementById("gub2");
    const principalButton = document.getElementById("gub3");
    
    if (visionButton) {
      visionButton.addEventListener("click", () => {
        setShowVision(!showVision);
        setShowPrincipal(false);
        setShowSahodra(false);
      });
    }
    
    if (sahodraButton) {
      sahodraButton.addEventListener("click", () => {
        setShowSahodra(!showSahodra);
        setShowVision(false);
        setShowPrincipal(false);
      });
    }
    
    if (principalButton) {
      principalButton.addEventListener("click", () => {
        setShowPrincipal(!showPrincipal);
        setShowVision(false);
        setShowSahodra(false);
      });
    }

    return () => {
      if (visionButton) {
        visionButton.removeEventListener("click", () => {
          setShowVision(!showVision);
        });
      }
      if (sahodraButton) {
        sahodraButton.removeEventListener("click", () => {
          setShowSahodra(!showSahodra);
        });
      }
      if (principalButton) {
        principalButton.removeEventListener("click", () => {
          setShowPrincipal(!showPrincipal);
        });
      }
    };
  }, [showVision, showPrincipal, showSahodra]);

  return (
    <div className='main'>
        <H2 h2="About Us"/> 
        <Bu id="gub1" data="Vision&Mission"/>
        {showVision && <Vision />}
        <Down/>
        <Bu id="gub2" data="About Sahodra Rai"/>
        {showSahodra && <Sahodra />}
        <Down/>
        <Bu id="gub3" data="principal`s Desk"/>
        {showPrincipal && <Principal />}
        <Down/>
    </div>
  )
}

export default About
