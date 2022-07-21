import React from 'react'

const ContactMaps = (props) => {
  return (
    <div>
      
        <div className=" container  gird1 my-5 ">
        <div className="row ">
          
          <div className="col-md-12  ">

     <div id="map-container-google-1" className="z-depth-1-half map-container " >
            <iframe src={props.map} className="map1"
                frameborder="0" style={{border:"0" }}allowfullscreen></iframe>
        </div>
          </div>
         
        </div>
        </div>
        </div>
  
  )
}

export default ContactMaps