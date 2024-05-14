import SectionTitle from "../../../componets/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed pt-4 my-8 ">
            <SectionTitle 
                subheading="check it out"
                heading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-10 px-16">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-12 p-6 text-white bg-black bg-opacity-10">
                    <p>May 15, 2024</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit dolores tenetur nam saepe totam autem aperiam facere voluptate accusamus assumenda, cum iure sint non fuga, exercitationem quidem tempora. Iste, dicta.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum cum quidem dolor, quas atque maxime officia doloribus perspiciatis modi consectetur voluptas accusamus eius mollitia cumque, rem et dolore commodi provident?
                    </p>
                    <button className="btn btn-outline border-white text-white mt-4 border-0 border-b-4 ">Order Now</button>

                </div>
            </div>
        </div>
    );
};

export default Featured;