import React, { useState } from 'react'
import './styless/navbar.css'
import search from './Image/search.png'
import upload from './Image/upload.png'
import more from './Image/more.png'
import notification from './Image/notification.png'
import user from './Image/user_profile.jpg'
import { Link } from 'react-router-dom'



const Navebar = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() !== '') {

      window.location.href = `/search?query=${encodeURIComponent(query)}`;
    }
  };
  return (
    <div className='navebar'>
        <nav className='flex-div'>
           <Link className='nav-left flex-div' to="/">
               <i class="fa-solid fa-tv"></i>
           </Link>
           <div className='nav-middle flex-div'>
           <div className='search-box flex-div' onSubmit={handleSubmit} to='/search'>
           <input text ="text" placeholder='Search....' value={query}  onChange={handleChange}/>
           <Link to={`/search?query=${encodeURIComponent(query)}`}>
           <li className='buttons' type="submits">
                   <img alt='' src={search} />
           </li>
           </Link>
           </div>
           </div>
           
           <div className='nav-right flex-div'>
              <img alt='' src={upload}/>
              <img alt='' src={more}/>
              <img alt='' src={notification}/>
              <img alt='' className='user-icon' src={user}/>
           </div>
        </nav>
    </div>
  )
}

export default Navebar