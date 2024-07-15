import Faq from "react-faq-component";
import { IoIosArrowDown } from "react-icons/io";
import faqImage from "../../assets/faq-image.png";
import "./faq.css";
const faqData = {
  rows: [
    {
      title: "What Facilities Does Your Hotel Have?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "How Do I Book A Room For My Vacation?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "How Do I Book A Room For My Vacation?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "Is There Any Fitness Center In Your Hotel?",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "What Facilities Does Your Hotel Have?",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "How Do I Book A Room For My Vacation?",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

function FaqPage() {
  const config = {
    animate: true,
    arrowIcon: <IoIosArrowDown></IoIosArrowDown>,
    tabFocus: true,
  };
  const styles = {
    bgColor: "white",
    titleTextColor: "#000000",
    rowContentColor: "#7A7A7A",
    rowContentTextSize: "14px",
    arrowColor: "#000000",
  };
  return (
    <>
      {/* faq */}
      <section className="py-10 md:py-12 lg:py-16">
        {/* faq image and faq content */}
        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-4 md:gap-6 lg:gap-8">
          {/* image */}
          <img
            className="w-ful h-fit object-fill rounded-md"
            src={faqImage}
            alt=""
          />

          {/* faq content */}
          <div className="font-poppins text-base text-black">
            <h1 className="font-bold text-black-21 text-2xl md:text-3xl lg:text-4xl mb-4">
              FAQ
            </h1>
            <Faq data={faqData} styles={styles} config={config} />
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqPage;
