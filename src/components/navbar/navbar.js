import React from 'react'
import { Logo, LogoImg, Menu, NavbarContainer } from './styledNavbar'


function Navbar() {
    return (
        <div>
            <NavbarContainer>
                <Logo>
                    <LogoImg src="/images/logo.png" alt="" />
                </Logo>
                <Menu>
                    <ul>
                        <li>Home</li>
                        <li>Recipe</li>
                        <li>Blog</li>
                        <li>Videos</li>
                        <li>About us</li>
                        <li>Contact us</li>
                    </ul>
                </Menu>
            </NavbarContainer>
        </div>
    )
}

export default Navbar