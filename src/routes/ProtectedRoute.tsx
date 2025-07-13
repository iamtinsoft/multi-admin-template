import { type ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

//import UserContext from "../context/userContext";
interface Props {
    children?: ReactNode;
}
const ProtectedRoute = ({ children }: Props) => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Navigate to="/" replace />;
    }
    //  else if (GetCurrentUser()) {
    //   return <Navigate to="/" replace />;
    // }
    return <div>{children}</div>;
};
export default ProtectedRoute;
