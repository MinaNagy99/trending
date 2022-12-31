import React from 'react'
import  { Link } from 'react-router-dom'

export default function Navbar({userData ,logOut}) {
  return <>
    <nav className='d-flex justify-content-between flex-md-row flex-column w-100  px-3 py-1'>
      <div className="nav-left d-flex align-items-center">
        <h1 className='m-0 pe-2'>Noxe</h1>

        {userData? <ul className='d-flex list-unstyled m-0 align-items-center'>
          
          <li><Link to='/'>Home</Link></li>
          <li><Link to='about'>About</Link></li>
          <li><Link to='movies'>Movies</Link></li>
          <li><Link to='tvshow'>TvShow</Link></li>
          <li><Link to='people'>People</Link></li>

        </ul>:''}
       
      </div>
      <div className="right-nav d-flex flex-md-row flex-column align-items-center">
        <div className="social-media px-3">
          <i className='fab fa-facebook mx-2'></i>
          <i className='fab fa-instagram mx-2'></i>
          <i className='fab fa-twitter mx-2'></i>
          <i className='fab fa-youtube mx-2'></i>

        </div>
        <ul className='d-flex flex-md-row flex-column list-unstyled m-0 align-items-center'>
         
          {userData? <>
          <li className='cursor-pointer' onClick={logOut}><span >Logout</span></li>
          <li><Link to='profile'>Profile</Link></li>
          </>: <>
          <li><Link to='register'>Register</Link></li>
          <li><Link to='login'>Login</Link></li>
          </>}
         

        </ul>
      </div>
    </nav>



  </>
}
