import React,{ useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const Darkmode = () => {
  
    const [Theme , setTheme] = useState(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const element = document.documentElement;
    console.log(element);

    React.useEffect(()=>{
      if(Theme === "dark"){
        element.classList.add("dark");
        localStorage.setItem("Theme","dark")
      } else {
        element.classList.remove("dark");
        localStorage.setItem("theme","light");

      }
    } , [Theme]);
    return (
    <div className="relative">
      <MdOutlineDarkMode  onClick={()=> setTheme(Theme === "light" ? "dark" : "light" )} className={` h-10 text-3xl mx-3 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.3)] transition-all duration-300 absolute right-0 z-10 ${ Theme === "dark"? "hidden" : "block"}`}/>
      <MdDarkMode onClick={()=> setTheme(Theme === "light" ? "dark" : "light" )} className=' h-10 text-3xl mx-3 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.3)] transition-all duration-300 '/>
    </div>
  )
}

export default Darkmode
