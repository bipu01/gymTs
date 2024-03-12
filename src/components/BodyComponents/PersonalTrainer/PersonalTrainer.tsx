import { bodyProp } from "../../../declaration"
import { PrimaryButton } from "../../Buttons"
import TrainerCard from "../../Cards/TrainerCards"
import { requiresMargin, requiresPadding } from "../../../declaratiionVariables"


const PersonalTrainer = (prop:bodyProp) => {

  return (
        <section className="relative  mt-10">
            <img src="/upperBlob.svg" alt="" className="absolute -top-0% xmd:-top-20% w-80vw -right-20% xmd:-right-5vw"/>
            <img src="/bottomBlob.svg" alt="" className="absolute -top-65% w-80vw -left-30vw"/>
            
            <div className="grid grid-rows-3 xmd:grid-rows-2 z-10">

                <div className={`row-span-2 grid grid-rows-4 xmd:grid-rows-3 xmd:grid-cols-2 md:h-96 ${requiresMargin} ` }>
                    <div className="">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-20% h-10 font-bold opacity-90" > {prop.heading}
                            <div className="text-orange-400 ">
                                {prop.highlitedText}
                            </div>
                        </h1>
                    </div>
                    <div className="row-span-2 xmd:row-span-2 overflow-hidden 2xl:h-imageAt3xl z-10 xl:relative xl:overflow-visible">
                        <img src="/personalTrainer.png" alt="Personal Trainer" className="object-cover xl:absolute xl:h-96 rounded-sm" />
                    </div>
                    <div className=" mt-4 xmd:mt-0 ">
                        <p className=" text-sm opacity-70 lg:text-lg">
                            {prop.paragraph}
                        </p>
                    </div>
                </div>
                <div className={` bg-secondary border-solid border-secondary border-y-2 mt-4 w-100vw z-10 ${requiresPadding}`}>
                    <h3 className=" text-xl">{prop.trainerTitle}</h3>
                    <div className=" w-100% overflow-x-scroll mt-4">
                        <div id="coachCards" className=" flex h-100% gap-8 mt-2">
                            <TrainerCard name={prop.trainerName} availability={prop.trainerAvailability} image={prop.trainerImage} age={prop.trainerAge} ph={prop.trainerPh}/>
                            <TrainerCard name={"Smiti Bishwokarma"} availability={{from:"1pm", to:"5pm"}} image={"/trainer2.png"} age={26} ph={9812345678}/>
                            {/* <TrainerCard name={"Smiti Bishwokarma"} availability={{from:"1pm", to:"5pm"}} image={"/trainer3.jpg"} age={26} ph={9812345678}/> */}
                        </div>
                    </div>
                    <div className="mt-6">
                        <PrimaryButton text={"Book one"}/>
                    </div>
                </div>
            </div>
           
        </section>
  )
}

export default PersonalTrainer