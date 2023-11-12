// import React from 'react'
import Picture1 from '../../src/images/equipment.jpg'
import Picture2 from '../../src/images/side view.jpg'
import Picture3 from '../../src/images/highway view.jpg'
import Picture4 from '../../src/images/controller.jpg'
import Picture5 from '../../src/images/areial view.jpg'

const ThirdSection = () => {
  return (
    <section className="gallery">
        <div className="footage-content">
                <h2>Last year's footage</h2>
                <p>With over 5,000 participants, 2020 featured some of the most amazing drone races from the most competitive field ever seen.</p>
                <p>In 2021, we’re about to double the excitement with 10,000 race participants and 100,000 fans!</p>
            </div>
            <div className="gallery-container">
                <img src={Picture1} alt='various recording equipement'className='equipment'/>
                <img src={Picture2} alt='drone flying at a tilt'className='tiltedDrone'/>
                <img src={Picture3} alt='ariel highway view'className='highway'/>
                <img src={Picture4} alt='drone controller'className='controller'/>
                <img src={Picture5} alt='drone flying from a distance'className='flyingDrone'/>
            </div>
    </section>
  )
}

export default ThirdSection
