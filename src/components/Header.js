import React from 'react'
import { Link } from "react-router-dom"
import { HeaderStyles } from './HeaderStyles'

function Header() {
    return (
        <HeaderStyles>     
            <nav>
                <h1>
                    <Link to="/">CommitViewer</Link>     
                </h1>            
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </HeaderStyles>
    )
}

export default Header
