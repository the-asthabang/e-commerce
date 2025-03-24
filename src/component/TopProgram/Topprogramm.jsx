

import star from "../../assets/star.png"
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"

const ProductsData = [
  {
    id: 1,
    img: img1,
    description: "Product 1 description",
    title: "Product 1"
  },
  {
    id: 2,
    img: img2,
    description: "Product 2 description",
    title: "Product 2"
  },
  {
    id: 3,
    img: img3,
    description: "Product 3 description",
    title: "Product 3"
  },
]

const Topprogram = () => {
  return (
    <div className='container mx-auto py-10 dark:bg-gray-900'>
      <div className="text-center mb-24 max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="text-md text-primary">Top Rated products</p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">Best-Product</h1>
        <p data-aos="fade-up" className="text-lg text-orange-600">Top selling product</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-3 place-items-center '>
        {ProductsData.map((data) => (
          <div key={data.id} className='rounded-2xl bg-gray-300 dark:bg-gray-700 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group '>
            <div className="H-[110px] m-12">
              <img src={data.img} alt={data.title} className='max-w-[140px] block mx-auto rounded-md transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
            </div>
            <div className='p-4 text-center'>
              <div className='w-full flex items-center justify-center gap-1'>
                <img src={star} alt="star" className="h-5"/>
                <img src={star} alt="star" className="h-5"/>
                <img src={star} alt="star" className="h-5"/>
                <img src={star} alt="star" className="h-5"/>
              </div>
              <h1 className='text-xl font-bold '>{data.title}</h1>
              <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
              <button className='bg-gray-500 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-gray-900'>ORDER NOW</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Topprogram