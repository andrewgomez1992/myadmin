import React from 'react'
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

export const Widget = ({ type }) => {

    let data;

    //temperary
    const amount = 100
    const diff = 20

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlinedIcon
                    className='icon'
                    style={{
                        color: 'rgb(246, 228, 226)',
                        backgroundColor: 'rgb(214, 58, 37)'
                    }}
                />,
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon
                    className='icon'
                    style={{
                        color: 'rgb(223, 237, 245)',
                        backgroundColor: 'rgb(88, 177, 222)'
                    }}
                />,
            }
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlinedIcon
                    className='icon'
                    style={{
                        color: 'rgb(173, 246, 213)',
                        backgroundColor: 'rgb(41, 179, 117)'
                    }}
                />,
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: false,
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon
                    className='icon'
                    style={{
                        color: 'rgb(217, 209, 235)',
                        backgroundColor: 'rgb(121, 78, 222)'
                    }}
                />,
            }
            break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}
