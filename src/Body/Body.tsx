import { PrimaryButton, SecondaryButton } from "../components/Buttons"

const Body = () => {
  return (
    <div className="flex flex-col overflow-auto max-w-7xl lg:mx-15% justify-center">
        <section className="relative md:h-screen ml-4 md:ml-8 overflow-hidden ">
            <div className="">
                <div className="grid grid-cols-2 ">
                    <div className=" col-span-1">
                        <h1 className="font-bold text-5xl md:text-7xl mt-30% lg:mt-15% opacity-80 ">Invest in Your Fitness</h1>
                    </div>
                    <div>
                    <img src="fitness_model.png" alt="Fitness Model" className="absolute -right-10% z-0 bg-cover" />
                    </div>
                </div>
                <div className="">
                    <p className="mt-45% text-sm lg:text-lg xsm:mt-50% md:mt-5% w-95% md:w-60% lg:w-40% opacity-70">Investing in your fitness is an investment in your overall
                        well-being.
                        healthy
                        body and mind can help you achieve your goals and live a fulfilling life. Our dedicated
                        team
                        of professionals is here to guide you on your fitness journey, providing personalized
                        support and motivation every step of the way.
                    </p>
                </div>
            </div>

            <div className="flex gap-4 lg:gap-8 absolute top-50% xsm:top-50% md:top-70% ">
                <PrimaryButton text={"Enroll Now"} />
                <SecondaryButton text={"See more"} />
            </div>
        </section>

        <section className="">
            <div className="">
                <img src="trainer.png" alt="Personal Trainer" className=""/>
                <div className=""></div>
            </div>
            <div className="">
                <h1 className="">Get your <span>personal
                        trainer</span></h1>
                <p className="">Allow us to find the best in you. Give yourself a treat you
                    deserve.
                    Healthy body
                    looks and feels different. When you treat yourself right, you see your complete self.</p>
            </div>
            <PrimaryButton text={"Book one"}/>
        </section>
    </div>
    )
}

export default Body