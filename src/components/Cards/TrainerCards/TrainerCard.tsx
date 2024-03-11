import { trainerCardProp } from "../../../declaration"


const TrainerCard = (prop:trainerCardProp) => {
  return (
    <div className=" flex min-w-75% xmd:min-w-80 h-60% xmd:h-55% xmd:grid xmd:grid-cols-3 p-1 bg-white bg-opacity-80 rounded-lg text-black ">
        <div className=" overflow-hidden w-30% xmd:w-24 aspect-square rounded-lg grow-0" >
            <img src={prop.image} alt="trainer img" className="object-cover" />
        </div>
        <div className="col-span-2 ml-2 text-xs">
            <h4 className="text-md xmd:text-lg opacity-80 font-bold">{prop.name}</h4>
            <p className="opacity-60">{prop.age} years old</p>
            <p className="opacity-60">Time: {prop.availability.from}-{prop.availability.to} </p>
            <p className="opacity-60">Ph: {prop.ph} </p>
        </div>
    </div>
  )
}

export default TrainerCard