import React from 'react';
import SearchItem from './SearchItem';

const SearchVideos = ({videos}) => {

    const listVideos = videos.map(video => {
        return <SearchItem key={video.id.videoId} video= {video}/>
    });

    return (
    <div className="search__videos">
        {listVideos}
    </div>
    )
}

export default SearchVideos;