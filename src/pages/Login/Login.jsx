import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import SocialLogin from "../../component/SocialLogin/SocialLogin";


const Login = () => {

    const { signIn, setLoading } = useContext(AuthContext);

    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                setLoading(false)
                console.log(result.user)
                toast.success("User login");
                navigate(from, { replace: true });
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body pb-0">
                    <h3 className="text-center font-medium text-4xl">Login</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        <p className="mt-3">New to khoj-Search <Link className="text-info underline font-semibold" to="/register">Sign Up</Link></p>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-success">Login</button>
                    </div>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;