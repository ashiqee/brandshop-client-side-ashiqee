import Banner from "./Banner";
import BannerTwo from "./Banner/BannerTwo";
import Brands from "./Brands/Brands";
import Products from "./Products/Products";
import Slider from "./Slider";
import MiniBanner from "./miniBanner";

const Home = () => {
  return (
    <div>
      <Slider />
      <MiniBanner />
      <Brands />
      <div className="max-w-screen-2xl mx-auto">
        <Products />
      </div>
      <Banner />
      <BannerTwo />
    </div>
  );
};

export default Home;
