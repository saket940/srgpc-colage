import React from 'react'

const left = (props) => {
  return (
    <>
    <div className="left"><div>
  <img src={props.image} alt={props.heading}/>
  </div><div className="c">
  <h2>{props.heading}</h2>
  <p>{props.paragraph}</p></div>
  </div>
    </>
  )
}

export default left