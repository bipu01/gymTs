import { NavHeroBtn } from "../components/Buttons/Button"
import { requiresPadding } from "../declaratiionVariables"

const Navbar = () => {
  return (
    <header className={`relative z-30 w-screen ${requiresPadding} h-10vh pt-4 px-2  sm:px-8 xl:px-10% 2xl:px-20vw`}>
        <nav className=" float-right ">
            <ul className="flex space-x-3 sm:space-x-10 text-sm sm:text-lg whitespace-nowrap">
                <li className="opacity-50 hover:opacity-100 active:opacity-100"><a href="/" >Home</a></li>
                <li className="opacity-50 hover:opacity-100 active:opacity-100"><a href="#" >About us</a></li>
                <li className="opacity-50 hover:opacity-100 active:opacity-100"><a href="#">Contact us</a></li>
                <NavHeroBtn text="Enroll now"/>
            </ul>
          </nav>
    </header>
  )
}


export default Navbar