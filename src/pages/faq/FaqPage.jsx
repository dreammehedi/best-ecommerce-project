import img from '../../assets/about.png';
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: "What Facilities Does Your Hotel Have?",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.`,
        },
        
        {
            title: "How Do I Book A Room For My Vacation?",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.`,
        },
        {
            title: "How We are best among others?",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.`,
        },
        {
            title: "Is There Any Fitness Center In Your Hotel?",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.`,
        },
        {
            title: "What Type Of Room Service Do You Offer?",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.`,
        },
        {
            title: "What Facilities Does Your Hotel Have?",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.`,
        },
        {
            title: "How Do I Book A Room For My Vacation?",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.`,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    // titleTextColor: "blue",
    // rowTitleColor: "blue",
    rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};
const FaqPage = () => {
    return (
        <div className="flex flex-col my-20 lg:flex-row gap-10 container justify-between items-center">
            <div className='w-full lg:w-1/2'>
                <img className='mx-auto w-full ' src={img} alt="" />
            </div>
            <div className='w-full space-y-2 lg:w-1/2'>
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
        </div>
    );
};

export default FaqPage;