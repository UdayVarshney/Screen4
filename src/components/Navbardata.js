import React from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Navbardata = [
    {
        title:"Prior Authorization" ,
        icon: <EventNoteIcon /> ,
        link: "/prior-authorization",
    },
    {
        title:"Claims" ,
        icon: <MenuIcon /> ,
        link: "/claims",
    },
    {
        title:"Medical Records",
        icon:<LocalHospitalIcon />,
        link:"/medical-records" ,
    },
    {
        title:"My Profile" ,
        icon: <AccountCircleIcon /> ,
        link: "/my-profile",
    }
    
]