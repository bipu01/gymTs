const Navbar = () => {
  return (
    <header className="py-4 px-12 w-screen h-14">
        <nav className=" float-right">
            <ul className="flex space-x-5 gap-6 sm:space-x-10 text-sm sm:text-lg">
                <li><a href="#" className="hover:text-gray-400">Location</a></li>
                <li><a href="#" className="hover:text-gray-400">About us</a></li>
                <li><a href="#" className="hover:text-gray-400">Contact us</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar