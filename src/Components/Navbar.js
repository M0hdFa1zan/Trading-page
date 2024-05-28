import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div className='navbar'>
            <div className='innav'>
                <div className='navleft'>
                    <div><img src='./Assets/logo.png' alt='' /></div>
                </div>
                <div className='navright'>
                    <div className='toggleicons'><img src='./Assets/bell.png' alt='' /></div>
                    <div className='toggleicons'><img src='./Assets/coinlogo.png' alt='' /></div>
                    <div className='toggleicons'><img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='' /></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
