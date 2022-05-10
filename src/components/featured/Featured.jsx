import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon />
            </div>
            <div className="bottom"></div>
        </div>
    )
}
