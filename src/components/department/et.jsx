import React from 'react'
import Line from '../line'
import Right from '../right'
import Left from '../left'
import Top from '../top'
import H2 from '../h2'
const et = () => {
    let ag = "https://via.placeholder.com/150";
  return (
<div id="main" className="main" >
<Top image={ag} heading="Computer Science" paragraph="A diverse field focused on programming, algorithms, and system design, essential for creating and managing software and technology."/>
<Line/>
<Right image={ag} heading="Computer Lab" paragraph="State-of-the-art facilities equipped with modern hardware and software to support coding, research, and technical skills development."/>
<Line/>
<Left image={ag} heading="Internat Canaction" paragraph="Seamless internet connectivity across the campus, enabling students to access online resources and collaborate effectively."/>
<Line/>
<Right image={ag} heading="Practical learning" paragraph="Hands-on experience through labs, projects, and workshops designed to bridge the gap between theory and real-world application"/>
<Line/>
<H2 h2={'Faculties-'}></H2>
<Line/>
<Left image={ag} heading="Dr. Mayank Kumar Rusia" paragraph= ""/>
<Line/>
<Right image={ag} heading="Er. Rakha Ahirwaer" paragraph=""/>
<Line/>
<Left image={ag} heading="Er. Rajbhan Shingh" paragraph=""/>
<Line/>
<Right image={ag} heading="Er. Nirmala Sen" paragraph=""/>
<Line/>
<Left image={ag} heading="Er. Akancha Rusia" paragraph=""/>
    </div>
  )
}

export default et
