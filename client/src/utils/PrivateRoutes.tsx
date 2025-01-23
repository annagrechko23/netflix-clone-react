import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux"
import { RootState } from "../app/store";

const PrivateRoutes = () => {
    const { user, isLoading } = useSelector(
        (state: RootState) => state.user.value
    );

    console.log(user)
    if (isLoading) return <div>...Loading</div>
    return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes;

