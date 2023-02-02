import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <Link to="/"><p><span className='sml'>The</span> <span className='big'>IsraelSfNewS</span></p></Link>
      <ul className='grid'>
        <Link to="/"><li>Entertainment</li></Link>
        <Link to="politics"><li>Politics</li></Link>
        <Link to="sciences"><li>Sciences</li></Link>
        <Link to="worldNew"> <li>World News</li></Link>
        <Link to="business"><li>Business & Innovations</li></Link>
      </ul>
    </nav>
  )
}
