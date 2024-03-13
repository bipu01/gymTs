import { requiresMargin } from "../../declaratiionVariables"
// import { useState } from "react";

const EnrollNow = () => {
  // const [menuHeight, setMenuHeight] = useState("");
  // const [openState, setOpenState] = useState(false);

  const toggleMenu  = (e:React.MouseEvent) => {
    const menu= `${e.currentTarget.id}Menu`;
    console.log(menu)
    const menuPanel= document.getElementById(menu);
    if(menuPanel){
      menuPanel.style.height= menuPanel.style.height === "15rem" ? "0rem" : "15rem";
    }
  };
  return (
    <div className={`${requiresMargin} mb-10vh h-90vh`}>
      <h1 className="text-2xl xmd:3xl mb-5vh text-orange-400 font-bold">Our plans:</h1>
      <div className="flex flex-col border-solid rounded-2xl border-2 border-enrollBorder p-2 py-8 xmd:py-12 xmd:p-10  gap-8 xmd:gap-12 ">
        
        <div>
          <div className="flex items-center">
            <h1 className="text-sm xmd:text-2xl opacity-80 w-16 flex-auto">Monthly</h1>
            <h2 className="text-sm xmd:text-xl opacity-80 w-12 whitespace-nowrap flex-auto">28 days</h2>
            <div className="flex w-32 gap-1 sm:gap-4 flex-auto">
              <h2 className="text-xs xmd:text-xl whitespace-nowrap">NPR 2200 | $15.00</h2>
              <img id="monthlyProgram" onClick={toggleMenu} className="opacity-80 hover:opacity-100 hover:cursor-pointer" src="/rightPointed.svg" alt="rightPointed icon" />
            </div>
          </div>
          <div id="monthlyProgramMenu" className="transition-all duration-150 mt-1 w-100% 2xl:w-80% h-0 border-solid border-1px border-y-divisorLine border-x-transparent bg-menuBg"></div>
        </div>

        <div>
          <div className="flex items-center">
            <h1 className="text-sm xmd:text-2xl opacity-80 w-16 flex-auto">Quarterly</h1>
            <h2 className="text-xs xmd:text-xl opacity-80 w-12 whitespace-nowrap flex-auto">3 months</h2>
            <div className="flex w-32 gap-1 sm:gap-4 flex-auto">
              <h2 className="text-xs xmd:text-xl whitespace-nowrap">NPR 6000 | $40.00</h2>
              <img id="quaterlyProgram"  onClick={toggleMenu} className="opacity-80 hover:opacity-100 hover:cursor-pointer" src="/rightPointed.svg" alt="rightPointed icon" />
            </div>
          </div>
          <div id="quaterlyProgramMenu" className="transition-all duration-150 mt-1 w-100% 2xl:w-80% h-0 border-solid border-1px border-y-divisorLine border-x-transparent bg-menuBg" ></div>
        </div>

        <div>
          <div className="flex items-center">
            <h1 className="text-sm xmd:text-2xl opacity-80 w-16 flex-auto">Semi-annually</h1>
            <h2 className="text-xs xmd:text-xl opacity-80 w-12 whitespace-nowrap flex-auto">6 months</h2>
            <div className="flex w-32 gap-1 sm:gap-4 flex-auto">
              <h2 className="text-xs xmd:text-xl whitespace-nowrap">NPR 12000 | $80.00</h2>
              <img id="semiAnnuallyProgram" onClick={toggleMenu} className="opacity-80 hover:opacity-100 hover:cursor-pointer" src="/rightPointed.svg" alt="rightPointed icon" />
            </div>
          </div>
          <div id="semiAnnuallyProgramMenu" className="transition-all duration-150 mt-1 w-100% 2xl:w-80% h-0 border-solid border-1px border-y-divisorLine border-x-transparent bg-menuBg"></div>
        </div>

        <div>
          <div className="flex items-center">
            <h1 className="text-sm xmd:text-2xl opacity-80 w-16 whitespace-nowrap flex-auto">Annually</h1>
            <h2 className="text-xs xmd:text-xl opacity-80 w-12 whitespace-nowrap flex-auto">12 months</h2>
            <div className="flex w-32 gap-1 sm:gap-4 flex-auto items-center">
              <h2 className="text-xs xmd:text-xl whitespace-nowrap">NPR 24000 | $150.00</h2>
              <img id="yearlyProgram" onClick={toggleMenu} className="opacity-80 hover:opacity-100 hover:cursor-pointer " src="/rightPointed.svg" alt="rightPointed icon" />
            </div>
          </div>
          <div id="yearlyProgramMenu" className="transition-all duration-150 mt-1 w-100% 2xl:w-80% h-0 border-solid border-1px border-y-divisorLine border-x-transparent bg-menuBg"></div>
        </div>

      </div>
    </div>
  )
}

export default EnrollNow