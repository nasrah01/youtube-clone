import React from 'react';
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
  
const VideoItem = ({ video }) => {

    const publishTime = new Date(video.snippet.publishedAt).getTime();
    const time = new Date().getTime();
    
    // refactor function if video views are not available do not show
    function createTimeStamp(time, upload) {

        const timeChange = time - upload;
        let sum = 0;

         if( timeChange / 1000 < 60) {
             sum = Math.floor(timeChange / 10000);
             return sum + ' seconds ago';
         }
         if(timeChange / 60000 < 60) {
             sum = Math.floor(timeChange / 60000);
             return sum + ' minutes ago';
         }
         if(Math.floor( timeChange / 3600000) === 1) {
            sum = Math.floor(timeChange / 3600000);
            return '1 hour ago';
        }
         if(timeChange / 3600000 < 24) {
             sum = Math.floor(timeChange / 3600000);
             return sum + ' hours ago';
         } 
         if(timeChange / 3600000 < 48) {
             sum = Math.floor(timeChange /  3600000);
             return '1 day ago';
         }
         if(timeChange / 3600000 < 168) {
            sum = Math.floor(timeChange /  86400000);
            return sum + ' days ago';
         }
         if(Math.floor(2628000000 / timeChange) === 1) {
            sum = Math.floor(2628000000 / timeChange);
            return sum + ' week ago';
         }
         if(timeChange  < 2628000000) {
            sum = Math.floor(2628000000 / timeChange);
            return sum + ' weeks ago';
         }
         if(Math.floor(31536000000 / timeChange) === 1) {
            sum = Math.floor(31536000000 / timeChange);
            return sum + ' month ago';
         }
         if(timeChange  < 31536000000) {
            sum = Math.floor(31536000000 / timeChange);
            return sum + ' months ago';
         }
         if(Math.floor(timeChange / 31536000000)  === 1) {
            sum = Math.floor(timeChange / 31536000000);
            return sum + ' year ago';
         } 
         if(timeChange  > 31536000000) {
            sum = Math.floor(timeChange / 31536000000);
            return sum + ' years ago';
         }           
    } 

    const viewCount = (num) => {
        if(num == null) {
            return '';
        } else {
            return  `${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} views • `;
        }
    };


    return (
        <Link key={video.id} to={`/PlayVideo/${video.id}`} >
        <div className="video__item"> 
            <div className="video__container">
                <img src={video.snippet.thumbnails.medium.url} alt= {video.snippet.title}  className="video__thumbnail"/>
            </div>
            <div className="video__info">
                <div className="suggest__avatar">
                    <Avatar alt="channel image" src={video.snippet.thumbnails.medium.url} />
                </div>
                <div className='suggest__description'>
                    <h2>
                        {video.snippet.title.substring(0, 60)}
                    </h2> 
                    <p className="video__channel">
                        {video.snippet.channelTitle}
                    </p>
                    <p className="video__publish">
                    {` ${viewCount(video.statistics.viewCount)}`} {createTimeStamp(time, publishTime)}
                    </p>
                </div>
            </div>
        </div>
        </Link>
    )
};

export default VideoItem
