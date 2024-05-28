import React from 'react'
import Navbar from '../Components/Navbar'
import Leadertabs from '../Components/Leadertabs'
import Mainleader from '../Components/Mainleader'
import "./Leaderboard.css"

function Leaderboard() {
    return (
        <div className='leader'>
            <Navbar />
            <Leadertabs />
            <Mainleader />
        </div>
    )
}

export default Leaderboard
