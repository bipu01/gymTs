import { Link } from "react-router-dom"
import { marginForSubTests, marginForSubTestsHeading } from "../../declaratiionVariables"

const AboutUsPage = () => {
  return (
    <div className="h-100vh pt-15vh relative">
    <img src="/upperBlob.svg" alt="" className="absolute top-0% xmd:-top-20% w-80vw -right-20% xmd:-right-5vw"/>
    <img src="/bottomBlob.svg" alt="" className="absolute top-65% w-80vw -left-30vw"/>
    <div>
    <h1 className={`${marginForSubTestsHeading} text-2xl mb-5vh text-orange-400 font-bold`}>What we are all about?</h1>
      <div className={`${marginForSubTests} my-5vh`}>
        <h1 className={` text-md xmd:text-xl font-bold opacity-90 tracking-widest`}> Flexible Membership Options:</h1>
        <p className={`mt-4 opacity-70 text-xs xmd:text-sm xmd:w-40vw`}>
        Whether you prefer a month-to-month membership or a one-time drop-in session, we offer flexible membership options to suit your lifestyle and budget
        </p>
        <Link to={"/enrollPage"}>
          <div className="flex items-center text-xs xmd:text-sm gap-2">
            <p className=" underline opacity-70 hover:opacity-100">
              View membership plan
            </p>
            <img className="opacity-70 " src="/rightPointed.svg" alt="right Poninted" />
            </div>
        </Link>
      </div>

      <div className={`${marginForSubTests} my-5vh`}>
        <h1 className={` text-md xmd:text-xl font-bold opacity-90 tracking-widest`}> Variety of classes:</h1>
        <p className={`mt-4 opacity-70 text-xs xmd:text-sm xmd:w-40vw`}>
        From high-intensity interval training (HIIT) to yoga and everything in between, our diverse range of classes ensures there's something for everyone, regardless of fitness level or preference.
        </p>
        <Link to={"/enrollPage"}>
          <div className="flex items-center text-xs xmd:text-sm gap-2">
            <p className=" underline opacity-70 hover:opacity-100">
              View membership plan
            </p>
            <img className="opacity-70 " src="/rightPointed.svg" alt="right Poninted" />
            </div>
        </Link>
      </div>

      <div className={`${marginForSubTests} my-5vh`}>
        <h1 className={` text-md xmd:text-xl font-bold opacity-90 tracking-widest`}> Community experience:</h1>
        <p className={`mt-4 opacity-70 text-xs xmd:text-sm xmd:w-40vw`}>
        Join a supportive community of like-minded individuals who motivate and inspire each other to reach new heights in fitness.
        </p>
        <Link to={"/enrollPage"}>
          <div className="flex items-center text-xs xmd:text-sm gap-2">
            <p className=" underline opacity-70 hover:opacity-100">
              Visit out Facebook page
            </p>
            <img className="opacity-70 " src="/rightPointed.svg" alt="right Poninted" />
            </div>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default AboutUsPage
