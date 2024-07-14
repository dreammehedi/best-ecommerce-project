import { Helmet } from "react-helmet-async";
import Banner from "../../components/home/Banner";
import NextTopBannerProdduct from "../../components/home/NextTopBannerProdduct";
import DailyBestSales from "./daily_best_sales/DailyBestSales";
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
      <DailyBestSales></DailyBestSales>
    </>
  );
}

export default Home;
