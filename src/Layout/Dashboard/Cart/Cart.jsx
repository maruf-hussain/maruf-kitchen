import { FaTrash } from "react-icons/fa6";
import useCarts from "../../../hooks/useCarts/useCarts";
import Swal from "sweetalert2";
import AxiosSecure from "../../../hooks/AxiosSecure/AxiosSecure";

const Cart = () => {
    const [cart,refetch] = useCarts();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const AxiosSecureData = AxiosSecure();

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                AxiosSecureData.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                              title: "Deleted!",
                              text: "Your file has been deleted.",
                              icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>

            <div className="flex justify-evenly">
                <h2>My Cart Total{cart.length}</h2>
                <h2>Total Price:${totalPrice}</h2>
                <button className="btn bg-yellow-500">Pay</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Image Food" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}

                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost  btn-lg"><FaTrash className="text-red-500"></FaTrash></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;