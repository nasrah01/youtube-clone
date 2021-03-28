import React from 'react';

const Icons = ({title, Icon}) => {
    return (
        <div className='player__icons'>
            <Icon className="player__icon" style={{fontSize: 28}}/>
            <h3 className="player__title">{title}</h3>
        </div>
    );
}

export default Icons;