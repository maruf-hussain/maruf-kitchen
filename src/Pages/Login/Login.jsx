import { Link } from "react-router-dom";
import img from '../../assets/others/authentication2.png'
const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content  flex-col lg:flex-row ">
                <div className=" w-1/2 mr-16">
                    <img src={img}></img>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-4xl text-center text-yellow-400 font-bold">Sign in</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                        </div>
                        <label className="label ">
                            <a href="#" className="label-text-alt  text-red-500 link link-hover">Forgotten password?</a>
                        </label>
                        <div className="form-control mt-6">
                            <input className="btn bg-yellow-400 text-white" type="submit" value="Sign in" />
                        </div>
                        <p className='text-center my-2'>New to Car Service! <Link className='text-yellow-400 font-bold' to='/signup'>Sign Up</Link></p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;