
const ProgramMenu = () => {
  return (
    <>
      <div className="">
        <p className="opacity-50 text-xs xmd:text-sm mb-2 ">*Your data and images are not distributed and are private</p>
        <input type="text" placeholder="Full name" className="w-95% xmd:w-35% bg-transparent border-2 rounded-sm py-1 px-2 xmd:px-4"/>
      </div>

      <input type="text" placeholder="Ph num" className="w-95% xmd:w-35% bg-transparent border-2 rounded-sm py-1 px-2 xmd:px-4"/>

      <div className="flex items-center">
        <p>Add your Photo:</p>
        <p className="opacity-50 text-xs xmd:text-sm">(*for id card)</p>
      </div>
      <div>
      <label htmlFor="select">
        <input type="file" accept="image/*" id="select"/>
      </label>
      </div>
    </>
  )
}

export default ProgramMenu