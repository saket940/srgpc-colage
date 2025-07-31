import React from 'react'

const right = (props) => {
  return (
    <>
      <div className="right">
            <div>
            <h2>{props.heading}</h2>
            <p>{props.paragraph}</p></div><div>
            <img src={props.image} alt={props.heading}/></div>
         </div>
    </>
  )
}

export default right
