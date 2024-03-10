import { PrimaryButton, SecondaryButton } from "../components/Buttons"

const Body = () => {
    // let paragraphStyles = "";

  return (
    <div className="pb-10">
        <section className="relative lg:mx-10vw px-2 sm:px-8  h-85vh overflow-x-hidden overflow-y-hidden">
            <div className="">
                <div className="">
                    <img src="/fitness_model.png" alt="Fitness Model" className="absolute -right-5vw lg:left-20vw xl:left-25vw  z-0" />
                </div>
                <div className="grid grid-cols-2 grid-rows-2 relative overflow-hidden h-96">
                    <div className="col-span-1">
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
                    <p className=" text-sm lg:text-lg w-95% xmd:w-55% lg:w-40% opacity-70 mt-10">Investing in your fitness is an investment in your overall
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

        <section className="relative  w-100vw px-2 sm:px-8 mt-10 ">
            <div className=" grid grid-rows-4 sm:grid-cols-4 lg:mx-10vw h-80vh ">
                <div className=" sm:col-span-2 sm:row-span-1">
                    <h1 className="text-4xl sm:text-5xl w-80% h-10 font-bold whitespace-nowrap opacity-90" >Get your
                        <div className="text-orange-400 ">
                            personal trainer
                        </div>
                    </h1>
                </div>
                <div className="max-w-imgWidth grid-rows-subgrid row-span-3 sm:max-w-45vw sm:col-span-2 sm:row-span-3 overflow-hidden">
                    <img src="/trainer.png" alt="Personal Trainer" className="bg-cover"/>
                </div>
                <div className="row-span-1 sm:col-span-2 sm:row-span-1 mt-8 sm:mt-0">
                    <p className=" text-sm opacity-70 lg:text-lg w-95% ">Allow us to find the best in you. Give yourself a treat you
                        deserve.
                        Healthy body
                        looks and feels different. When you treat yourself right, you see your complete self.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 xl:float-end">
                    <PrimaryButton text={"Book one"}/>
                </div>
            
            </div>
        </section>
    </div>
    )
}

export default Body