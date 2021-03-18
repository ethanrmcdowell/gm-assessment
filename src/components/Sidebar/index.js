import React from 'react';
import './style.css';
import Card from '../Card';

const Sidebar = () => {
    return(
        <div className='sidebarMain col-3'>
            <Card />
            <Card />
        </div>
    )
}

export default Sidebar;