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
              <Header onFormSubmit={onSearchSubmit}/>
              <div className="main">
              <Sidebar />
              <div className="suggest__videos videos">
                <h3 className="suggested__header">Recommended</h3>
                <SuggestedVideos />
              </div> 
              </div>
            </Route>
              <Route path='/components/search/SearchVideos' exact>
              <Header onFormSubmit={onSearchSubmit}/>
              <div className="main">
                <Sidebar />
                <SearchVideos videos= {videos}/>
              </div>
            </Route>
            <Route path='/PlayVideo/:videoId' exact>
              <div className='videoplayer'>
              <Header onFormSubmit={onSearchSubmit}/>
              <div className="main main__video">
                <Sidebar />
                <VideoPlayer />
              </div>
              </div>
            </Route>
        </BrowserRouter>
      </div>
      )
}

export default App;
