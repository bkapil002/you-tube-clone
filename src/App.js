import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componets/Home';
import Navebar from './componets/Navebar';
import SideNavbar from './componets/SideNavbar';
import Game from './componets/Game';
import Blogs from './componets/Blogs';
import Save from './componets/Save';
import Sports from './componets/Sports';
import Tech from './componets/Tech';
import Automobiles from './componets/Automobiles';
import News from './componets/News';
import Entertainment from './componets/Entertainment';
import SearchResults from './componets/SearchResult';
import VideoPayer from './componets/VideoPayer';
import Channel from './componets/Channel'


function App() {
  return (
    
    <div>
    <Router>
      <Navebar/>
      <div className='header'>
      <div>
        <SideNavbar/>
      </div>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/save' element={<Save/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/tech' element={<Tech/>}/>
        <Route path='/automobiles' element={<Automobiles/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/search' element={<SearchResults/>}/>
        <Route path='/entertainment' element={<Entertainment/>}/>
        <Route path='/videoplayer/:videoId' element={<VideoPayer/>}/>
        <Route path='/chennel' element={<Channel/>}/>
      </Routes>
      </div>

      </div>
    </Router>   
    </div>
  );
}

export default App;