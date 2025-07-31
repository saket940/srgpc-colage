import React from 'react'
const top = (props) => {
  return (
    <>
          <div className="top">
            <img src={props.image} alt={props.heading}/>
            <h2>{props.heading}</h2>
            <p>{props.paragraph}</p>
         </div>
    </>
  )
}
export default top
