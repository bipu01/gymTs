import { marginForEnrollPrograms, marginForSubTestsHeading } from "../../declaratiionVariables"
import ProgramMenu from "../../components/ProgramMenu";
import {useEffect, useState } from "react";

const EnrollNow = () => {
  const menuOptions ={
    Open:false,
    isIconRotated:false
  }

  const [monthly, setMonthly]= useState(menuOptions);
  const [quarterly, setQuarterly]= useState(menuOptions);
  const [semiAnnually, setSemiAnnually]= useState(menuOptions);
  const [annually, setAnnually]= useState(menuOptions);

  useEffect(()=>{
    setMonthly({Open:true, isIconRotated:true})
  },[])

  const toggleMonthlyMenu = (e:React.MouseEvent) => {
    setMonthly((prev)=>({
      Open:!prev.Open,
      isIconRotated:!prev.isIconRotated
    }))
    rotateIcon(`${e.currentTarget.id}Icon`, monthly.isIconRotated)
  };
  const toggleQuarterlyMenu = (e:React.MouseEvent) => {
    setQuarterly((prev)=>({
      Open:!prev.Open,
      isIconRotated:!prev.isIconRotated
    }))
    rotateIcon(`${e.currentTarget.id}Icon`, quarterly.isIconRotated)
  };
  const toggleSemiAnnuallyMenu = (e:React.MouseEvent) => {
    setSemiAnnually((prev)=>({
      Open:!prev.Open,
      isIconRotated:!prev.isIconRotated
    }))
    rotateIcon(`${e.currentTarget.id}Icon`, semiAnnually.isIconRotated)
  };
  const toggleAnnuallyMenu = (e:React.MouseEvent) => {
    setAnnually((prev)=>({
      Open:!prev.Open,
      isIconRotated:!prev.isIconRotated
    }))
    rotateIcon(`${e.currentTarget.id}Icon`, annually.isIconRotated)
  };

  const rotateIcon  = (id:string, isIconRotated:boolean) => {
    const icon= document.getElementById(id);
    console.log(icon)
    if(icon){
      icon.classList.remove(isIconRotated? "rotate-[90deg]":"rotate-[0deg]")
      icon.classList.add(isIconRotated?"rotate-[0deg]":"rotate-[90deg]")
    }
  };

  return (
    <div className={` pb-20vh h-100vh overflow-y-auto overflow-x-hidden pt-15vh relative`}>
      <img src="/upperBlob.svg" alt="" className="absolute top-0% xmd:-top-20% w-80vw -right-20% xmd:-right-5vw"/>
      <img src="/bottomBlob.svg" alt="" className="absolute top-65% w-80vw -left-30vw"/>
            
      <h1 className={`${marginForSubTestsHeading} text-2xl  mb-5vh text-orange-400 font-bold`}>Our plans:</h1>
      <div className={`${marginForEnrollPrograms} relative z-10 flex flex-col border-solid rounded-2xl border-2 border-white50 p-8 py-8 xmd:py-12 xmd:px-10 gap-8 xmd:gap-12 `}>
        
        <div id="monthly">
          <div className="flex items-center cursor-pointer"  onClick={toggleMonthlyMenu}>
            <h1 className="text-sm xmd:text-2xl opacity-80 w-16 flex-auto">Monthly</h1>
            <h2 className={`text-sm xmd:text-xl w-12 whitespace-nowrap flex-auto ${monthly.Open?"opacity-80":"opacity-50"}`}>28 days</h2>
            <div className="flex gap-1 sm:gap-4 flex-auto relative ">
              <h2 className={`text-xs xmd:text-xl whitespace-nowrap ${monthly.Open?"opacity-80":"opacity-50"}`}>NPR 2200 | $15.00</h2>
              <img id="monthlyIcon" className="opacity-80 rotate-[90deg] transition-all duration-150 hover:opacity-100 hover:cursor-pointer absolute right-0 float-right" src="/rightPointed.svg" alt="rightPointed icon" />
            </div>
          </div>
          <div id="monthlyProgramMenu" className={`${monthly.Open?'h-auto p-4':'h-0 p-0'} gap-4 overflow-clip menuPanel flex flex-col transition-all duration-150 mt-1 w-100% border-solid border-1px border-y-white80 border-x-transparent bg-menuBg`}>
            <ProgramMenu/>
          </div>
        </div>

        <div id="quaterly">
          <div className="flex items-center cursor-pointer"  onClick={toggleQuarterlyMenu}>
            <h1 className="text-sm xmd:text-2xl opacity-80 w-16 flex-auto">Quarterly</h1>
            <h2 className={`text-xs xmd:text-xl w-12 whitespace-nowrap flex-auto ${quarterly.Open?"opacity-80":"opacity-50"}`}>3 months</h2>
            <div className="flex gap-1 sm:gap-4 flex-auto relative">
              <h2 className={`text-xs xmd:text-xl whitespace-nowrap ${quarterly.Open?"opacity-80":"opacity-50"} `}>NPR 6000 | $40.00</h2>
              <img id="quaterlyIcon"  className="absolute right-0 opacity-80 hover:opacity-100 hover:cursor-pointer  transition-all duration-150" src="/rightPointed.svg" alt="rightPointed icon" />
            </div>
          </div>
          <div id="quaterlyProgramMenu" className={`${quarterly.Open?'h-auto p-4':'h-0 p-0 '}  gap-4 overflow-clip menuPanel flex flex-col transition-all duration-150 mt-1 w-100% border-solid border-1px border-y-white80 border-x-transparent bg-menuBg`} >
          <ProgramMenu/>
          </div>
        </div>

        <div id="semiAnnually" >
          <div className="flex items-center cursor-pointer" onClick={toggleSemiAnnuallyMenu}>
            <h1 className="text-sm xmd:text-2xl opacity-80 w-16 flex-auto">Semi-annually</h1>
            <h2 className={`text-xs xmd:text-xl w-12 whitespace-nowrap flex-auto ${semiAnnually.Open?"opacity-80":"opacity-50"}`}>6 months</h2>
            <div className="relative flex gap-1 sm:gap-4 flex-auto">
              <h2 className={`text-xs xmd:text-xl whitespace-nowrap ${semiAnnually.Open?"opacity-80":"opacity-50"} `}>NPR 12000 | $80.00</h2>
              <img id="semiAnnuallyIcon" className="absolute right-0 opacity-80 hover:opacity-100 hover:cursor-pointer transition-all duration-150" src="/rightPointed.svg" alt="rightPointed icon" />
            </div>
          </div>
          <div id="semiAnnuallyProgramMenu" className={` ${semiAnnually.Open?'h-auto p-4':'h-0 p-0'} gap-4 overflow-clip menuPanel flex flex-col transition-all duration-150 mt-1 w-100% border-solid border-1px border-y-white80 border-x-transparent bg-menuBg`}>
          <ProgramMenu/>
          </div>
        </div>

        <div id="annually">
          <div className="flex items-center cursor-pointer"  onClick={toggleAnnuallyMenu}>
            <h1 className="text-sm xmd:text-2xl opacity-80 w-16 whitespace-nowrap flex-auto">Annually</h1>
            <h2 className={`text-xs xmd:text-xl w-12 whitespace-nowrap flex-auto ${annually.Open?"opacity-80":"opacity-50"} `}>12 months</h2>
            <div className="relative flex gap-1 sm:gap-4 flex-auto items-center">
              <h2 className={`text-xs xmd:text-xl whitespace-nowrap ${annually.Open?"opacity-80":"opacity-50"}`}>NPR 24000 | $150.00</h2>
              <img id="annuallyIcon" className="absolute right-0 opacity-80 hover:opacity-100 hover:cursor-pointer transition-all duration-150" src="/rightPointed.svg" alt="rightPointed icon" />
            </div>
          </div>
          <div id="annuallyProgramMenu" className={`${annually.Open?'h-auto p-4':'h-0 p-0'} gap-4 overflow-clip menuPanel flex flex-col transition-all duration-150 mt-1 w-100% border-solid border-1px border-y-white80 border-x-transparent bg-menuBg`}>
          <ProgramMenu/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default EnrollNow