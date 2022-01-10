import React from 'react'
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare
} from "react-icons/fa";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {
    return (
    <footer style = {{
                width: "100%",
                borderTop: "1px solid brown"}}>
        <div>Designed by Gizem </div>
        <div className = 'icons' >
            <FaFacebookSquare style = {{marginRight: 10}}/> 
            <FaTwitterSquare style = {{marginRight: 10}}/> 
            <FaInstagramSquare / >
        <Typography variant = "body2"
        align = "center"> {
            'Copyright © '
        } <Link color = "inherit" href = "https://mui.com/" >
        Social Blog </Link>{' '} {
            new Date().getFullYear()} 
            {'.'} </Typography> </div> </footer>
    )
}

export default Footer