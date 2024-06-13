import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/others/authentication1.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic/useAxiosPublic';


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        const axiosPublic = useAxiosPublic();
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.loggedUser;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                        .then(res =>{
                            if(res.data.insertedId){
                                console.log('user data add')
                                reset();
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "User Created Succesfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/')
                            }
                        })
                       
                    })
                    .catch((error) => console.log(error)
                    );

            })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content  flex-col lg:flex-row ">
                <div className="  w-1/2 mr-16">
                    <img src={img}></img>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-4xl text-center text-yellow-400 font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="name"  {...register("name", { required: true })} name='name' className="input input-bordered" />
                            {errors.name && <span className=' text-red-500 text-center  font-semibold  mt-2'>This field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="name" placeholder="Photo Url"  {...register("photoUrl", { required: true })} className="input input-bordered" />
                            {errors.photoUrl && <span className=' text-red-500 text-center  font-semibold  mt-2'>Photo Url is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"  {...register("email")} name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"  {...register("password", { required: true, minLength: 8, maxLength: 15 })} name='password' className="input input-bordered" />
                            {errors.password && <span className='mt-2'>Password is required and min 8 charecter maximum 15 charecter</span>}

                        </div>

                        <div className="form-control mt-6">
                            <input className="btn bg-yellow-400 text-white" type="submit" value="Submit" />
                        </div>
                        <p className='text-center my-2'>Already Have a Account! <Link className='text-yellow-400 font-bold' to='/login'>Sign in</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;