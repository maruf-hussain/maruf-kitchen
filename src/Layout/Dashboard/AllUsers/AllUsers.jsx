import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../../hooks/AxiosSecure/AxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
  

    const AxiosSecureData = AxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await AxiosSecureData.get('/users')
            return res.data;
        }
    })

const handleMakeAdmin = user =>{
  AxiosSecureData.patch(`/users/admin/${user._id}`)
  .then(res =>{
    if (res.data.modifiedCount > 0) {
      refetch()
    
      Swal.fire({
        position: "top",
        icon: "success",
        title: `${user.name} Your Admin is Created Succesfully`,
        showConfirmButton: false,
        timer: 1500
      });
}
  
  })
}
    
    const handleDeleteUser = user =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    })
    .then((result) => {
        if (result.isConfirmed) {

            AxiosSecureData.delete(`/users/${user._id}`)
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
                <h3 className="text-3xl">All Users</h3>
                <h3 className="text-3xl">Total Users: {users.length} </h3>
            </div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index) =>  <tr key={user._id}>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
             { user.role === 'admin' ? 'Admin': <button onClick={() => handleMakeAdmin(user)} className="btn  bg-yellow-500 btn-sm"><FaUsers className="text-white "></FaUsers>
              </button>}</td>

            <td> <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost  btn-lg"><FaTrash className="text-red-500"></FaTrash></button></td>
          </tr>)
      }
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;