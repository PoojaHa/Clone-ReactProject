import React from 'react'
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SideBarOptions from './SideBarOptions';
import AddHomeIcon from '@mui/icons-material/AddHome';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ListIcon from '@mui/icons-material/List';
import Person2Icon from '@mui/icons-material/Person2';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import "./Sidebar.css";
import "./App.css";
const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
       {/* icons */}
       <TwitterIcon className='twitter_icon'/>
        {/* Sidebaroptions */}
        <SideBarOptions active Icon={AddHomeIcon} text="Home"/>
        <SideBarOptions  Icon={SearchIcon} text="Explore"/>
        <SideBarOptions  Icon={ NotificationsIcon} text="Notifications"/>
        <SideBarOptions  Icon={ EmailIcon} text="Email"/>
        <SideBarOptions  Icon={ BookmarksIcon} text="BookMarks"/>
        <SideBarOptions  Icon={ ListIcon} text="List"/>
        <SideBarOptions  Icon={ Person2Icon} text="Profile"/>
        <SideBarOptions  Icon={ MoreHorizIcon} text="More..."/>
        {/* button */}
      <Button variant='outlined' className="sidebar-tweet" fullWidth
      >Twitter</Button>
    </div>
    </>
  )
}

export default Sidebar