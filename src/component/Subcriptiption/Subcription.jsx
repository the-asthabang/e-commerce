
import Banner from "../../assets/pawel-czerwinski-g4kathGT8ko-unsplash.jpg"

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition:"center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",
}
const Subcription = () => {
  return (
    <div data-aos="zoom-in" className='bg-gradient-to-r from-orange-900 to-orange-400 mb-20 dark:bg-gray-800 text-white 'style={BannerImg}>
      <div className=" backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto ">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibolds ">Get notification about new products</h1>
          <div className=" flex gap-2 ">
            <input 
             data-aos="fade-up"
             type="text"
             placeholder="Enter your e-mail"
             className="w-full p-3 outline-none rounded-lg"
            />
            <button data-aos="fade-up" className="p-2 px-4 bg-red-700 dark:bg-amber-900 dark:text-white rounded-lg">submit</button>
         </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Subcription
