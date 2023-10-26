import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
       <div className='row text-white'>
            <div className='col-4'>
                <h1>We Are</h1>
                <ul>
                    <li>Humans</li>
                    <li>Branding Experts</li>
                    <li>collaborators</li>
                    <li>Humans</li>
                </ul>
            </div>
            <div className='col-4'>
            <h1>We Are not</h1>
                <ul>
                    <li>Marketing Films</li>
                    <li>SEO Experts</li>
                    <li>your Mama</li>
                    <li>Aliens</li>
                </ul>
           </div>
            <div className='col-4'>
            <h1>What we do</h1>
                <ul>
                    <li>Brand audit and Research </li>
                    <li>Brand Startegy</li>
                    <li>Visual Identity Design</li>
                    <li>Brand Guidelines</li>
                </ul>
            </div>
       </div>
       <Link to="/">
       <button type="button" class="btn btn-outline-primary">Go back to the Home page</button>
       </Link>
    </>
  
  )
}

export default About