import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Phone from "../Phone/Phone";
import PopularMenu from "../PopularMenu/PopularMenu";
import Some from "../Some/Some";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Maruf's Kitchen | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Some></Some>
            <PopularMenu></PopularMenu>
            <Phone></Phone>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;