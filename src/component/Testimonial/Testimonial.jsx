
import Slider from "react-slick";
import img1 from "../../assets/person1.jpg";
import img2 from "../../assets/person2.jpg";
import img3 from "../../assets/person3.jpg";
import img4 from "../../assets/person4.jpg";
import img5 from "../../assets/person5.jpg";
import img6 from "../../assets/person6.jpg";

const testimonialData = [
    {
        id: 1,
        name: "Sanaya",
        text: "",
        img: img1,
    },
    {
        id: 2,
        name: "Rahul",
        text: "",
        img: img2,
    },
    {
        id: 3,
        name: "Prateek",
        text: "",
        img: img3,
    },
    {
        id: 4,
        name: "Tanya",
        text: "",
        img: img4,
    },
    {
        id: 5,
        name: "Dev",
        text: "",
        img: img5,
    },
    {
        id: 6,
        name: "Chirag",
        text: "",
        img: img6,
    },
];

const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='py-10 mb-10'>
            <div className='container mx-auto'>
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>What your customer are saying</h1>
                    <p data-aos="fade-up" className='text-md text-orange-600'>Testimonial</p>
                </div>
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {testimonialData.map((data) => (
                            <div className='my-6' key={data.id}>
                                <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-600 bg-orange-600/10'>
                                    <div className='mb-4'>
                                        <img src={data.img} alt={data.name} className='rounded-full w-20 h-20' />
                                    </div>
                                    <div className='flex items-center gap-4 flex-col'>
                                        <div className='space-y-3'>
                                            <p className='text-sm text-gray-600'>{data.text}</p>
                                            <h1 className='text-xl font-bold text-black/80 dark:text-white'>{data.name}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;