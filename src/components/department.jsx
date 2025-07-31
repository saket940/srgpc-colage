import React from 'react'
import Snipt from './snipt'
import H2 from './h2'
const Departement = () => {
  return (
      <div id="main" className="main" >
      <H2 h2="Deapartemente-"/>
      <Snipt img="/photo-1511818966892-d7d671e672a2.jfif" h2="Architecture & Interior Design" p="Interior designers are concerned about the aesthetics, functionality, and user experience of built structures" href="/department/ae"/>
      <Snipt img="/photo-1610563166150-b34df4f3bcd6.jfif" h2="Computer Science" p="Computer Science Engineering (CSE) is a popular undergraduate and postgraduate academic program that combines the fields of computer science and computer engineering" href="/department/cse"/>
      <Snipt img="/photo-1518770660439-4636190af475.jfif" h2="Electronics & Telecommunication" p="Electronics and telecommunication engineering (ETE) is a field that involves designing, producing, testing, and supervising the manufacturing of complex electronic systems and products" href="/department/et"/>
      <Snipt img="/vitaly-gariev-9pIkaC1fjEY-unsplash.jpg" h2="Fashion Technology" p="Fashion technology combines engineering and fashion design to create clothing and accessories that are both functional and aesthetically pleasing" href="/department/ft"/>
      <Snipt img="/photo-1522071820081-009f0129c71c.jfif" h2="Modern Office Management" p="Modern Office Management (MOM) is a field that aims to improve office efficiency and productivity by enhancing the performance of office work" href="/department/mom"/>
</div>  )
}

export default Departement
