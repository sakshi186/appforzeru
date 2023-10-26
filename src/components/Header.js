import React from 'react'
import "../App.css";
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
      <div className='main_header container'>
            <div className='row'>
                <div className='col-4 icon1 '>
                    
                </div>
           
                <div className='col-6 '>
                    <div className='carol mx-5'>CAROL SOLVAY</div>
                    <div className='mind mx-5'>Mindset Mastery Mentor</div>
                </div>
                <div className='col-2'>
                  <Navbar/>
                </div>
            </div>
          

     </div>
     <div className='img1 container'>

</div>
     </>
  )
}

export default Header