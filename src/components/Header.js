import React from 'react';
import "../App.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

function TopHeader(){
    return (
        <div className='TopHeader'>
            <p>*This is a demo login with limited but essential functionality</p>
            <h1>Welcome Bayer!</h1>
            <h2>Manage Requests</h2>
            <h3>Pending</h3>
            <div className='accept'>
                <h3>Accepted</h3>
            </div>
            <div className="flex-container">
             <div><SearchIcon /></div> 
             <div><NotificationsIcon /></div> 
             <div><AccountCircleIcon /></div>
             <div><LogoutIcon /></div>  
            </div>
        </div>
    );
}

export default TopHeader;