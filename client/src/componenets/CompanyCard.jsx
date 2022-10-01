import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StudentCard from './StudentCard'

import Avatar from './Avatar'
import './card.css'

const CompanyCard = (props) => {

  const navigate = useNavigate()
  const companyName = props.name;
  const handleClick = ()=>{
        navigate('/student',{state: companyName })
  } 

  return (
      <div onClick={handleClick} className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
      </div>
  )
}

export default CompanyCard