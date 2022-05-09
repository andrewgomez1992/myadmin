import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon />
                    </div>
                    <div className="item">
                        <FullscreenExitIcon />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon />
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon />
                    </div>
                    <div className="item">
                        <ListOutlinedIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
