import React from 'react'

const AboutRow = (props) => {
  return (
   
        <div>
             <div class="container-fluid j1">
             <div class="container my-5 ">
          <div class="row">
            <div class="col-sm-6">
            <iframe className="im" 
        src={props.vid} 
        title={props.tle} frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="col-sm-6">
                <h1> Lorem ipsum dolor sit</h1>
                <h4> Lorem ipsum dolor sit amet, consectetur</h4>
           <p className='j my-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus necLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus necLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus necLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus necLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus necLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus necLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus necLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus necLorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
          <button className='button1 my-3'>Contact</button>
            </div>
           
          </div>
        </div>
        </div>
        </div>
      )
    }
    
   
export default AboutRow