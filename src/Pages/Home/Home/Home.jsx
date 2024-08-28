import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Feature from "../Feature/Feature";
import PopularSection from "../PopularSection/PopularSection";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Category></Category>
         <Feature></Feature>
         <PopulerMenu></PopulerMenu>
         <PopularSection></PopularSection>
         <Testimonials></Testimonials>
        </div>
    );
};

export default Home;