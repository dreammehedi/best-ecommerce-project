import img from '../../assets/about.png';
import { GiBoxUnpacking } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { TbTruckDelivery } from 'react-icons/tb';
import { RiSecurePaymentFill } from 'react-icons/ri';


const About = () => {
    return (
        <div className='container my-20'>
            <div className="flex gap-10 flex-col-reverse lg:flex-row items-center justify-between">
                <div className='w-full lg:w-1/2'>
                    <h2 className="font-bold text-black-21 text-4xl">About The Carrot</h2>
                    <p className="text-sm text-gray-7a mt-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
                        necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
                        rerum quod. Tempora magni autem a voluptatibus neque.
                    </p>

                    <p className="text-sm text-gray-7a mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae rerum cum
                        accusamus magni consequuntur architecto, ipsum deleniti expedita doloribus
                        suscipit voluptatum eius perferendis amet!.
                    </p>

                    <p className="text-sm text-gray-7a mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maxime amet
                        architecto est exercitationem optio ea maiores corporis beatae, dolores doloribus
                        libero nesciunt qui illum? Voluptates deserunt adipisci voluptatem magni sunt sed
                        blanditiis quod aspernatur! Iusto?
                    </p>
                    <div className="bg-[#E9E9E9] mt-8 grid grid-cols-3 items-center justify-evenly">
                        <div className="text-center p-5">
                            <h2 className="text-gray-7a font-bold text-3xl"><span className="text-orange-f5 text-6xl ">0.1</span>k</h2>
                            <p className='text-black-21'>Vendors</p>
                        </div>
                        <div className="text-center p-5">
                            <h2 className="text-gray-7a font-bold text-3xl"><span className="text-orange-f5 text-6xl ">23</span>k</h2>
                            <p className='text-black-21'>Customers</p>
                        </div>
                        <div className="text-center p-5">
                            <h2 className="text-gray-7a font-bold text-3xl"><span className="text-orange-f5 text-6xl ">2</span>k</h2>
                            <p className='text-black-21'>Products</p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <img className='w-full' src={img} alt="" />

                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 gap-10'>
                <div className='bg-[#E9E9E9] h-44 flex text-center flex-col items-center justify-center'>
                    <GiBoxUnpacking className='text-4xl' />
                    <h3 className='text-black-2b text-lg mt-3 mb-1 font-semibold'>Product Packing</h3>
                    <p className='text-sm font-light text-gray-7a'>Lorem ipsum dolor sit amet,
                        consectetur adipisicing.</p>
                </div>
                <div className='bg-[#E9E9E9] h-44 flex text-center flex-col items-center justify-center'>
                    <BiSupport
                    className='text-4xl' />
                    <h3 className='text-black-2b text-lg mt-3 mb-1 font-semibold'>24X7 Support</h3>
                    <p className='text-sm font-light text-gray-7a'>Lorem ipsum dolor sit amet,
                        consectetur adipisicing.</p>
                </div>
                <div className='bg-[#E9E9E9] h-44 flex text-center flex-col items-center justify-center'>
                    <TbTruckDelivery className='text-4xl' />
                    <h3 className='text-black-2b text-lg mt-3 mb-1 font-semibold'>Delivery in 5 Days</h3>
                    <p className='text-sm font-light text-gray-7a'>Lorem ipsum dolor sit amet,
                        consectetur adipisicing.</p>
                </div>
                <div className='bg-[#E9E9E9] h-44 flex text-center flex-col items-center justify-center'>
                    <RiSecurePaymentFill className='text-4xl' />
                    <h3 className='text-black-2b text-lg mt-3 mb-1 font-semibold'>Payment Secure</h3>
                    <p className='text-sm font-light text-gray-7a'>Lorem ipsum dolor sit amet,
                        consectetur adipisicing.</p>
                </div>
            </div>
        </div>
    );
};

export default About;