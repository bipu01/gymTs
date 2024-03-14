import { requiresMargin } from "../../declaratiionVariables"
import ProgramMenu from "../../components/ProgramMenu";
import {useState } from "react";

const EnrollNow = () => {

  const [isMonthlyOpen, setMonthlyOpen]= useState(false);
  const [isQuarterlyOpen, setQuarterlyOpen]= useState(false);
  const [isSemiAnnuallyOpen, setSemiAnnuallyOpen]= useState(false);
  const [isAnnuallyOpen, setAnnuallyOpen]= useState(false);

  const toggleMonthlyMenu = () => {
    setMonthlyOpen(!isMonthlyOpen)
  };
  const toggleQuarterlyMenu = () => {
    setQuarterlyOpen(!isQuarterlyOpen)
  };
  const toggleSemiAnnuallyMenu = () => {
    setSemiAnnuallyOpen(!isSemiAnnuallyOpen)
  };
  const toggleAnnuallyMenu = () => {
    setAnnuallyOpen(!isAnnuallyOpen)
  };

  return (
    <div className={`${requiresMargin} mb-10vh h-90vh`}>
      <h1 className="text-2xl xmd:3xl mb-5vh text-orange-400 font-bold">Our plans:</h1>
      <div className="flex flex-col border-solid rounded-2xl border-2 border-enrollBorder p-2 py-8 xmd:py-12 xmd:p-10  gap-8 xmd:gap-12 ">
        
        <div id="monthlyProgram">
          <div className="flex items-center">
            <h1 className="text-sm xmd:text-2xl opacity-80 w-16 flex-auto">Monthly</h1>
            <h2 className="text-sm xmd:text-xl opacity-80 w-12 whitespace-nowrap flex-auto">28 days</h2>
            <div className="flex gap-1 sm:gap-4 flex-auto relative ">
              <h2 className="text-xs xmd:text-xl whitespace-nowrap">NPR 2200 | $15.00</h2>
              <img id="monthly" onClick={toggleMonthlyMenu} className="opacity-80 hover:opacity-100 hover:cursor-pointer absolute right-0 float-right" src="/rightPointed.svg" alt="rightPointed icon" />
            </div>
          </div>
          <div id="monthlyProgramMenu" className={`${isMonthlyOpen?'h-60 p-4':'h-0 p-0'} gap-4 overflow-clip menuPanel flex flex-col transition-all duration-150 mt-1 w-100% 2xl:w-80% border-solid border-1px border-y-divisorLine border-x-transparent bg-menuBg`}>
            <ProgramMenu/>
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <h1 className="text-sm xmd:text-2xl opacity-80 w-16 flex-auto">Quarterly</h1>
            <h2 className="text-xs xmd:text-xl opacity-80 w-12 whitespace-nowrap flex-auto">3 months</h2>
            <div className="flex gap-1 sm:gap-4 flex-auto relative">
              <h2 className="text-xs xmd:text-xl whitespace-nowrap">NPR 6000 | $40.00</h2>
              <img id="quaterly"  onClick={toggleQuarterlyMenu} className="absolute right-0 opacity-80 hover:opacity-100 hover:cursor-pointer" src="/rightPointed.svg" alt="rightPointed icon" />
            </div>
          </div>
          <div id="quaterlyProgramMenu" className={`${isQuarterlyOpen?'h-60 p-4':'h-0 p-0 '}  gap-4 overflow-clip menuPanel flex flex-col transition-all duration-150 mt-1 w-100% 2xl:w-80% border-solid border-1px border-y-divisorLine border-x-transparent bg-menuBg`} >
          <ProgramMenu/>
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <h1 className="text-sm xmd:text-2xl opacity-80 w-16 flex-auto">Semi-annually</h1>
            <h2 className="text-xs xmd:text-xl opacity-80 w-12 whitespace-nowrap flex-auto">6 months</h2>
            <div className="relative flex gap-1 sm:gap-4 flex-auto">
              <h2 className="text-xs xmd:text-xl whitespace-nowrap">NPR 12000 | $80.00</h2>
              <img id="semiAnnually" onClick={toggleSemiAnnuallyMenu} className="absolute right-0 opacity-80 hover:opacity-100 hover:cursor-pointer" src="/rightPointed.svg" alt="rightPointed icon" />
            </div>
          </div>
          <div id="semiAnnuallyProgramMenu" className={` ${isSemiAnnuallyOpen?'h-60 p-4':'h-0 p-0'} gap-4 overflow-clip menuPanel flex flex-col transition-all duration-150 mt-1 w-100% 2xl:w-80% border-solid border-1px border-y-divisorLine border-x-transparent bg-menuBg`}>
          <ProgramMenu/>
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <h1 className="text-sm xmd:text-2xl opacity-80 w-16 whitespace-nowrap flex-auto">Annually</h1>
            <h2 className="text-xs xmd:text-xl opacity-80 w-12 whitespace-nowrap flex-auto">12 months</h2>
            <div className="relative flex gap-1 sm:gap-4 flex-auto items-center">
              <h2 className="text-xs xmd:text-xl whitespace-nowrap">NPR 24000 | $150.00</h2>
              <img id="yearly" onClick={toggleAnnuallyMenu} className="absolute right-0 opacity-80 hover:opacity-100 hover:cursor-pointer " src="/rightPointed.svg" alt="rightPointed icon" />
            </div>
          </div>
          <div id="yearlyProgramMenu" className={`${isAnnuallyOpen?'h-60 p-4':'h-0 p-0'} gap-4 overflow-clip menuPanel flex flex-col transition-all duration-150 mt-1 w-100% 2xl:w-80% border-solid border-1px border-y-divisorLine border-x-transparent bg-menuBg`}>
          <ProgramMenu/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default EnrollNow