import React from 'react'
import Contactbanner from '../components/ContactCompoenet/Contactbanner'
import ContactInfor from '../components/ContactCompoenet/ContactInfor'
import ContactMaps from '../components/ContactCompoenet/ContactMaps'
import Register from '../components/ContactCompoenet/Register'

const Contact = () => {
  return (
    <div>
      <Contactbanner />
      <div class="container my-5">
        <h1 className="text-center">Contact Information</h1>
        <div class="row">
          <div class="col-sm-4">
           
          <ContactInfor tt="Address" nma="Bhopal MP Sehore Dis" imags="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6m7rkiiQ_6pjIss0XRthPo81OsqBxE0C0gw&usqp=CAU"/>
          </div>
          <div class="col-sm-4">
          
          <ContactInfor tt="Call Us" nma="(+91) 756-789-4356"  imags="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8y41ZskwJz570AkBHyj9bRIZT_9o-xcAhsA&usqp=CAU"/>
          </div>
          <div class="col-sm-4">
          <ContactInfor tt="Email" nma="gourritu78@gmail.com"  imags="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyzJtXDIsVnEYZPUTLjkzuZXXJYY7HiyJiQ&usqp=CAU"/>
          </div>
        </div>
      </div>
      <ContactMaps map="https://maps.google.com/maps?q=Bhopal,+Madhya+Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"/>
      <Register/>
    </div>
  )
}

export default Contact