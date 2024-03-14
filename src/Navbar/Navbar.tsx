import { useState } from "react"
import { NavHeroBtn } from "../components/Buttons/Button"
import { requiresPadding } from "../declaratiionVariables"
import { Link } from "react-router-dom";

const Navbar = () => {
 const [isHomeActive, setHomeActive] =useState(true);
 const [isAboutUsActive, setAboutUsActive] =useState(false);
 const [isContactUsActive, setContactUsActive] =useState(false);
 const [isEnrollNowActive, setEnrollNowActive] =useState(false);

  const toggleHomeActive  = () => {
    setHomeActive(true)
    setAboutUsActive(false)
    setContactUsActive(false)
    setEnrollNowActive(false)
  };
  const toggleAboutUsActive  = () => {
    setHomeActive(false)
    setAboutUsActive(true)
    setContactUsActive(false)
    setEnrollNowActive(false)
  };
  const toggleContactUsActive  = () => {
    setHomeActive(false)
    setAboutUsActive(false)
    setContactUsActive(true)
    setEnrollNowActive(false)
  };
  
  const toggleEnrollNowActive  = () => {
    setHomeActive(false)
    setAboutUsActive(false)
    setContactUsActive(false)
    setEnrollNowActive(true)
  };


  return (
    <header className={` fixed bg-bg backdrop-blur-lg bg-opacity-85 top-0 z-30 w-screen ${requiresPadding} h-8vh pt-4 px-2  sm:px-8 xl:px-10% 2xl:px-20vw`}>
        <nav className=" float-right ">
            <ul className="flex space-x-3 sm:space-x-10 text-sm sm:text-lg whitespace-nowrap">
              <Link to={"/"}>
                <li onClick={toggleHomeActive} className={`${isHomeActive? "opacity-100":"opacity-50"}  hover:opacity-90`}>Home</li>
              </Link>
              <Link to={"/aboutUs"}>
                <li onClick={toggleAboutUsActive} className={`${isAboutUsActive? "opacity-100":"opacity-50"}  hover:opacity-90 `}>About us</li>
              </Link>
              <Link to={"/contactUs"}>
                <li onClick={toggleContactUsActive} className={`${isContactUsActive? "opacity-100":"opacity-50"}  hover:opacity-90 `}>Contact us</li>
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