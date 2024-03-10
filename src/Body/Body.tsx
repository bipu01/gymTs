import { PrimaryButton, SecondaryButton } from "../components/Buttons"

const Body = () => {
    // let paragraphStyles = "";

  return (
    <div className="flex flex-col lg:mx-15vw px-2 sm:px-8 ">
        <section className="relative h-75vh lg:h-onePage overflow-x-hidden overflow-y-hidden">
            <div className="">
                <div className="">
                    <img src="/fitness_model.png" alt="Fitness Model" className="absolute -right-5vw lg:left-20vw xl:left-25vw  z-0" />
                </div>
                <div className="grid grid-cols-2 grid-rows-2 relative overflow-hidden h-96">
                    <div className=" col-span-1">
                        <h1 className="font-bold text-5xl lg:text-6xl  mt-30% lg:mt-15% opacity-80 ">Invest in Your Fitness</h1>
                    </div>
                    <div className=" row-span-2">
                    </div>
                    <div className="flex gap-4 lg:gap-8 absolute top-80% xmd:top-80% lg:top-90% ">
                        <PrimaryButton text={"Enroll Now"} />
                        <SecondaryButton text={"See more"} />
                    </div>
                  
                </div>
              
                <div className="">
                    <p className=" text-sm lg:text-lg w-95% xmd:w-55% lg:w-40% opacity-70">Investing in your fitness is an investment in your overall
                        well-being.
                        healthy
                        body and mind can help you achieve your goals and live a fulfilling life. Our dedicated
                        team
                        of professionals is here to guide you on your fitness journey, providing personalized
                        support and motivation every step of the way.
                    </p>
                </div>
            </div>
        </section>
        <section className="relative mt-8 h-80vh overflow-x-hidden">
            <div className="relative sm:absolute sm:left-55% md:w-40vw md:h-45vw">
                <img src="/trainer.png" alt="Personal Trainer" className="bg-cover sm:aspect-square "/>
                <div className="absolute sm:hidden inset-0 w-full h-100% bg-gradient-to-b  from-slate-900 to-transparent opacity-50"></div>
            </div>
            <div className="sm:w-50%">
                <h1 className="absolute top-5% left-5%  sm:static text-4xl sm:text-5xl w-80% font-bold">Get your <span className="text-orange-400 " >personal
                trainer</span>
                </h1>
                <p className=" text-sm opacity-70 mt-10 lg:text-lg">Allow us to find the best in you. Give yourself a treat you
                    deserve.
                    Healthy body
                    looks and feels different. When you treat yourself right, you see your complete self.</p>
                <div className="absolute top-45% lg:top-55% ">
                    <PrimaryButton text={"Book one"}/>
                </div>
            </div>
           
        </section>
    </div>
    )
}

export default Body