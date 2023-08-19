import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const { googleSignIn, setLoading } = useContext(AuthContext);


    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                setLoading(false);
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error.message))

    }

    return (
        <div className="mt-4">
            <div className="divider text-gray-600 font-semibold mb-5">Or continue with</div>
            <div className='flex justify-around gap-3 my-4'>
                <button onClick={handleGoogleSignIn} className='bg-black hover:bg-success btn-error font-semibold text-gray-100 rounded w-full mx-7 py-3 flex justify-center gap-3 items-center'> <FcGoogle className='w-6 h-6'></FcGoogle>Google</button>

            </div>
        </div>
    );
};

export default SocialLogin;