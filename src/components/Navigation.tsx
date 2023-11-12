import { useState } from 'react'
import MenuBtn from "../images/dashicons_menu.svg"
import ExitBtn from "../images/circle-x.svg"

const Navigation = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const styles = {transform: isMenuOpen? 'translateX(0)': 'translateX(100%)'}

  function toggleMenu(): void { 
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='container'>
        <nav>
            <a href="#" className="logo"><span>Drone</span>.Series</a>
                
            <img src={MenuBtn} className="menu-btn" alt='menu'
            onClick={toggleMenu}
            />
                
            <ul style={styles}>
                <li className="exit-btn" onClick={toggleMenu}><img src={ExitBtn} alt='exit'/></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Races</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className='second'>
              <a href="#">Home</a>
              <a href="#">Races</a>
              <a href="#">Register</a>
              <a href="#">FAQ</a>
              <a href="#">Contact</a>
            </div>
              
            

        </nav>
    </div>
  )
}

export default Navigation
