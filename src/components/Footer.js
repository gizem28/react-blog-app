import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare} from "react-icons/fa";

function Footer() {
    return (
        <footer style={{width:"100%", borderTop:"1px solid brown"}}>
            <div>
                Designed by Gizem
                <div className='icons'>
                <FaFacebookSquare style={{marginRight:10}}/>
                <FaTwitterSquare style={{marginRight:10}}/>
                <FaInstagramSquare/>
                </div>
                Copyright 2022

                
            </div>
        </footer>
    )
}

export default Footer
