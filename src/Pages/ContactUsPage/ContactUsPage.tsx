import {  useState } from "react"
import { marginForSubTexts, marginForSubTestsHeading } from "../../declaratiionVariables"

const ContactUsPage = () => {

  const [name, setName] =useState("");
  const [email, setEmail] =useState("");
  const [message, setMessage] =useState("");

  const handleSubmit  = (e:React.MouseEvent) => {
    e.preventDefault();
    console.log("name: ",name)
    console.log("email: ",email)
    console.log("message: ",message)
  };

  return (
    <div id="contactPage" className=" py-10vh xmd:py-15vh relative transition-all duration-150">
      <img src="/upperBlob.svg" alt="" className="absolute top-0% xmd:-top-20% w-80vw -right-20% xmd:-right-5vw"/>
      <img src="/bottomBlob.svg" alt="" className="absolute top-65% w-80vw -left-30vw"/>
      <h1 className={`${marginForSubTestsHeading} text-2xl mb-5vh text-orange-400 font-bold`}>Contact us</h1>
      <div className="flex flex-col gap-3vh relative z-20">
        <div className={`${marginForSubTexts} flex gap-2 items-center `}>
          <h1 className={` text-sm xmd:text-lg font-bold opacity-90 tracking-widest`}> Our email:</h1>
            <div className="flex items-center gap-0">
              <p className="opacity-50 text-xs xmd:text-base underline tracking-widest">ourgymisbest@gmail.com</p>
              <img className="opacity-80 h-2 xmd:h-3" src="/forward.svg" alt="forward icon" />
            </div>
        </div>

        <div className={`${marginForSubTexts} flex gap-2 `}>
          <h1 className={` text-sm xmd:text-lg font-bold opacity-90 tracking-widest`}> Tel-Phone:</h1>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-0">
                <p className="opacity-50 text-xs xmd:text-base underline tracking-widest">01-243566</p>
                <img className="opacity-80 h-2 xmd:h-3" src="/forward.svg" alt="forward icon" />
              </div>
              <div className="flex items-center gap-0">
                <p className="opacity-50 text-xs xmd:text-base underline tracking-widest">01-123456</p>
                <img className="opacity-80 h-2 xmd:h-3" src="/forward.svg" alt="forward icon" />
              </div>
            </div>
        </div>

        <div className={`${marginForSubTexts} mt-8`}>
          <h1 className={` text-sm xmd:text-lg font-bold opacity-90 tracking-widest`}> Direct message:</h1>
            <div className="flex flex-col ">
              <label htmlFor="name">
                <input id="name" value={name} onChange={(e)=>{setName(e.target.value)}} className="mt-4 px-4 py-1 xmd:py-2 bg-transparent border-solid border-2px border-white80 rounded-md w-85vw xmd:w-50vw xl:w-45vw" type="text" placeholder="Your name" />
              </label>
              <label htmlFor="email">
                <input id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="mt-8 px-4 py-1 xmd:py-2 bg-transparent border-solid border-2px border-white80 rounded-md w-85vw xmd:w-50vw xl:w-45vw" type="text" placeholder="Your email" />
              </label>
              <p className="opacity-50 text-xs xmd:text-xs mt-8">
                (We will respond to your message within 24 hour)
              </p>
              <label htmlFor="message">
                <textarea id="message" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder="Message" className="mt-2 px-4 py-1 xmd:py-2 bg-transparent border-solid border-2px border-white80 rounded-md h-48 w-85vw xmd:w-50vw xl:w-45vw"></textarea>
              </label>
              <button type="submit" onClick={handleSubmit} className="mt-4 bg-orange-400 text-black font-medium p-2 rounded-sm lg:text-lg lg:px-4 w-20vw max-w-60"  >Send</button>
            </div>
        </div>
        
        <div className={`${marginForSubTexts} gap-2 mt-3vh`}>
            <h1 className={` text-sm xmd:text-lg font-bold opacity-90 tracking-widest`}> Our social media links:</h1>
            <div className="flex flex-col gap-1vh mt-3vh">
              <div className="flex items-center gap-1 xmd:gap-2">
                <img className="h-6" src="/facebook.svg" alt="facebook" />
                <p className="underline opacity-80">facebook</p>
              </div>
              <div className="flex items-center gap-1 xmd:gap-2">
                <img className="h-6" src="/instagram.svg" alt="facebook" />
                <p className="underline opacity-80">instagram</p>
              </div>
              <div className="flex items-center gap-1 xmd:gap-2">
                <img className="h-6" src="/whatsapp.svg" alt="facebook" />
                <p className="underline opacity-80">whatsapp</p>
              </div>
              <div className="flex items-center gap-1 xmd:gap-2">
                <img className="h-6" src="/tiktok.svg" alt="facebook" />
                <p className="underline opacity-80">tiktok</p>
              </div>
            </div>
        </div>

        <div className={`${marginForSubTexts} flex flex-col gap-2 mt-5vh`}>
          <h1 className={` text-sm xmd:text-lg font-bold opacity-90 tracking-widest`}> Our location:</h1>
          <div>
            <iframe className="w-100% h-30vh rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2212.096578259749!2d85.38223478582744!3d27.722667300780063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bb2d1ab9841%3A0x551bdb5ec4ada01c!2sSweat%20and%20Shine%20Fitness%20Zone!5e0!3m2!1sen!2snp!4v1710308399079!5m2!1sen!2snp" width="800" height="600" loading="lazy" ></iframe>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ContactUsPage