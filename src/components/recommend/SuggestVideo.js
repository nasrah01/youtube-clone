import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchKey from '../../config';
import VideoResults from './VideoResults';

const SuggestedVideos = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
      axios
      .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer%2Cstatistics&type=video&chart=mostPopular&regionCode=US&maxResults=20&key=${SearchKey}`)
      .then(response => {
        setVideos(response.data.items)
      })
    }, [])

  
      const trendVideos = videos.map(video => {
        return <VideoResults key={video.etag} video= {video}/>
      });

      return (
          <div className="suggested__videos">
              <div className="videos__border"></div>
              {trendVideos}
          </div>
      )
  };

  export default SuggestedVideos;