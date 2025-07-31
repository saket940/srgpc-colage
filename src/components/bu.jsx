import React from 'react'
import { Link } from 'react-router-dom'
const bu = (propes) => {
  return (
    <div>
      <Link to={propes.href}>
      <button id={propes.id} className="gbu"type="button" >{propes.data}</button>
      </Link>
    </div>
  )
}


export default bu
