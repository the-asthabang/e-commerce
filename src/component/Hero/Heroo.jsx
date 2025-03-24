import img1 from "../../assets/bigsale.png";
import img2 from "../../assets/women.png";
import img3 from "../../assets/family.png";
import img4 from "../../assets/kids.png";
import Slider from "react-slick";

const ImageList = [
    {
        id: 0,
        img: img4,
        title: "Up to 30% off on all kids' wear",
        description: "Delightful collection of kids' wear featuring soft, breathable fabrics that ensure all-day comfort."
    },
    {
        id: 1,
        img: img2,
        title: "Up to 20% off on all women's wear",
        description: "Stunning collection of women's wear designed to bring out your confidence and style."
    },
    {
        id: 2,
        img: img3,
        title: "Up to 50% off on all men's wear",
        description: "Premium collection of men's clothing that blends style, comfort, and functionality. From classic formalwear to casual essentials, our range is designed for every occasion."
    },
    {
        id: 3,
        img: img1,
        title: "Up to 60% off on all products",
        description: "Order now and enjoy amazing deals on your favorite products."
    },
];

const Hero = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className="relative overflow-hidden min-h-[570px] sm:min-h-[650px] bg-white/70 flex justify-center items-center dark:bg-stone-700 dark:text-white duration-200">
            <div className="h-[800px] w-[800px] bg-yellow-700 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-[8]"></div>
            <div className="container pb-8 sm:pb-0">
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div key={data.id}>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 m-9 relative z-10">
                                    <h1 
                                      data-aos="zoom-out"
                                      data-aos-duration="500"
                                      data-aos-once="true"
                                      className="font-semibold md: text-2xl lg:text-5xl">{data.title}
                                    </h1>
                                    <p 
                                      data-aos="fade-up"
                                      data-aos-duration="500"
                                       data-aos-delay="100"
                                      className="md:text-lg text-yellow-950 dark:text-yellow-500 lg:text-2xl">{data.description}
                                    </p>
                                    <div
                                      data-aos="fade-up"
                                      data-aos-duration="500"
                                      data-aos-delay="100"
                                    >
                                        <button className="bg-gradient-to-r from-red-300 to-orange-800 dark:bg-gradient-to-r dark:from-white dark:to-yellow-600 dark:text-black hover:scale-105 duration-200 mx-auto text-white py-2 px-4 rounded-full">
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                <div className="order-1 sm:order-2">
                                    
                                    <div
                                    data-aos = "zoom-in"
                                    data-aos-once="true"
                                    className="relative z-10">
                                        <img src={data.img} alt={data.title} className="w-[370px] h-[450px] sm:h-[450px] sm:scale-125 object-contain mx-auto lg:scale-125" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;