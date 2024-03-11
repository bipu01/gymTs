import { bodyProp } from "../../../declaration"
import { PrimaryButton } from "../../Buttons"
import TrainerCard from "../../Cards/TrainerCards"
import { requiresMargin, requiresPadding } from "../../../declaratiionVariables"


const BodyContent = (prop:bodyProp) => {
  return (
        <section className="relative w-100vw mt-10">
            <div className="grid grid-cols-1 grid-rows-3 xmd:grid-rows-4 h-onePage">
                <div className={`row-span-3 xmd:row-span-2 grid grid-rows-4 xmd:grid-rows-2 xmd:grid-cols-2 md:h-96 ${requiresMargin}`}>
                    <div className="">
                        <h1 className="text-4xl md:text-6xl text-20% h-10 font-bold opacity-90" > {prop.heading}
                            <div className="text-orange-400 ">
                                {prop.highlitedText}
                            </div>
                        </h1>
                    </div>
                    <div className="row-span-3 md:row-span-2 col-span-1 overflow-hidden">
                        <img src="/personalTrainer.png" alt="Personal Trainer" className="bg-cover"/>
                    </div>
                    <div className=" mt-4 xmd:mt-0 ">
                        <p className=" text-sm opacity-70 lg:text-lg">
                            {prop.paragraph}
                        </p>
                    </div>
                </div>
                <div className={` bg-secondary border-solid border-2 border-secondary mt-4 h-64 ${requiresPadding}`}>
                    <h3 className=" text-xl">{prop.trainerTitle}</h3>
                    <div className=" w-100% overflow-x-scroll mt-4">
                        <div id="coachCards" className=" flex h-100% gap-8 mt-2">
                            <TrainerCard name={prop.trainerName} availability={prop.trainerAvailability} image={prop.trainerImage} age={prop.trainerAge} ph={prop.trainerPh}/>
                            {/* <TrainerCard name={"Smiti Bishwokarma"} availability={{from:"1pm", to:"5pm"}} image={"/trainer2.jpg"} age={26} ph={9812345678}/>
                            <TrainerCard name={"Smiti Bishwokarma"} availability={{from:"1pm", to:"5pm"}} image={"/trainer3.jpg"} age={26} ph={9812345678}/> */}
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

export default BodyContent