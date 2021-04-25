import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SuggestedVideos from './components/recommend/SuggestVideo';
import SearchVideos from './components/search/SearchVideos';
import youtube from './config';
import {BrowserRouter,Route} from "react-router-dom";
import VideoPlayer from './components/VideoPlayer';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import {Link} from 'react-router-dom';


const api = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
      part: 'snippet',
      type: 'video',
      maxResults: 25,
      key: youtube
  }
});


const App = () => {

  const [videos, setVideos] = useState([]);
  const [open, setOpen] = useState(true);

  const clickMenu = () => {
    setOpen(!open)
  };

  const onSearchSubmit = async inputSearch => {
    const response = await api.get('/search', {
        params: {
            q: inputSearch
        } 
    })
    
    setVideos(response.data.items);
    console.log(response.data.items)
}

      return (
        <div className="app">
        <BrowserRouter>
            <Route path='/' exact >
              <Header onFormSubmit={onSearchSubmit} open={open} setOpen={setOpen}/>
              <div className="main">
              <Sidebar open={open} />
              <div className={`suggest__videos videos ${open ? "active" : "hidden"}`}>
                <h3 className="suggested__header">Recommended</h3>
                <SuggestedVideos />
              </div> 
              </div>
            </Route>
              <Route path='/components/search/SearchVideos' exact>
              <Header onFormSubmit={onSearchSubmit} open={open} setOpen={setOpen}/>
              <div className="main">
                <Sidebar open={open} />
                <SearchVideos videos= {videos}/>
              </div>
            </Route>
            <Route path='/PlayVideo/:videoId' exact>
              <div className='videoplayer'>
                <Header onFormSubmit={onSearchSubmit} open={open} setOpen={setOpen}/>
                <div className="main__video">
                  <div className={`sidebar__container ${open ? "active" : "hidden"}`}>
                    <div className="header__navigation">
                      <MenuSharpIcon className="header__menu" style={{ fontSize: 28 }} onClick={clickMenu} />
                      <Link to='/'>
                          <img src="/yt-icon.png" alt="youtube icon" className="youtube__icon"/>
                      </Link>
                    </div>
                    <div className="sidebar__border"></div>
                    <Sidebar open={open} />
                  </div>
                  <VideoPlayer setOpen={setOpen}/>
                </div>
              </div>
            </Route>
        </BrowserRouter>
      </div>
      )
}

export default App;
