import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import Key from '../config';
import Recommended from './recommend/SuggestVideo';
import YouTube from 'react-youtube';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ShareIcon from '@material-ui/icons/Share';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Icons from './Icons';
import Avatar from '@material-ui/core/Avatar';

const VideoPlay = () => {

    let { videoId } = useParams();


    const [videoInfo, setVideoInfo] = useState([]);
   

    useEffect(() => {
        
        axios
          .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${videoId}&key=${Key}`)
          .then(response => {
              createVideoInfo(response.data['items'][0]);
              console.log(response.data['items'][0]);
          })
          .catch(error => {
              console.log(error);
          })

    }, [videoId])


    async function createVideoInfo (video) {
        const snippet = video.snippet;
        const stats = video.statistics;
        const channelId = snippet.channelId;
        const response = await axios
                              .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics&id=${channelId}&key=${Key}`)
    
        const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
        const subcount = response.data.items[0].statistics.subscriberCount;
        
        const title = snippet.title;
        const dateStamp = snippet.publishedAt;
        const description = snippet.description;
        const channelTitle = snippet.channelTitle;
        const viewCount = stats.viewCount;
        const likeCount = stats.likeCount;
        const dislikeCount = stats.dislikeCount;
    
        setVideoInfo({
            title,
            description,
            channelTitle,
            channelImage,
            viewCount,
            likeCount,
            dislikeCount,
            subcount,
            dateStamp
        });
    }
    
    return (
        
        
        <div className="videos video__player">
            <div className='player__container'>
                <div className='player__frame'>
                    <YouTube width={740}  videoId={videoId} />
                </div>
                <div className='player__info'>
                    <h2>{videoInfo.title}</h2>
                    <div className='player__info--stats'>
                        <div className='player__info--left'>
                            <p className="player__publish">
                                {videoInfo.viewCount} views <span>•</span> {videoInfo.dateStamp}
                            </p>
                        </div>
                        <div className='player__info--right'>
                            <Icons Icon={ThumbUpAltIcon} title={videoInfo.likeCount} />
                            <Icons Icon={ThumbDownIcon} title={videoInfo.dislikeCount} />
                            <Icons Icon={ShareIcon} title={'SHARE'} />
                            <Icons Icon={PlaylistAddIcon} title={'SAVE'} />
                        </div>
                    </div>
                    <div className='player__border'></div>
                    <div className='player__info--channel'>
                        <div className='player__info--avatar'>
                            <Avatar alt="channel image" src={videoInfo.channelImage} />
                        </div>
                        <div className='player__info--description'>
                            <h4 className='channel__name'>{videoInfo.channelTitle}</h4>
                            <p className='channel__subs'>{videoInfo.subcount} subscribers</p>
                            <p className='player__description'>{videoInfo.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='player__recommend'>
                <Recommended />
            </div>
           
        </div>
        )
}

export default VideoPlay;

