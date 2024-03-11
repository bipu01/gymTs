import { bodyProp } from "../../../declaration"
import { PrimaryButton, SecondaryButton } from "../../Buttons"

const InvestInYourFitness = (prop:bodyProp) => {
  return (
    <section className="relative lg:mx-10vw px-2 sm:px-8  h-85vh overflow-x-hidden overflow-y-hidden">
            <div className="">
                <div className="">
                    <img src="/fitness_model.png" alt="Fitness Model" className="absolute -right-5vw lg:left-20vw xl:left-25vw  z-0" />
                </div>
                <div className="grid grid-cols-2 grid-rows-2 relative overflow-hidden h-96">
                    <div className="col-span-1">
                        <h1 className="font-bold text-5xl lg:text-6xl  mt-30% lg:mt-15% opacity-80 ">{prop.heading}</h1>
                    </div>
                    <div className=" row-span-2">
                    </div>
                    <div className="flex gap-4 lg:gap-8 absolute top-80% xmd:top-80% lg:top-90% ">
                        <PrimaryButton text={"Enroll Now"} />
                        <SecondaryButton text={"See more"} />
                    </div>
                </div>
              
                <div className="">
                    <p className=" text-sm lg:text-lg w-95% xmd:w-55% lg:w-40% opacity-70 mt-10">
                        {prop.paragraph}
                    </p>
                </div>
            </div>
        </section>
  )
}

export default InvestInYourFitness