
const Body = () => {
  return (
    <div className=" grid grid-rows md:pl-8 align-middle">
        <section
            className="relative bg-gray-900 max-w-6xl px-8 py-14 h-screen grid  md:grid-cols-2  mx-auto overflow-hidden">
            <div className="block sm:absolute -right-20% md:-right-10% lg:-right-5%">
                <img src="fitness_model.png" alt="Fitness Model" className="rounded-lg mb-8 md:mb-0"/>
            </div>
            
            <div className="md:mt-20 mt-20 w-70% md:w-100% left-5% z-10 absolute sm:static">
                <h1 className="text-4xl sm:text-7xl font-bold mb-4 align-middle">Invest in Your Fitness</h1>
                <p className="mb-8 opacity-70 drop-shadow-3xl">Investing in your fitness is an investment in your overall
                    well-being.
                    healthy
                    body and mind can help you achieve your goals and live a fulfilling life. Our dedicated
                    team
                    of professionals is here to guide you on your fitness journey, providing personalized
                    support and motivation every step of the way.
                </p>
            </div>

            <div className="absolute top-75% left-10 flex space-x-4 text-lg sm:text-2xl text-black ">
                <button className="bg-orange-400 hover:bg-orange-600 py-1 px-2 sm:py-3 sm:px-8 rounded">Enroll Now
                </button>
                <a href="#" className="text-orange-500 hover:text-orange-600">See more</a>
            </div>


        </section>

        <section className="relative max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-8 md:mt-8">
            <div className="relative w-full sm:static">
                <img src="trainer.png" alt="Personal Trainer" className="relative rounded-lg shadow-lg object-cover"/>
                <div
                    className="absolute visible inset-0 bg-gradient-to-b from-black to-transparent opacity-50 md:opacity-0">
                </div>
            </div>
            <div className="absolute w-75% sm:max-w-lg top-10% md:top-40% left-15% md:static ">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4">Get your <span className="text-orange-400 ">personal
                        trainer</span></h1>
                <p className="mb-8 opacity-90 md:opacity-70">Allow us to find the best in you. Give yourself a treat you
                    deserve.
                    Healthy body
                    looks and feels different. When you treat yourself right, you see your complete self.</p>
            </div>
            <button
                className="absolute top-90% left-40% md:left-10 md:top-85% bg-orange-400 hover:bg-orange-600 py-1 px-3 sm:py-3 sm:px-8 rounded text-lg sm:text-2xl text-black ">
                Book one
            </button>
        </section>

    </div>
  )
}

export default Body