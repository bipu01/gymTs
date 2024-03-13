import { trainerCardProp } from "../../../declaration"


const TrainerCard = (prop:trainerCardProp) => {
  return (
    <div className=" flex p-1 pr-3 bg-white bg-opacity-80 rounded-lg text-black ">
        <div className=" flex-auto overflow-hidden w-16 aspect-square rounded-lg" >
            <img src={prop.image} alt="trainer img" className="object-cover" />
        </div>
        <div className=" ml-2 text-xs shrink-0">
            <h4 className="text-md xmd:text-lg opacity-80 font-bold">{prop.name}</h4>
            <p className="opacity-60">Time: {prop.availability.from}-{prop.availability.to} </p>
        </div>
    </div>
  )
}

export default TrainerCard