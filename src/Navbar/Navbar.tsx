import { NavHeroBtn } from "../components/Buttons/Button"
import { requiresPadding } from "../declaratiionVariables"

const Navbar = () => {
  return (
    <header className={`py-4 w-screen h-10vh ${requiresPadding}`}>
        <nav className=" float-right ">
            <ul className="flex space-x-3 sm:space-x-10 text-sm sm:text-lg whitespace-nowrap">
                <li><a href="#" className="hover:text-gray-400">Location</a></li>
                <li><a href="#" className="hover:text-gray-400">About us</a></li>
                <li><a href="#" className="hover:text-gray-400">Contact us</a></li>
                <NavHeroBtn text="Join now"/>
            </ul>
          </nav>
    </header>
  )
}

export default Navbar