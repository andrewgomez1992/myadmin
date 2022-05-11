import React from 'react'
import './tables.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Tables = () => {


    const rows = [
        {
            id: 1143155,
            product: "Macbook Pro",
            img: "https://www.backmarket.com/cdn-cgi/image/format=auto,quality=75,width=640/https://d28i4xct2kl5lp.cloudfront.net/product_images/255929_f10d83a2-6054-4e2f-92d5-55348535b42b.jpg",
            customer: "Jon Reeves",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 2235235,
            product: "Playstation 5",
            img: "https://i5.walmartimages.com/asr/1d3de94e-3d14-49a7-8cab-0595739e8804.5fa1eb7060645da2fd6fb752ca7ad5d9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
            customer: "James BUTTHEAD Reeves",
            date: "1 March",
            amount: 900,
            method: "Online Payment",
            status: "Pending",
        },
        {
            id: 1143323,
            product: "Xbox 720",
            img: "https://i5.walmartimages.com/asr/fd9cc3cc-3533-4eec-a87d-e6abcc77aae7.0e7d395789bb5e75eb627b80cfe78b13.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
            customer: "Ray Charles",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 1144455,
            product: "Iphone 12 Case",
            img: "https://img.ltwebstatic.com/images3_pi/2020/12/29/1609210436d1ca9726cbe91293cfee94d5e177d291_thumbnail_600x.webp",
            customer: "Ari Gomez",
            date: "1 March",
            amount: 35,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 1123235,
            product: "Fixie Bike",
            img: "https://cdn.shopify.com/s/files/1/1109/6048/products/media_e5b35258-1a60-4b0b-806e-6692b02ff3b7_720x.jpg?v=1648740102",
            customer: "Drew Gomez",
            date: "1 March",
            amount: 250,
            method: "Cash on Delivery",
            status: "Approved",
        },
    ];

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>Tracking ID</TableCell>
                        <TableCell className='tableCell'>Product</TableCell>
                        <TableCell className='tableCell'>Customer</TableCell>
                        <TableCell className='tableCell'>Date</TableCell>
                        <TableCell className='tableCell'>Amount</TableCell>
                        <TableCell className='tableCell'>Payment Method</TableCell>
                        <TableCell className='tableCell'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className='tableCell'>{row.id}</TableCell>
                            <TableCell className='tableCell'>
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image" />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className='tableCell'>{row.customer}</TableCell>
                            <TableCell className='tableCell'>{row.date}</TableCell>
                            <TableCell className='tableCell'>{row.amount}</TableCell>
                            <TableCell className='tableCell'>{row.method}</TableCell>
                            <TableCell className='tableCell'>
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
