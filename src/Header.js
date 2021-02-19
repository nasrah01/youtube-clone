import React from 'react';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import { Avatar } from '@material-ui/core';

// hamburger menu, event listener opens navigation
// youtube logo, home link
// Search menu with icon, search bar includes an API
//four icons on the far right hand side
class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="header__navigation">
                    <MenuSharpIcon className="header__menu" style={{ fontSize: 28 }} />
                    <img src="yt-icon.png" alt="youtube icon" className="youtube__icon"/>
                </div>
                <div className="header__search">
                    <input type="text" placeholder="Search"/>
                    <div className="header__search--icon">
                        <SearchSharpIcon style={{ fontSize: 20 }} />
                    </div>
                </div>
                <div className="header__icons">
                    <VideoCallSharpIcon className="header__icons-icon" style={{ fontSize: 45 }} />
                    <AppsSharpIcon className="header__icons-icon" style={{ fontSize: 45 }} />
                    <NotificationsSharpIcon className="header__icons-icon" style={{ fontSize: 45 }} />
                    <Avatar className="header__avatar" />
                </div>
            </div>
           
        )
    }
}

export default Header;
