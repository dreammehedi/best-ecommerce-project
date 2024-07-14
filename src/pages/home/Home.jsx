import { Helmet } from "react-helmet-async";
import Banner from "../../components/home/Banner";
import NextTopBannerProdduct from "../../components/home/NextTopBannerProdduct";
import DailyBestSeles from "./daily_best_sales/DailyBestSeles";
import PopularProducts from "./popular_products/PopularProducts";

function Home() {
  return (
    <>
      <Helmet>
        <title>FoodTrove - Home</title>
      </Helmet>
      <Banner></Banner>
      <NextTopBannerProdduct></NextTopBannerProdduct>
      <PopularProducts></PopularProducts>
      <DailyBestSeles></DailyBestSeles>
    </>
  );
}

export default Home;
