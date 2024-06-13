import { BiCalendarWeek } from "react-icons/bi";
import { FaBars, FaCalendar, FaHome, FaMailBulk, FaPaypal, FaShoppingCart } from "react-icons/fa";
import { FaList, FaShop, FaUser, FaUtensils } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";

import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-yellow-500">
                <ul className="menu p-4">

                  {
                    isAdmin? <>
                      <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink></li>
                    <li><NavLink to="/dashboard/addItems"><FaUtensils></FaUtensils>Add Items</NavLink></li>

                    <li><NavLink to="/dashboard/manageItems"><FaList></FaList>Manage Items</NavLink></li>
                    <li><NavLink to="/dashboard/booking"><FaCalendar></FaCalendar>Manage Booking</NavLink></li>

                    <li><NavLink to="/dashboard/users"><FaUser></FaUser>All User</NavLink></li>
                    
                    </>
                    : <>
                      <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/userHome"><FaCalendar></FaCalendar>Reservation</NavLink></li>

                    <li><NavLink to="/dashboard/userHome"><FaPaypal></FaPaypal> Payment</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>Cart</NavLink></li>

                    <li><NavLink to="/dashboard/userHome"><MdReviews></MdReviews>Add Review</NavLink></li>
                    <li><NavLink to="/dashboard/userHome"><BiCalendarWeek></BiCalendarWeek>Booking</NavLink></li>
                    </>
                  }

                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/order/salad"><FaBars></FaBars>Menu</NavLink></li>
                    <li><NavLink to="/dashboard/userHome"><FaShop></FaShop>Shop</NavLink></li>
                    <li><NavLink to="/dashboard/userHome"><FaMailBulk></FaMailBulk>Contact</NavLink></li>


                </ul>
            </div>
            <div className="flex-1 p-12">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;