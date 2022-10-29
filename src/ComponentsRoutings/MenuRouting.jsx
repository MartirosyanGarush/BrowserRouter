import React from 'react'
import { Link } from 'react-router-dom'
import "./MenuRouting.css"
import {FaAsymmetrik} from 'react-icons/fa'

export default function MenuRouting() {
    return (
        <div>
            <nav>
                <ul className='ulbar'>
                <div className='logo'> <Link className='Link' to='*'><FaAsymmetrik/></Link> </div>
                    <li ><Link className='Link' to='/About'>About </Link></li>
                    <li ><Link className='Link'to='/Contact'>Contact</Link></li>
                    <li ><Link className='Link'to='/Brands'>Brands</Link></li>
                </ul>
            </nav>
        </div>
    )
}
