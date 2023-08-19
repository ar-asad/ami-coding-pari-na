import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    // const user = "asad"
    const user = "";
    const location = useLocation();


    // if (loading) {
    //     return <progress className="progress w-56 ms-36 mt-32"></progress>
    // }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;