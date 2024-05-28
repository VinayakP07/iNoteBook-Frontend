import React,{useEffect} from 'react'
import {Link, useLocation} from "react-router-dom";

export const Navbar = () => {
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

    const logOut = () => {
      localStorage.removeItem("token");
    }

  return (
    <>
        <div className=' sticky top-0 text-white bg-[#012d3a] items-center pt-3 pb-3 flex justify-between'>
            <Link className=' font-semibold font-serif text-[2.5rem] ml-10' to="/">iNoteBook</Link>
            <div className=' flex flex-row space-x-44 text-[1.2rem] text-slate-400'>
                <Link className={`${location.pathname==="/"?"text-white":""} hover:underline hover:text-[1.3rem]`} to="/"><b>Home</b></Link>
                <Link className={`${location.pathname==="/about"?"text-white":""}  hover:underline hover:text-[1.3rem]`} to="/about"><b>About Us</b></Link>
                <Link className={`${location.pathname==="/contact"?"text-white":""} hover:underline hover:text-[1.3rem]`} to="/contact"><b>Contact Us</b></Link>
            </div>
            {!localStorage.getItem("token") && <div className=' flex space-x-3 mr-5'>
              <Link to="/login"><button className=' border-2 border-black bg-blue-500 w-[4.5rem] h-[2rem] rounded-lg hover:bg-blue-600'><b>LogIn</b></button></Link>
              <Link to="/signup"><button className='bg-blue-500 border-2 border-black w-[4.5rem] h-[2rem] rounded-lg hover:bg-blue-600'><b>SignUp</b></button></Link>
            </div>}
            {localStorage.getItem("token") && <div className=' flex space-x-3 mr-5'>
              <Link to="/login"><button onClick={logOut} className=' border-2 border-black bg-blue-500 w-[4.5rem] h-[2rem] rounded-lg hover:bg-blue-600'><b>LogOut</b></button></Link>
            </div>}
        </div>
    </>
  )
}
