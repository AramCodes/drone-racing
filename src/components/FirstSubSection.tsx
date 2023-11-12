import React from 'react'
import Blur from '../images/blur.png'
import Drone from '../images/drone.png'

const FirstSubSection = () => {
  return (
    <main>
        <div className='content'>
            <div className="type">
                <h1>Drone Racing Gone Wild</h1>
                <p>Register now for the ultimate drone racing event. 5 mile courses and over $10 million in prize money!</p>
            </div>
            <div className="drone-container">
            <img src={Blur} className="blur" alt='blur'/>
            <img src={Drone} className="drone" alt='drone'/>
            </div>
        </div>
    </main>
  )
}

export default FirstSubSection
