import React from 'react'
import "./MenuRouting.css"
import imgAbout from "../ComponentsRoutings/pexels.jpeg"

export default function About() {
  return (
    <div className='container'>
      <div>
      <img src={imgAbout} />
      </div>

    <div className='divtext'>
      
      <h1>Hello About</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
       Ipsum has been the industry's standard dummy text ever since the 1500s, when <br />
       an unknown printer took a galley of type and scrambled it to make a type specimen book. <br />
       It has survived not only five centuries, </p>   
       </div>

     </div>
  )
}
