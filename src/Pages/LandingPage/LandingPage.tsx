import PersonalTrainer from "../../components/BodyComponents/PersonalTrainer"
import ProgramsWeOffer from "../../components/BodyComponents/ProgramsWeOffer"

import { requiresMargin } from "../../declaratiionVariables"

const LandingPage = () => {
  return (
    <section className="py-10vh">
        {/* For Personal trainer */}
        <PersonalTrainer    heading="Get your" 
                        highlitedText="personal trainer"
                        paragraph={`Allow us to find the best in you. Give yourself a treat you deserve. Healthy body
                                    looks and feels different. When you treat yourself right, you see your complete self.`}
                        trainerTitle="Our personal trainers:"
                        trainerName="Ravi Acharya"
                        trainerAvailability={{from:"6am",to:"9am"}}
                        trainerImage="/trainer1.jpeg"
                        trainerAge={32}
                        trainerPh={9841235454}
                        btnText="Book one"
        />
        
        {/* For courses we offer */}
        <h1 className={`text-3xl xmd:text-4xl ${requiresMargin} mt-15vh mb-10vh `}>Programs we offer:</h1>

        <ProgramsWeOffer    heading="1. Weight lifting"
                        paragraph="Allow us to find the best in you. Give yourself a treat you deserve.  Healthy body looks and feels different. When you treat yourself right, you see your complete self"
                        heroImg="/weightLifting.png"

                        trainerTitle="Our Instructors:"
                        trainerName="Aakriti Bishwokarma"
                        trainerAvailability={{from:"5am", to:"5pm"}}
                        trainerAge={28}
                        trainerImage="/trainer2.png"
                        trainerPh={98876532144}
                        btnText="Schedule time"

        />
        <ProgramsWeOffer    heading="2. Cardio"
                        paragraph="Allow us to find the best in you. Give yourself a treat you deserve.  Healthy body looks and feels different. When you treat yourself right, you see your complete self"
                        heroImg="/cardio.png"

                        trainerTitle="Our Instructors:"
                        trainerName="Aakriti Bishwokarma"
                        trainerAvailability={{from:"5am", to:"5pm"}}
                        trainerAge={28}
                        trainerImage="/trainer2.png"
                        trainerPh={98876532144}
                        btnText="Schedule time"

        />
        <ProgramsWeOffer    heading="3. Our Jumba sessions"
                        paragraph="Allow us to find the best in you. Give yourself a treat you deserve.  Healthy body looks and feels different. When you treat yourself right, you see your complete self"
                        heroImg="/jumba.png"

                        trainerTitle="Our Instructors:"
                        trainerName="Aakriti Bishwokarma"
                        trainerAvailability={{from:"5am", to:"5pm"}}
                        trainerAge={28}
                        trainerImage="/trainer2.png"
                        trainerPh={98876532144}
                        btnText="Schedule time"

        />
        <div id="mapOnLanding" className={`relative z-10 w-100% xl:w-80vw 2xl:w-60vw h-45vh mt-15vh xmd:mt-0 overflow-hidden flex flex-col gap-4 ${requiresMargin} `}>
          <h3 className=" font-bold text-xl">Find us here:</h3>
          <div>
            <iframe className="w-100% h-30vh" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2212.096578259749!2d85.38223478582744!3d27.722667300780063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bb2d1ab9841%3A0x551bdb5ec4ada01c!2sSweat%20and%20Shine%20Fitness%20Zone!5e0!3m2!1sen!2snp!4v1710308399079!5m2!1sen!2snp" width="800" height="600" loading="lazy" ></iframe>
          </div>
        </div>
</section>
  )
}

export default LandingPage