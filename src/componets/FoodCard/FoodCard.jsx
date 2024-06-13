import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import AxiosSecure from "../../hooks/AxiosSecure/AxiosSecure";
import useCarts from "../../hooks/useCarts/useCarts";


const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item;
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const AxiosSecureData = AxiosSecure()
    const [, refetch] = useCarts()

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                price,
                image
            }
            AxiosSecureData.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} Added Succesfully`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                          refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You Are Not Login",
                text: "Please Login Then Add to Cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food" /></figure>
            <p className="bg-black text-yellow-400 absolute right-0 top-4 mr-6 px-2 rounded">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>

                <div className="card-actions justify-center">
                    <button onClick={handleAddToCart} className="btn bg-yellow-500 ">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;