// import { ReactNode, useContext } from "react";
// import { Navigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import { CurrentSystemUserRoleContext, SystemRoles } from "../contexts/CurrentSystemUserContext";

// //import UserContext from "../context/userContext";
// interface Props {
//     children?: ReactNode;
// }
// const SuperAdminProtectedRoute = ({ children }: Props) => {
//     const { GetCurrentUser } = useAuth();
//     const { currentSystemRole } = useContext(CurrentSystemUserRoleContext)
//     //const { user } = useContext(UserContext);
//     if (!GetCurrentUser()) {
//         return <Navigate to="/" replace />;
//     }
//     else if (currentSystemRole !== SystemRoles.SUPER_ADMIN) {
//         return <Navigate to="/access-denied" replace />;
//     }
//     return <div>{children}</div>;
// };
// export default SuperAdminProtectedRoute;
