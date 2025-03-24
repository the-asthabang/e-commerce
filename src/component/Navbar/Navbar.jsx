import { BsCart3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/shopping-bag.png";
import Darkmode from "./Darkmode";
import { MdArrowDropDown } from "react-icons/md";

const Menu = [
  { 
    id:1,
    name:"Home",
    link:"/#"

  },

  {
    id:2,
    name:"top rated",
    link:"/#services"
  },

  {
    id:3,
    name:"kids wear",
    link:"/#",
  },

  {
    id:3,
    name:"mens wear",
    link:"/#", 
  },

  {
    id:4,
    name:"electronics",
    link:"/#",
  },


];

const Dropdownlink = [
  {
    id:1,
    name: "Trending product",
    link:"/#",
  },

  {
    id:2,
    name: "Best Selling",
    link:"/#",
  },

  {
    id:3,
    name: "Top rated",
    link:"/#",
  },
]
const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-slate-800  dark:text-white justify-around duration-200 relative z-40 ">

      <div className="bg-yellow-200 py-1 flex justify-around dark:bg-amber-900 dark:text-white items-center ">
        <div className=" px-4 items-center justify-center container flex w-1/2">
              <img src={logo} className="h-9"></img>
              <p className="py-5 px-2 text-3xl font-logo font-bold text-red-900 dark:text-amber-200 ">CartCraze</p>  
        </div>
        <div className="flex justify-items-center items-center  gap-1 px-3 w-1/2 ">
          <div className="flex mx-auto">
            <div className="relative group hidden md:block">
              <input type="text" placeholder="Search" className="w-{200px} sm:w-{200px} group-hover:w-[300px] transition-all md:text-xl duration-300  rounded-full text-black border-gray-900 px-4 py-1 focus:outline-none focus:border-1  focus:border-orange-400 dark:border-gray-600 dark:text-white dark:bg-gray-800"/>
              <CiSearch  className="text-gray-900 group-hover:text-orange-950  dark:text-white text-xl absolute top-1/2 -translate-y-1/2 right-3"/>
            </div>
        
            <button onClick={() => alert("ordering not available yet")}className="bg-gradient-to-r from-red-300 to-orange-800  dark:bg-gradient-to-r dark:from-white dark:to-yellow-600 dark:text-black transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
               <span className="group-hover:block hidden transition-all duration-200 ">
              order
            </span>
             <BsCart3 className=" px-1 text-3xl font-bold drop-shadow-sm cursor-pointer"/>
           </button>
           <Darkmode/>
         </div>
       </div>
      </div>
      <div className="justify-center flex py-2">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
              <li key= {data.id}>
               <a href= {data.link} className="inline-block px-4 sm:font-light hover:text-orange-600 lg:font-semibold  duration-200">{data.name}
                 
               </a>
              </li>))
           }

           <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] sm:font-light lg:font-semibold md:py-1 py-2">
              Trending Products
              <span>
              <MdArrowDropDown className="transition-all duration-200 group-hover:rotate-180"/>
              </span>
            </a>
            <div className="absolute  z-[9999] hidden group-hover:block w-[150px] rounded-md bg-zinc-300 p-2 text-black">
              <ul>
                {Dropdownlink.map((data)=>(
                  <li key={data.id}>
                    <a href={data.link} className="inline-block font-semibold w-full text-center rounded-lg p-2 hover:bg-orange-600">
                      {data.name}
                    </a>

                  </li>
                )) }
              </ul> 
            </div>
           </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
