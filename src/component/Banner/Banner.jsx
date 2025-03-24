import { MdGppGood } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";


import BannerImg from "../../assets/shoping.jpg"
const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center ite-center py-12 sm:py-0'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
           <div data-aos='zoom-in'>
             <img src={BannerImg}
             alt=""
             className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
             />
           </div>
           <div className='flex flex-col justify-center gap-6 sm:pt-0'>
             <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Winter sale upto 50% off</h1>
             <p  data-aos="fade-up" className='text-xl text-orange-600 tracking-wide leading-5'>Saving-the reason for the season!</p>
             <div className='flex flex-col gap-4'>
               <div data-aos="fade-up" className='flex items-center gap-4 text-lg'>
                  <MdGppGood />
                  <p>Quality products</p>
               </div>

               <div data-aos="fade-up" className='flex items-center gap-4 text-lg'>
                  <FaTruckFast />
                  <p>Fast delivery</p>
               </div>

               <div data-aos="fade-up" className='flex items-center gap-4 text-lg'>
                  <MdPayment />
                  <p>Easy payment method</p>
               </div>

               <div data-aos="fade-up" className='flex items-center gap-4 text-lg'>
                 <MdLocalOffer />
                  <p>Get offer</p>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
