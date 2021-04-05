import React from 'react';
import {Link} from 'react-router-dom';
  
const SearchItem = ({ video}) => {

    const publishTime = new Date(video.snippet.publishedAt).getTime();
    const time = new Date().getTime();
    
    // refactor function
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


    return (
        <Link key={video.id.videoId} to={`/PlayVideo/${video.id.videoId}`} >
            <div className="video__item"> 
                <div className="video__container">
                    <img src={video.snippet.thumbnails.medium.url} alt= {video.snippet.title}  className="video__thumbnail"/>
                </div>
                <div className="video__info">
                    <h2>
                        {video.snippet.title.substring(0, 60)}
                    </h2> 
                    <p className="video__publish">
                    {createTimeStamp(time, publishTime)}
                    </p>
                    <p className="video__channel">
                        {video.snippet.channelTitle}
                    </p>
                    <p className="video__description">
                        {video.snippet.description}
                    </p>
                </div>
            </div>
        </Link>
    )
};

export default SearchItem
