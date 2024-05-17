import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";



const MenuCategory = ({ items, title, img }) => {



    return (

        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-8 my-20">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mb-8">
            <Link to={`/order/${title}`}> <button className="btn uppercase bg-yellow-500">Order Your Food</button>
            </Link>
            </div>
            

        </div>

    );
};

export default MenuCategory;