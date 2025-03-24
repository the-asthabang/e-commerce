import ProductData from "../../assets/Product.js";
import star from "../../assets/star.png";

const Programs = () => {
    
    
    return (
        <div className="mt-14 mb-12">
            <div className="container mx-auto">
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-md text-primary">Top selling Products for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Product</h1>
                    <p data-aos="fade-up" className="text-lg text-orange-600">Top selling product</p>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 ">
                    {ProductData.map((data)=> (
                        <div
                            data-aos="fade-up"
                            key={data.id}
                            className="space-y-3  dark:bg-amber-900 bg-orange-200 rounded-lg p-5"
                        >
                            <div className="space-y-3">
                                <img
                                    src={data.img}
                                    alt={data.title}
                                    className="h-[220px] hover:scale-105 w-[150px] object-cover rounded-md"
                                />
                                <div className="pt-4">
                                    <h3 className="font-semibold">{data.title}</h3>
                                    <p className="text-sm dark:text-amber-200 text-gray-600">{data.color}</p>
                                    <div className="flex items-center gap-1">
                                        <img src={star} className="h-5" alt="star" />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Programs;