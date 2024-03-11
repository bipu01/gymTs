import GetYourPersonalTrainer from "../components/BodyComponents/GetYourPersonalTrainer"
// import InvestInYourFitness from "../components/BodyComponents/InvestInYourFitness"

const Body = () => {
    // let paragraphStyles = "";

  return (
    <div className="pb-10">
        {/* <InvestInYourFitness paragraph={`Investing in your fitness is an investment in your overall well-being. healthy
                        body and mind can help you achieve your goals and live a fulfilling life. Our dedicated team
                        of professionals is here to guide you on your fitness journey, providing personalized
                        support and motivation every step of the way.`}

                        heading={`Invest in Your Fitness`}
        /> */}
        <GetYourPersonalTrainer paragraph={`Allow us to find the best in you. Give yourself a treat you deserve. Healthy body
                        looks and feels different. When you treat yourself right, you see your complete self.`}
                        heading="Get your" highlitedText="personal trainer"
        />



    </div>
    )
}

export default Body