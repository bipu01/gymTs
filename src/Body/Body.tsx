// import GetYourPersonalTrainer from "../components/BodyComponents/GetYourPersonalTrainer"
import BodyContent from "../components/BodyComponents/GetYourPersonalTrainer/BodyContent"
import ProgramsWeOffer from "../components/BodyComponents/ProgramsWeOffer"
import { requiresMargin } from "../declaratiionVariables"

const Body = () => {
  return (
    <div className="pb-10">
        {/* <InvestInYourFitness paragraph={`Investing in your fitness is an investment in your overall well-being. healthy
                        body and mind can help you achieve your goals and live a fulfilling life. Our dedicated team
                        of professionals is here to guide you on your fitness journey, providing personalized
                        support and motivation every step of the way.`}

                        heading={`Invest in Your Fitness`}
        /> */}

        {/* For Personal trainer */}
        <BodyContent    heading="Get your" 
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
        <h1 className={`text-3xl xmd:text-4xl ${requiresMargin} xmd:mt-5vh mb-0 `}>Programs we offer:</h1>

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


    </div>
    )
}

export default Body