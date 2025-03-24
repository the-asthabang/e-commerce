
import footerLogo from "../../assets/shopping-bag.png"
//import Banner from '../../assets/gps.png'

import{
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,

} from "react-icons/fa";

/*const BannerImg = {
    backgroundImage : `url(${Banner})`,
    backgroundPosition : "center",
    backgroundRepeat: "no-repeat",
    backgroundSize : "cover",
    height:"100%",
    width:"100%"

};*/

const FooterLinks = [
    {
        tittle:"Home",
        Link: "/#",
    },
    {
        tittle:"About",
        Link: "/about",
    },
    {
        tittle:"Contact",
        Link: "/contact",
    },
    {
        tittle:"Blog",
        Link: "/Blog",
    },
]
const Footer = () => {
  return (
    <div  className='text-white  bg-gradient-to-r from-orange-900 to-orange-400'>
      <div className='container mx-auto'>
        <div data-aos="zoom-in" className='grid md:grid-cols-3 p-44 pt-5 mx-auto'> 

           <div className='py-8 px-4'>
              <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 items-center gap-3'>
              <img src={footerLogo} alt=""
                 className='max-w-[50px]'/>
                 Shopsy</h1>
              <p>e-commerce</p>
           </div>

           <div className='grid grid-cols-2 sm:grid-cols-3col-span-23 md:pl-11'>
            
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important links</h1>
                    <ul className='flex flex-col gap-3'>
                        {
                            FooterLinks.map((link) => (
                                <li className='cursor-pointer hover:text-orange-600 hover:translate-x-1 duration-300 text-gray-900'
                                key={link.tittle}>
                                 <span>{link.tittle}</span>   
                                </li>

                            ))
                        }

                    </ul>
                </div>
            </div>
            
            <div className="">
                <div className='flex items-center gap-3 mt-6'>
                    <a href="#">
                     <FaInstagram className="text-3xl"/>
                    </a>
                    <a href="#">
                     <FaFacebook className="text-3xl"/>
                    </a>
                    <a href="#">
                     <FaLinkedin className="text-3xl"/>
                    </a>
                    
                </div>
                <div className='mt-6'>
                    <div className='flex items-center gap-3'>
                       <FaLocationArrow/>
                       <p>kolkata,west bengal</p>
                    </div>
                    <div className='flex items-center gap-3 mt-3'>
                        <FaMobileAlt/>
                        <p>+91 8997681094</p>

                    </div>
                </div>
            </div>
            
           </div>
        </div>
      </div>
    
  )
}

export default Footer
