import React from 'react'
import { Link } from 'react-router'
const snipt = (props) => {
  return (
    <Link to={props.href}>
    <div className="mb-6 cart">
      <button id='cse'>
        <img id="i2" src={props.img} alt={props.img} />
        <h2>
          <u>{props.h2}</u>
        </h2>
        <p>{props.p}</p>
      </button>
    </div></Link>
  )
}

export default snipt
