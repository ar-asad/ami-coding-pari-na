import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";


const SignUp = () => {

    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                toast.success('Successfully user created!');
                navigate("/");
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSignUp} className="card-body">
                    <h3 className="text-center font-medium text-4xl">Sigh Up</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                    </div>
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
                        <p className="mt-3">Already have an account <Link className="text-info underline font-semibold" to="/login">Login</Link></p>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
        // </div>
    );
};

export default SignUp;