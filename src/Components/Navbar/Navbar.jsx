import React, {useState} from 'react'
import './Navbar.css' 
//Imported Icons
import {AiFillCloseCircle, AiFillInstagram, AiFillYoutube} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
//display NavBar
const [active, setActive] = useState('menuDiv')
const showNavBar = ()=>{
  setActive('menuDiv activeNavbar')
}

//remove NavBar
const removeNavBar = ()=>{
  setActive('menuDiv')
}
  return (
    <div>
      <div className= "header flex">
    <div className="logoDiv">
      <h3 className="logo">Travelling</h3>
 </div>

<div className={active}>
  <ul className="menuLists">
  <li className="navItem">
    <a href="#" onClick={removeNavBar} className="menuLink">Home</a>
  </li>
  <li className="navItem">
    <a href="#" onClick={removeNavBar} className="menuLink">About</a>
  </li>
  <li className="navItem">
    <a href="#" onClick={removeNavBar} className="menuLink">Our Tours</a>
  </li>
  <li className="navItem">
    <a href="#" onClick={removeNavBar} className="menuLink">Gallery</a>
  </li>
  <li className="navItem">
    <a href="#" onClick={removeNavBar} className="menuLink">Blog</a>
  </li>
  <li className="navItem">
    <a href="#" onClick={removeNavBar} className="menuLink">Contact Us</a>
  </li>
  <li className="navItem">
    <a href="#" onClick={removeNavBar} className="menuLink">Pages</a>
  </li>
  </ul>

  <div onClick={removeNavBar} className="closeNavbar">
<AiFillCloseCircle className='icon'/>
  </div>
  </div>
  
  <div className="socialIcons">
<BsFacebook className='icon'/>
<AiFillYoutube className='icon'/>
<AiFillInstagram className='icon'/>
  </div>

  <div onClick={showNavBar} className="toggleNavbar">
    <TbGridDots className='icon'/>
  </div>
</div>
</div>
    
  )
}

export default Navbar