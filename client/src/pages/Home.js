import React, { useEffect } from 'react'
import Navbar from '../componenets/Navbar'
import companyData from '../companyData'
import CompanyCard from '../componenets/CompanyCard'
import Data from '../data'
import './home.css'

const Home = () => {

  const [student,setStudent] = ([]); 

  // useEffect(()=>{
  //      setStudent(studentData);
  // },[])

  return (
    <div>
       <Navbar/>
       <div className='div-cont'>
        {
          companyData.map((company)=>{
              return <CompanyCard
                name = {company.name} 
                img = {company.imgURL}
              />
        })}
       </div>
    </div>
  )
}

export default Home