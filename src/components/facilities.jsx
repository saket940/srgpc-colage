import Snipt from './snipt'
import React from 'react'
import Line from './line'
import Right from './right'
import Left from './left'
import Top from './top'
import H2 from './h2'
const facilities = () => {
  return (
    <div id="main" className="main" >
      <H2 h2="Deapartemente-"/>
      <Snipt img="" h2="Architecture & Interior Design" p="Interior designers are concerned about the aesthetics, functionality, and user experience of built structures" href="/department/ae"/>
      <Snipt img="" h2="Computer Science" p="Computer Science Engineering (CSE) is a popular undergraduate and postgraduate academic program that combines the fields of computer science and computer engineering" href="/department/cse"/>
      <Snipt img="" h2="Electronics & Telecommunication" p="Electronics and telecommunication engineering (ETE) is a field that involves designing, producing, testing, and supervising the manufacturing of complex electronic systems and products" href="/department/et"/>
      <Snipt img="" h2="Fashion Technology" p="Fashion technology combines engineering and fashion design to create clothing and accessories that are both functional and aesthetically pleasing" href="/department/ft"/>
      <Snipt img="" h2="Modern Office Management" p="Modern Office Management (MOM) is a field that aims to improve office efficiency and productivity by enhancing the performance of office work" href="/department/mom"/>
</div> 
  )
}

export default facilities
