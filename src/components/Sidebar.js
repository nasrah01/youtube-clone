import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

import SidebarList from './SidebarList';



const Sidebar = () =>  {

    
    return (
        <div className="sidebar">
            <SidebarList selected Icon={HomeIcon} title="Home" />
            <SidebarList Icon={WhatshotIcon} title="Trending" />
            <SidebarList Icon={SubscriptionsIcon} title="Subscriptions" />

            <div className="sidebar__border"></div>
        
            <SidebarList Icon={VideoLibraryIcon} title="Library" />
            <SidebarList Icon={HistoryIcon} title="History" />
            <SidebarList Icon={OndemandVideoIcon} title="Your videos" />
            <SidebarList Icon={WatchLaterIcon} title="Watch later" />
            <SidebarList Icon={ThumbUpIcon} title="Liked videos" />
            <SidebarList Icon={FavoriteOutlinedIcon} title="Favorites" />

            <div className="sidebar__border"></div>

            <h3 className="sidebar__subhead">subscriptions</h3>

            <SidebarList Icon={AddCircleIcon} title="Browse channels" />

            <div className="sidebar__border"></div>

            <h3 className="sidebar__subhead">More from youtube</h3>

            <SidebarList Icon={SettingsIcon} title="Settings" />
            <SidebarList Icon={FlagIcon} title="Report history" />
            <SidebarList Icon={HelpIcon} title="Help" />
            <SidebarList Icon={FeedbackIcon} title="Send feedback" />
        </div>
    )
}

export default Sidebar;