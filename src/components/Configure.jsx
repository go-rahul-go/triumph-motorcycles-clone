import React, { useContext } from 'react'
import "./configure.css"
import { Link } from 'react-router-dom'
import { HideContext } from '../App'
const Configure = () => {
  const display=useContext(HideContext)
  return (
    <section className={display?'configure-section-hide':'configure-section'}>
        <div className='config-box'>
            <h2>configure your perfect ride</h2>
            <Link className='config-link-btn'>let's go!</Link>
        </div>
    </section>
  )
}

export default Configure