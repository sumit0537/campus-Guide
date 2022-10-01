import React from 'react'
import data from '../data'

import Navbar from '../componenets/Navbar'
import StudentCard from '../componenets/StudentCard'
import { useLocation } from 'react-router-dom'

const Student = () => {

 const {state} = useLocation()
  console.log(state)
  return (
    <div>
       <Navbar/>
       {
        data.filter(student =>state===student.company).map((s)=>{
            return <StudentCard
                    name = {s.name}
                    img = {s.imgURL}
                    tel ={s.phone}
                    email = {s.company}
                />
        })
       }
    </div>
  )
}

export default Student