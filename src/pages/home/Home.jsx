import { Helmet } from "react-helmet-async";
import Banner from "../../components/home/Banner";
import GreatOpotunityHome from "../../components/home/GreatOpotunityHome";
import NewsletterHome from "../../components/home/NewsletterHome";
import NextTopBannerProdduct from "../../components/home/NextTopBannerProdduct";
import useUserData from "../../hooks/user/useUserData";
import Loader from "../../shared/loader/Loader";
import CategoryBasedProducts from "./category_bases_products/CategoryBasedProducts";
import DailyBestSales from "./daily_best_sales/DailyBestSales";
import DealsOfTheDay from "./deals_of_the_day/DealsOfTheDay";
import PopularProducts from "./popular_products/PopularProducts";

function Home() {
  const { user, userLoader } = useUserData();
  console.log(user, userLoader);
  if (userLoader) {
    return <Loader></Loader>;
  }
  return (
    <>
      <Helmet>
        <title>FoodTrove - Home</title>
      </Helmet>
      <img src="" alt="" />
      <Banner></Banner>
      <NextTopBannerProdduct></NextTopBannerProdduct>
      <PopularProducts></PopularProducts>
      <DailyBestSales></DailyBestSales>
      <DealsOfTheDay></DealsOfTheDay>
      <CategoryBasedProducts></CategoryBasedProducts>
      <NewsletterHome></NewsletterHome>
      <GreatOpotunityHome></GreatOpotunityHome>
    </>
  );
}

export default Home;
