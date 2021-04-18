import React, {useState} from 'react';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import {Link} from 'react-router-dom';

import { Avatar } from '@material-ui/core';

const Header = ({onFormSubmit, open, setOpen}) =>  {

    const [inputSearch, setInputSearch] = useState('');

    const updateInput = (e) => {
        setInputSearch(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(inputSearch);
    }

    const onClick = () => setOpen(!open);

        return (
            <div className="header">
                <div className="header__navigation">
                    <MenuSharpIcon className="header__menu" style={{ fontSize: 28 }} onClick={onClick}/>
                    <Link to='/'>
                        <img src="/yt-icon.png" alt="youtube icon" className="youtube__icon"/>
                    </Link>
                </div>
                <form className="header__search" onSubmit={onSubmit}>
                    <input type="text" placeholder="Search" value={inputSearch} onChange={updateInput}/>
                    <Link to='/components/search/SearchVideos'>
                        <div className="header__search--icon">
                            <SearchSharpIcon style={{ fontSize: 20 }} />
                        </div>
                   </Link> 
                </form> 
                <div className="header__icons">
                    <VideoCallSharpIcon className="header__icons-icon" style={{ fontSize: 45 }} />
                    <AppsSharpIcon className="header__icons-icon" style={{ fontSize: 45 }} />
                    <NotificationsSharpIcon className="header__icons-icon" style={{ fontSize: 45 }} />
                    <Avatar className="header__avatar" />
                </div>
            </div>
           
        )
}

export default Header;
