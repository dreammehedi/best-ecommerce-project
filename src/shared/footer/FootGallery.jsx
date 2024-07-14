import food1 from "../../assets/foot_gallery/food1.avif";
import food2 from "../../assets/foot_gallery/food2.avif";
import food3 from "../../assets/foot_gallery/food3.jpg";
import food4 from "../../assets/foot_gallery/food4.avif";
import food5 from "../../assets/foot_gallery/food5.jpg";
const footGalleryData = [food1, food2, food3, food4, food5];

function FootGallery() {
  return (
    <>
      <div className="flex flex-wrap justify-start items-center gap-4 md:gap-6 lg:gap-8">
        {footGalleryData?.map((gallery, ind) => {
          return (
            <div key={ind}>
              <img
                src={gallery}
                alt={`gallery ${ind} `}
                className="object-cover w-20 h-20 rounded-md"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FootGallery;
