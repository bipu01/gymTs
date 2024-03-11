import { textProp } from "../../declaration"

export const PrimaryButton = (prop:textProp) => {
  return (
    <button type="button" className="bg-orange-400 text-black font-medium p-2 rounded-sm lg:text-lg lg:px-4">{prop.text}</button>
  )
}

export const SecondaryButton = (prop:textProp) => {
  return (
    <button type="button" className="text-orange-400 lg:text-lg">{prop.text}</button>
    )
  }
  
  export const NavHeroBtn = (prop:textProp) => {
    return (
      <button type="button" className="bg-orange-400 text-black font-medium p-2 py-1 rounded-3xl lg:text-lg lg:px-4">{prop.text}</button>
    )
  }
