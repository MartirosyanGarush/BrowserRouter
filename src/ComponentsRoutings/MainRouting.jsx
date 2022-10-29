import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './About'
import Brands from './Brands'
import Contact from './Contact'
import Home from './Home'
import MenuRouting from './MenuRouting'

export default function MainRouting() {

    return (
        <div>
            <BrowserRouter>
            <MenuRouting />
                <Routes>
                    <Route path='*'  element={<Home/>}/>
                    <Route path='/About' element={<About/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                    <Route path='/Brands' element={<Brands/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
