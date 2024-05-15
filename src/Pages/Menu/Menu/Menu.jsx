import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-cover.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Maruf's Kitchen | Menu</title>
            </Helmet>
           
            <div>
            <Cover img={menuImg} title={'our menu'} details={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sit aliquam, dicta accusamus molestias dolorem? Inventore nemo est corrupti delectus!'}></Cover>
        
            </div>
           
        </div>
    );
};

export default Menu;