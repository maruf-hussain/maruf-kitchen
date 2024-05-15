
import SectionTitle from "../../../componets/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu/useMenu";

const PopularMenu = () => {
const [menu] = useMenu();
const popular = menu.filter(item => item.category === 'popular');


    return (
        <section>
            <SectionTitle
                subheading="Popular Items"
                heading="Popular Menu"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 mb-4">
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
          <div className="text-center">
          <button className="btn btn-outline border-black text-black mt-4 border-0 border-b-4 ">View Full Menu</button>
          </div>
        </section>
    );
};

export default PopularMenu;