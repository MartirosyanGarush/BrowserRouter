import React from 'react'
import "./MenuRouting.css"
import imgContact from "../ComponentsRoutings/pexels.jpeg"

export default function Contact() {
  return (
    <div className='container'>
      <div>
      <img src={imgContact} />
      </div>
    <div className='divtext'>
      
<h1>Hello Contact</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
       Ipsum has been the industry's standard dummy text ever since the 1500s, when <br />
       an unknown printer took a galley of type and scrambled it to make a type specimen book. <br />
       It has survived not only five centuries, </p> 
       </div>
      </div>
  )
}
