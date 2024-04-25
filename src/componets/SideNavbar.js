import React, { useState } from 'react';
import './styless/sideNavbar.css'
import home from './Image/home.png'
import game from './Image/game_icon.png'
import automobiles from './Image/automobiles.png'
import sports from './Image/sports.png'
import entertainment from './Image/entertainment.png'
import tech from './Image/tech.png'
import save from './Image/save.png'
import blogs from './Image/blogs.png'
import news from './Image/news.png'
import cameron from './Image/cameron.png'
import gerard from './Image/gerard.png'
import jack from './Image/jack.png'
import megan from './Image/megan.png'
import simon from './Image/simon.png'
import tom from './Image/tom.png'
import { Link } from 'react-router-dom'


const SideNavbar = () => {
      const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div >
        <div className='sildebar'>
          <div className='sortcut-link'>
              <Link className='side-link' to="/"  onClick={() => handleCategoryClick('Home')}>
                   <img alt="" src={home} style={{ color : 'black'}} />
                   <p style={{ color: selectedCategory === 'Home' ? 'rgb(160, 6, 6)' : 'black' ,marginTop:'20px'  }}>Home</p>
              </Link>
              <Link className='side-link' to="/game" onClick={() => handleCategoryClick('Game')}>
                   <img alt="" src={game}/>
                   <p style={{ color: selectedCategory === 'Game' ? 'rgb(160, 6, 6)' : 'black',marginTop:'20px'  }}>Game</p>
              </Link>
              <Link className='side-link'  to="/automobiles" onClick={() => handleCategoryClick('Automobiles')}>
                   <img alt="" src={automobiles}/>
                   <p style={{ color: selectedCategory === 'Automobiles' ? 'rgb(160, 6, 6)' : 'black' ,marginTop:'20px'  }}>Automobiles</p>
              </Link>
              <Link className='side-link'  to="/sports" onClick={() => handleCategoryClick('Sports')}>
                   <img alt="" src={sports}/>
                   <p style={{ color: selectedCategory === 'Sports' ? 'rgb(160, 6, 6)' : 'black' ,marginTop:'20px'   }}>Sports</p>
              </Link>
              <Link className='side-link'  to="/entertainment" onClick={() => handleCategoryClick('Entertainment')}>
                   <img alt="" src={entertainment}/>
                   <p style={{ color: selectedCategory === 'Entertainment' ? 'rgb(160, 6, 6)' : 'black' ,marginTop:'20px'  }}>Entertainment</p>
              </Link>
              <Link className='side-link'  to="/tech" onClick={() => handleCategoryClick('Tech')}>
                   <img alt="" src={tech}/>
                   <p style={{ color: selectedCategory === 'Tech' ? 'rgb(160, 6, 6)' : 'black' ,marginTop:'20px'  }}>Tech</p>
              </Link>
              <Link className='side-link'  to="/save" onClick={() => handleCategoryClick('Save')}>
                   <img alt="" src={save}/>
                   <p style={{ color: selectedCategory === 'Save' ? 'rgb(160, 6, 6)' : 'black' ,marginTop:'20px'  }}>Save</p>
              </Link>
              <Link className='side-link'  to="/blogs" onClick={() => handleCategoryClick('Blogs')}>
                   <img alt="" src={blogs}/>
                   <p style={{ color: selectedCategory === 'Blogs' ? 'rgb(160, 6, 6)' : 'black' ,marginTop:'20px'  }}>Blogs</p>
              </Link>
              <Link className='side-link'  to="/news" onClick={() => handleCategoryClick('News')}>
                   <img alt="" src={news}/>
                   <p style={{ color: selectedCategory === 'News' ? 'rgb(160, 6, 6)' : 'black' ,marginTop:'20px'  }}>News</p>
              </Link>
              <hr/>
          </div>

          <div className='subscribed-last'>
               <h3>Subscribed</h3>
               <div className='side-link'>
                         <img alt='' src={cameron}/><p style={{marginTop:'20px'}}>Cameron</p>
               </div>
               <div className='side-link'>
                         <img alt='' src={gerard}/><p style={{marginTop:'20px'}}>gerard</p>
               </div>
               <div className='side-link'>
                         <img alt='' src={jack}/><p style={{marginTop:'20px'}}>jack</p>
               </div>
               <div className='side-link'>
                         <img alt='' src={megan}/><p style={{marginTop:'20px'}}>megan</p>
               </div>
               <div className='side-link'>
                         <img alt='' src={simon}/><p style={{marginTop:'20px'}}>simon</p>
               </div>
               <div className='side-link'>
                         <img alt='' src={tom}/><p style={{marginTop:'20px'}}>tom</p>
               </div>
          </div>

        </div>

    </div>
  )
}

export default SideNavbar