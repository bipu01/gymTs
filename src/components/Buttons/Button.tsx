import { activeBtnProp, textProp } from "../../declaration"

export const PrimaryButton = (prop:textProp) => {
  return (
    <button type="button" className="whitespace-nowrap bg-orange-400 text-black font-medium p-2 rounded-md lg:text-lg lg:px-4"  >{prop.text}</button>
  )
}

export const SecondaryButton = (prop:textProp) => {
  return (
    <button type="button" className="whitespace-nowrap text-orange-400 lg:text-lg border-2 p-2 rounded-full font-medium border-orange-400 opacity-80 hover:opacity-100 lg:px-4">{prop.text}</button>
    )
}
  
export const NavHeroBtn = (prop:activeBtnProp) => {
  return (
      <button type="button" className={`${prop.styled?"bg-gradient-to-br from-activeBtnStart via-activeBtnMid to-activeBtnEnd text-white80":"bg-orange-400 text-black"} font-medium px-2 xmd:px-4 py-1 rounded-3xl lg:text-lg lg:px-4 `} >{prop.text}</button>
  )
}

