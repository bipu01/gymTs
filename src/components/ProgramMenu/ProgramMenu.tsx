import {SecondaryButton } from "../Buttons"

const ProgramMenu = () => {
  // const inputFile= document.getElementById("inputFile");
  const imgPreview = document.getElementById("img-preview")
  
  const handleChange  = (e:React.ChangeEvent<HTMLInputElement>) => {
    const inputFile= e.currentTarget;
    if(inputFile.files && inputFile.files[0]){

      const imageSrc= URL.createObjectURL(inputFile.files[0])
      if(imgPreview){
        imgPreview.style.backgroundImage = `url(${imageSrc})`;
        (imgPreview.firstChild as HTMLDivElement ).style.visibility= "hidden";
      }
    }

    // console.log(inputFile?.files?.[0].name)
  };

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
        
        <div className="w-95% xmd:w-35%">
          <label htmlFor="inputFile" className="cursor-pointer">
            <input type="file" accept="image/*" id="inputFile" className="" onChange={handleChange} hidden/>
            <div id="img-preview" className=" bg-[url('/imgPlaceholder.png')] border-dashed border-2 mb-4 rounded-xl h-32 p-4 bg-cover">
              <p className="opacity-80">Drag and drop here or browse</p>
            </div>

            <SecondaryButton text="Checkout" />
          </label>
        </div>
      </div>
    </>
  )
}

export default ProgramMenu