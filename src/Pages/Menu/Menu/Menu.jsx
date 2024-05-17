import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-cover.jpg'
import useMenu from '../../../hooks/useMenu/useMenu';
import SectionTitle from '../../../componets/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu([])
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Maruf's Kitchen | Menu</title>
            </Helmet>
           
            <div>
                {/* Menu Item Main Cover................. */}
            <Cover img={menuImg}
           title={'our menu'} details={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sit aliquam, dicta accusamus molestias dolorem? Inventore nemo est corrupti delectus!'}>
          </Cover>
           
            <SectionTitle
            subheading={"Don't Miss"}
            heading={'Todays Offer'}
            ></SectionTitle>
            </div>
            {/* ...Offerd Menu..................... */}
            <MenuCategory items={offered}></MenuCategory>

            {/* ............Dessert Menu....................... */}
           <MenuCategory items={dessert} title={'dessert'} img={dessertImg}></MenuCategory>

            {/* ............Salad Menu....................... */}
           <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>

            {/* ............Pizza Menu....................... */}
            <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>

            {/* ............Soup Menu....................... */}
           <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>
           

        </div>
    );
};

export default Menu;