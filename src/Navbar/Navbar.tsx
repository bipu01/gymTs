const Navbar = () => {
  return (
    <header className="py-4 w-screen h-10vh  lg:px-15vw px-2 sm:px-8">
        <nav className=" float-right  sm:mx-4 mx-15vw ">
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