import { FaFacebook, FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const Loginn = () => {
    const { googleSignIn } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                .then(res =>{
                    console.log(res.data);
                    navigate('/')
                })
            })
    }
    return (
        <div>
            <div className="">
                <button onClick={handleGoogleSignIn}  className="btn w-full bg-black text-white"> <FaGoogle></FaGoogle> Google
                </button>
                <button className="btn mt-3 w-full bg-black text-white"> <FaFacebook></FaFacebook> Facebok
                </button>
            </div>
        </div>
    );
};

export default Loginn;