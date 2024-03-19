import {  pseudoLinesForTime, requiresMargin, requiresPadding } from "../../../declaratiionVariables"
import {  programsWeOfferProps } from "../../../declaration"
import { PrimaryButton } from "../../Buttons"
import TrainerCard from "../../Cards/TrainerCards"
import { HeroImageComponent } from "../../ImageComponent"

const ProgramsWeOffer = (prop:programsWeOfferProps) => {
    return (
          <section className="relative mt-10vh xmd:mb-15vh md:mb-25vh 2xl:mb-15vh">
              {/* <div className="absolute">
              </div> */}
                <img src="/upperBlob.svg" alt="" className="absolute -top-15% xmd:-top-10% w-80vw -right-40% xmd:-right-30% "/>
                <img src="/bottomBlob.svg" alt="" className="absolute -top-45% xmd:-top-60% w-70vw -left-30% "/>
                <div className={` xmd:grid xmd:grid-cols-2 grid-rows-2 ${requiresMargin}`}>
                    <div className=" mb-10">
                        <h1 className="text-2xl md:text-4xl font-bold opacity-90 tracking-wide xmd:tracking-widest" > {prop.heading}
                            <div className="text-orange-400 ">
                                {prop.highlitedText}
                            </div>
                        </h1>
                    </div>
                    <div className="row-span-2 col-span-1 max-h-72 xmd:max-h-100vh overflow-hidden z-20 xl:relative xl:overflow-visible">
                        <HeroImageComponent src={prop.heroImg} alt="Hero Image"/>
                    </div>
                    <div className=" mt-4 xmd:mt-0 xmd:w-80%">
                        <p className=" text-sm opacity-70 lg:text-lg">
                            {prop.paragraph}
                        </p>
                    </div>
                </div>
                
              <div className={`relative bg-secondary border-solid border-y-2 border-secondary mt-4 md:mt-10vh w-100vw z-10 ${requiresPadding} `}>
                    <div className="flex gap-2 ">
                        <h3 className=" text-xl">Weight lifting Time schedule:</h3>
                    </div>

                    <div id="timing" className="flex gap-8 xmd:gap-14 text-sm xmd:text-lg opacity-50 mt-4 whitespace-nowrap overflow-x-scroll overflow-y-visible" >
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
                      
                      <div className="mt-12">
                          <h3 className=" text-xl">Our coaches and Instructors:</h3>
                          
                          <div className=" w-100% overflow-x-scroll mt-4">
                              <div id="coachCards" className=" flex h-100% gap-8 mt-2">
                                  <TrainerCard name={prop.trainerName} availability={prop.trainerAvailability} image={prop.trainerImage}/>
                                  <TrainerCard name={"Ravi Acharya"} availability={{from:"5am", to:"9am"}} image={"/trainer1.jpeg"}/>
                                  {/* <TrainerCard name={"Smiti Bishwokarma"} availability={{from:"1pm", to:"5pm"}} image={"/trainer2.jpg"} age={26} ph={9812345678}/>
                                  <TrainerCard name={"Smiti Bishwokarma"} availability={{from:"1pm", to:"5pm"}} image={"/trainer3.jpg"} age={26} ph={9812345678}/> */}
                              </div>
                          </div>
                      </div>
  
                      <div className="mt-6">
                          <PrimaryButton text={prop.btnText}/>
                      </div>
                  </div>
          </section>
    )
  }

