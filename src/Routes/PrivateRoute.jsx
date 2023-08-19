import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
    // const user = "asad"

    const { user, loading } = useContext(AuthContext);

    console.log(loading);


    // const user = "";
    const location = useLocation();


    if (loading) {
        return <progress className="progress  w-56 ms-96 mt-48 mb-48"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;