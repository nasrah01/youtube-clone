import React from 'react';

const SidebarList = ({selected, title, Icon}) => {
    return (
        <div className={`sidebar__item ${selected && 'selected'} `}>
            <Icon  className="sidebar__icon"/>
            <h2 className="sidebar__title">{title}</h2>
        </div>
    );
}

export default SidebarList;