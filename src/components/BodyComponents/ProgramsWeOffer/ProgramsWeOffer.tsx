import {  pseudoLinesForTime, requiresMargin, requiresPadding } from "../../../declaratiionVariables"
import {  programsWeOfferProps } from "../../../declaration"
import { PrimaryButton } from "../../Buttons"
import TrainerCard from "../../Cards/TrainerCards"


const ProgramsWeOffer = (prop:programsWeOfferProps) => {
  return (
        <section className="relative w-100vw mt-5vh mb-10vh">
            <div className="grid grid-cols-1 grid-rows-3 xmd:grid-rows-5 h-onePage">
                <div className={`row-span-3 xmd:row-span-1 md:row-span-2 xmd:grid xmd:grid-rows-2 xmd:grid-cols-2  ${requiresMargin}`}>
                    <div className="">
                        <h1 className="text-2xl md:text-4xl h-10 font-bold opacity-90" > {prop.heading}
                            <div className="text-orange-400 ">
                                {prop.highlitedText}
                            </div>
                        </h1>
                    </div>
                    <div className=" row-span-3 md:row-span-2 col-span-1 overflow-hidden  2xl:h-imageAt3xl z-10">
                        <img src={prop.heroImg} alt="Personal Trainer" className="object-cover"/>
                    </div>
                    <div className=" mt-4 xmd:mt-0 ">
                        <p className=" text-sm opacity-70 lg:text-lg">
                            {prop.paragraph}
                        </p>
                    </div>
                </div>


                <div className={`bg-secondary border-solid border-y-2 border-secondary mt-4 ${requiresPadding} h-subMenuHeight`}>
                    <div>
                        <h3 className=" text-xl">Weight lifting Time schedule:</h3>
                        <div className="flex gap-8 xmd:gap-14 text-sm xmd:text-lg opacity-50 mt-4 whitespace-nowrap overflow-x-scroll overflow-y-visible" >
                            <div className="relative">
                                Sun-Mon:
                                    <div className= {` text-xs xmd:text-sm ${pseudoLinesForTime}`}>
                                        6:00am-9:00am<br/>
                                        5:00pm-8:00pm
                                    </div>
                            </div>
                            <div className="relative">
                                Tue-Thu:
                                    <div className={` text-xs xmd:text-sm ${pseudoLinesForTime}`}>
                                        6:00am-9:00am<br/>
                                        5:00pm-8:00pm
                                    </div>
                            </div>
                            <div>
                                Fri:
                                    <div  className=" text-xs xmd:text-sm">
                                        6:00am-9:00am<br/>
                                        5:00pm-8:00pm
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-12">
                        <h3 className=" text-xl">Our coaches and Instructors:</h3>
                        <div className=" w-100% overflow-x-scroll mt-4">
                            <div id="coachCards" className=" flex h-100% gap-8 mt-2">
                                <TrainerCard name={prop.trainerName} availability={prop.trainerAvailability} image={prop.trainerImage} age={prop.trainerAge} ph={prop.trainerPh}/>
                                <TrainerCard name={"Ravi Acharya"} availability={{from:"5am", to:"9am"}} image={"/trainer1.jpeg"} age={32} ph={9812345678}/>
                                {/* <TrainerCard name={"Smiti Bishwokarma"} availability={{from:"1pm", to:"5pm"}} image={"/trainer2.jpg"} age={26} ph={9812345678}/>
                                <TrainerCard name={"Smiti Bishwokarma"} availability={{from:"1pm", to:"5pm"}} image={"/trainer3.jpg"} age={26} ph={9812345678}/> */}
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <PrimaryButton text={prop.btnText}/>
                    </div>
                </div>
            
            </div>
        </section>
  )
}

export default ProgramsWeOffer
