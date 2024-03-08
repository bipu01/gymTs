export const PrimaryButton = (p) => {
  return (
    <button type="button" className="bg-orange-400 text-black font-medium p-2 rounded-sm lg:text-lg lg:px-4">{p.text}</button>
  )
}

export const SecondaryButton = (p) => {
  return (
    <button type="button" className="text-orange-400 lg:text-lg">{p.text}</button>
  )
}