// const ProgramsWeOffer = (prop:programsWeOfferProps) => {
//     return (
//           <section className="relative mt-10vh xmd:mt-0 ">
//               {/* <div className="w-40vw h-40vw bg-red-100 backdrop-blur-xl backdrop-blur-3xl opacity-25 absolute right-30% -top-10% z-20">
//                   <h1 className="">Hallo lqeiuhfgalksdjgha</h1>
//               </div> */}
//               <img src="/bottomBlob.svg" alt="" className="absolute -top-15% xmd:-top-10% w-80vw -right-40% xmd:-right-30%"/>
//               <img src="/bottomBlob.svg" alt="" className="absolute -top-45% xmd:-top-60% w-70vw -left-30%"/>
//               <div className="grid grid-rows-2 xmd:grid-rows-4 h-onePage z-10">
//                   <div className={`row-span-1 xmd:row-span-1 xmd:grid xmd:grid-cols-2 ${requiresMargin}`}>
//                       <div className=" mb-10">
//                           <h1 className="text-2xl md:text-4xl font-bold opacity-90" > {prop.heading}
//                               <div className="text-orange-400 ">
//                                   {prop.highlitedText}
//                               </div>
//                           </h1>
//                       </div>
//                       <div className="row-span-2 col-span-1 max-h-72 xmd:max-h-100vh overflow-hidden z-10 xl:relative xl:overflow-visible">
//                           <img src={prop.heroImg} alt="Personal Trainer" className="object-cover xl:absolute xl:h-96 rounded-sm"/>
//                       </div>
//                       <div className=" mt-4 xmd:mt-0 ">
//                           <p className=" text-sm opacity-70 lg:text-lg">
//                               {prop.paragraph}
//                           </p>
//                       </div>
//                   </div>
  
  
//                   <div className={`xmd:row-span-2 bg-secondary border-solid border-y-2 border-secondary mt-4 w-100vw z-10 ${requiresPadding} `}>
//                       <div>
//                           <h3 className=" text-xl">Weight lifting Time schedule:</h3>
//                           <div className="flex gap-8 xmd:gap-14 text-sm xmd:text-lg opacity-50 mt-4 whitespace-nowrap overflow-x-scroll overflow-y-visible" >
//                               <div className="relative">
//                                   Sun-Mon:
//                                       <div className= {` text-xs xmd:text-sm ${pseudoLinesForTime}`}>
//                                           6:00am-9:00am<br/>
//                                           5:00pm-8:00pm
//                                       </div>
//                               </div>
//                               <div className="relative">
//                                   Tue-Thu:
//                                       <div className={` text-xs xmd:text-sm ${pseudoLinesForTime}`}>
//                                           6:00am-9:00am<br/>
//                                           5:00pm-8:00pm
//                                       </div>
//                               </div>
//                               <div>
//                                   Fri:
//                                       <div  className=" text-xs xmd:text-sm">
//                                           6:00am-9:00am<br/>
//                                           5:00pm-8:00pm
//                                       </div>
//                               </div>
//                           </div>
//                       </div>
                      
//                       <div className="mt-12">
//                           <h3 className=" text-xl">Our coaches and Instructors:</h3>
//                           <div className=" w-100% overflow-x-scroll mt-4">
//                               <div id="coachCards" className=" flex h-100% gap-8 mt-2">
//                                   <TrainerCard name={prop.trainerName} availability={prop.trainerAvailability} image={prop.trainerImage} age={prop.trainerAge} ph={prop.trainerPh}/>
//                                   <TrainerCard name={"Ravi Acharya"} availability={{from:"5am", to:"9am"}} image={"/trainer1.jpeg"} age={32} ph={9812345678}/>
//                                   {/* <TrainerCard name={"Smiti Bishwokarma"} availability={{from:"1pm", to:"5pm"}} image={"/trainer2.jpg"} age={26} ph={9812345678}/>
//                                   <TrainerCard name={"Smiti Bishwokarma"} availability={{from:"1pm", to:"5pm"}} image={"/trainer3.jpg"} age={26} ph={9812345678}/> */}
//                               </div>
//                           </div>
//                       </div>
  
//                       <div className="mt-6">
//                           <PrimaryButton text={prop.btnText}/>
//                       </div>
//                   </div>
              
//               </div>
//           </section>
//     )
//   }


export default ProgramsWeOffer
