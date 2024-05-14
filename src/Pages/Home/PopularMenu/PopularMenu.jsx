import { useEffect, useState } from "react";
import SectionTitle from "../../../componets/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)})
    }, [])


    return (
        <section>
            <SectionTitle
                subheading="Popular Items"
                heading="Popular Menu"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 mb-4">
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;