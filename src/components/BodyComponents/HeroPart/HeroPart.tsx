import { Link } from "react-router-dom"
import { PrimaryButton, SecondaryButton } from "../../Buttons"
import {ImageComponent} from "../../ImageComponent"


const HeroPart = () => {
    const setContactUsActive  = () => {
        localStorage.setItem("activePage","/contactUs")
    };
   
  return (
    <section className="relative mb-25vh xmd:mb-5vh mt-3vh">
        <img src="/upperBlob.svg" alt="" className="absolute -top-0% xmd:-top-20% w-80vw -right-20% xmd:-right-5vw"/>
        <img src="/bottomBlob.svg" alt="" className="absolute -top-65% w-80vw -left-30vw"/>
        

        <div className={`grid grid-rows-3 xmd:grid-cols-2 gap-9vh xmd:gap-0 relative z-20   px-2 sm:px-8 lg:px-0 xl:mx-10vw 2xl:mx-10vw` }>
            <div className=" w-70%  xmd:w-auto z-30">
                <h1 className="text-4xl md:text-5xl 2xl:text-6xl w-95% h-10 font-bold opacity-100 tracking-wider" > Just think one day at a time</h1>
            </div>

            <div className=" row-span-2 2xl:h-imageAt3xl z-10 xl:relative overflow-hidden">
                <div className={`absolute overflow-hidden left-25% top-5vh xmd:static xmd:w-100% h-30vh w-80vw brightness-75 rounded-tl-3xl 
                                rounded-bl-3xl object-cover xl:absolute xl:top-0 xl:h-100% xl:left-0% grid grid-cols-4
                                gap-2 lg:gap-3`}>
                    
                    <ImageComponent src="/landingImg1.jpeg" alt="Personal Trainer"/>
                    <ImageComponent src="/landingImg-3.jpeg" alt="Personal Trainer"/>
                    <ImageComponent src="/landingImg-4.webp" alt="Personal Trainer"/>
                    <ImageComponent src="/landingImg2.jpeg" alt="Personal Trainer"/>
                    {/* <img loading="lazy" src="/landingImg1.jpeg" alt="Personal Trainer" className="object-cover h-100%" /> */}
                    {/* <img loading="lazy" src="/landingImg-3.jpeg" alt="Personal Trainer" className="object-cover h-100%" /> */}
                    {/* <img loading="lazy" src="/landingImg-4.webp" alt="Personal Trainer" className="object-cover h-100%" />
                    <img loading="lazy" src="/landingImg2.jpeg" alt="Personal Trainer" className="object-cover h-100%" /> */}
                </div>
            </div>


            <div className="row-span-1 mt-6 xmd:mt-0 xmd:w-95% block xmd:hidden">
                <p className=" text-sm opacity-70 lg:text-lg">
                We stand here for you to fulfill your commitment. We provide you with means but you are your ultimate Guardian  
                </p>
            </div>
            <div className="absolute xmd:static top-50vh left-2vw">
                <div className=" mt-6 xmd:mt-0 xmd:w-95% hidden xmd:block">
                    <p className=" text-sm opacity-70 lg:text-lg">
                    We stand here for you to fulfill your commitment. We provide you with means but you are your ultimate Guardian  
                    </p>
                </div>
                <div className={`mt-8 flex gap-4`}>
                    <PrimaryButton text={"Apply Now"}/>
                    <Link to={"/contactUs"} onClick={setContactUsActive} >
                        <SecondaryButton text="Customer care"/>
                    </Link>
                </div>
            </div>
        </div>
               
    </section>
  )
}

export default HeroPart
