import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
    const [isOpen, setIsOpen] = useState(null);
    const dataArr = [{ title: "How do I create an account?", description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.', }, { title: "What is your return policy?", description: "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.", }, { title: "Can I change my shipping address?", description: "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.", }, { title: "Are there any discounts for loyal customers?", description: "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.", }, { title: "Are there any discounts for loyal customers?", description: "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.", }, { title: "Are there any discounts for loyal customers?", description: "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.", }, { title: "Are there any discounts for loyal customers?", description: "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.", },];
    const toggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
    };

    return (
        <>
            <Helmet>
                <title>FoodTrove - Faq</title>
            </Helmet>

            {/* Faq main section  */}
            <section className="py-8 md:py-10 lg:py-14">
                <div className="container flex gap-4 md:gap-6 lg:gap-8">

                    <div>
                        <img src="https://i.ibb.co/4Wt5Gs2/text.png" alt="" />
                    </div>

                    <div className="w-full max-w-[500px] bg-inherit px-2 *:mix-blend-difference dark:bg-inherit">
                        {dataArr.map((PerAccordion, idx) => (
                            <div key={idx} className="border-b border-gray-500/50 py-3">
                                <button onClick={() => toggle(idx)} className="flex h-full w-full justify-between font-poppins font-normal text-base outline-none text-black">
                                    <span>{PerAccordion.title}</span>
                                    <span className="rounded-full p-2">
                                     
                                        {
                                           
                                                isOpen === idx ? <IoIosArrowDown></IoIosArrowDown> : <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
                                           
                                        }


                                    </span>
                                </button>
                                <div className={`grid overflow-hidden text-gray-7a font-poppins transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden pr-4 text-sm">{PerAccordion.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default Faq;
