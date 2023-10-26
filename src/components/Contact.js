import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
   <>
   <h1 className='text-white d-flex justify-content-center'>Contact Us</h1>
      <div className='row text-white'>
        <div className="col-4 mt-5">
            <h3>By Phone</h3>

            
             <h6>   Monday to Friday ( 9AM to 4PM PST)</h6>
              <p>  North America Toll Free number
                877-****
                International : 12345</p>
                <button type="button" class="btn btn-outline-success">Call us now</button>

        </div>
        <div className="col-4 mt-5">

            <h3> Start a New Case</h3>
            <p>
                Just send your questions to our concerns by starting a new case and we will give you the help you need.
            </p>
            <button type="button" class="btn btn-outline-info">Start Here</button>

        </div>
        <div className="col-4 mt-5 mb-5">
            <h3>Live Chat</h3>
            <h4>Chat with a member of our in-house team</h4>
            <button type="button" class="btn btn-outline-warning">Start Chat</button>
        </div>
      </div>
      <Link to="/">
      <button type="button" class="btn btn-outline-primary">Go back to home page</button>
      </Link>
      
   </>
  )
}

export default Contact