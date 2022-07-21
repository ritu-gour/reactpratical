import React from 'react'
import AboutBanner from '../components/AboutComponenet/AboutBanner'
import AboutRow from '../components/AboutComponenet/AboutRow'
import AboutsCards from '../components/AboutComponenet/AboutsCards'
import Testimonials from '../components/AboutComponenet/Testimonials'
import HomeCards from '../components/HomeCards'


const About = () => {
  return (
    <div>
      <AboutBanner/>
      <HomeCards/>

      <AboutRow vid="https://www.youtube.com/embed/BZePt94p18Q" tle="YouTube video player"/>
      <div class="container my-5">
        <h1 className="text-center">OUR TEAMS</h1>
        <div class="row">
          <div class="col-sm-4">
           
          <AboutsCards img="http://morros.orphicwebsitetesting.site/wp-content/uploads/2022/05/87-512.webp"/>
          </div>
          <div class="col-sm-4">
          
          <AboutsCards img="http://morros.orphicwebsitetesting.site/wp-content/uploads/2022/05/87-512.webp"/>
          </div>
          <div class="col-sm-4">
          <AboutsCards img="http://morros.orphicwebsitetesting.site/wp-content/uploads/2022/05/87-512.webp"/>
          </div>
        </div>
      </div>
      <Testimonials img="http://localhost/avinash-1/assets/images/team_img3.jpg"/>
    </div>
  )
}

export default About