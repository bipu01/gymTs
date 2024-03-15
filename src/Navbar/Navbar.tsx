import { useState } from "react"
import { NavHeroBtn } from "../components/Buttons/Button"
import { requiresPadding } from "../declaratiionVariables"
import { Link } from "react-router-dom";

const Navbar = () => {

 const [isHomeActive, setHomeActive] =useState(localStorage.getItem("activePage")==="/");
 const [isAboutUsActive, setAboutUsActive] =useState(localStorage.getItem("activePage")==="/aboutUs");
 const [isContactUsActive, setContactUsActive] =useState(localStorage.getItem("activePage")==="/contactUs");
 const [isEnrollNowActive, setEnrollNowActive] =useState(localStorage.getItem("activePage")==="/enrollPage");

  const toggleHomeActive  = () => {
    setHomeActive(true)
    setAboutUsActive(false)
    setContactUsActive(false)
    setEnrollNowActive(false)
    localStorage.setItem("activePage","/")
  };
  const toggleAboutUsActive  = () => {
    setHomeActive(false)
    setAboutUsActive(true)
    setContactUsActive(false)
    setEnrollNowActive(false)
    localStorage.setItem("activePage","/aboutUs")
  };
  const toggleContactUsActive  = () => {
    setHomeActive(false)
    setAboutUsActive(false)
    setContactUsActive(true)
    setEnrollNowActive(false)
    localStorage.setItem("activePage","/contactUs")
  };
  
  const toggleEnrollNowActive  = () => {
    setHomeActive(false)
    setAboutUsActive(false)
    setContactUsActive(false)
    setEnrollNowActive(true)
    localStorage.setItem("activePage","/enrollPage")
  };

  return (
    <header className={` fixed bg-bg backdrop-blur-lg bg-opacity-85 top-0 z-30 w-screen ${requiresPadding} h-8vh pt-4 px-2  sm:px-8 xl:px-10% 2xl:px-20vw`}>
        <nav className=" float-right ">
            <ul className="flex space-x-3 items-center sm:space-x-10 text-sm sm:text-lg whitespace-nowrap">
              <Link to={"/"} onClick={toggleHomeActive}>
                <li  className={`${isHomeActive? "opacity-100":"opacity-50"}  hover:opacity-90`}>Home</li>
              </Link>
              <Link to={"/aboutUs"}  onClick={toggleAboutUsActive}>
                <li className={`${isAboutUsActive? "opacity-100":"opacity-50"}  hover:opacity-90 `}>About us</li>
              </Link>
              <Link to={"/contactUs"} onClick={toggleContactUsActive} >
                <li className={`${isContactUsActive? "opacity-100":"opacity-50"}  hover:opacity-90 `}>Contact us</li>
              </Link>
              <Link to={"/enrollPage"} onClick={toggleEnrollNowActive}>
                <NavHeroBtn styled={isEnrollNowActive} text="Enroll now"/>
              </Link>
            </ul>
          </nav>
    </header>
  )
}


export default Navbar