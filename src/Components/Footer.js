/* eslint-disable react/jsx-no-target-blank */
import React, {useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";


export const Footer = () => {
    let location = useLocation();
    useEffect(() => {
      if (location.pathname === "/") {
        document.title = "iNoteBook - Save Your Notes On Cloud";
      } else if (location.pathname === "/about") {
        document.title = "iNoteBook - About Us";
      } else if (location.pathname === "/contact") {
        document.title = "iNoteBook - Contact Us";
      } else {
        document.title = "iNoteBook - Save Your Notes On Cloud";
      }
    }, [location]);
  return (
    <>
        <div className=' bg-black mt-20'>
            <div className=' pt-[5rem] flex flex-row justify-center space-x-36'>

                <a target='_blank' href="https://www.instagram.com/vinayak_puranik07?igsh=enpoejR3ZG44Z2x0"><img className=' w-[3.8rem] h-[2.6rem] mt-[0.8rem]' src= "https://awareak.org/wp-content/uploads/2023/07/CITYPNG.COMHD-White-Instagram-Round-Logo-Icon-PNG-1600x1200-1.png" alt="" /></a>

                <a href="https://www.linkedin.com/in/vinayakpuranik04052004/" target='_blank'><img className=' mt-[0.9rem] w-[2.5rem] h-[2.4rem]' src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-a7sf08js.png" alt="" /></a>

                <a target='_blank' href="https://github.com/VinayakP07"><img className='w-[5rem] -mt-[0.5rem]' src="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg" alt="" /></a>

                <a target='_blank' href="mailto:vinayakpuranik0707@gmail.com"><img className=' w-[2.5rem] h-[2.5rem] mt-[0.8rem]' src="https://www.pikpng.com/pngl/b/261-2611725_email-icon-email-icon-round-white-png-clipart.png" alt="" /></a>
            </div>
            <div className=' text-slate-400 text-2xl flex flex-row justify-center space-x-36 pb-10 mt-[3rem]'>
                <Link className={`${location.pathname==="/"?"text-white":""} hover:underline`} to="/"><b>Home</b></Link>
                <Link className={`${location.pathname==="/about"?"text-white":""}  hover:underline`} to="/about"><b>About</b></Link>
                <Link className={`${location.pathname==="/contact"?"text-white":""}  hover:underline`} to="contact"><b>Contact</b></Link>
            </div>
            <div className=' bg-gray-900 text-white flex justify-center pt-7 pb-7'>
                <p className=' font-semibold'>Copyright &#169; 2024 All Rights Reserved | Designed By - Vinayak Puranik</p>
            </div>
        </div>
    </>
  )
}
