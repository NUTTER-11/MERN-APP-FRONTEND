import { Navigate, Route,Routes } from "react-router-dom"
import Layout from "./layouts/layout"
import Homepage from "./pages/Homepage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
const AppRoutes =()=>{

    return(
        <Routes>
            <Route path ="/" element ={<Layout><Homepage></Homepage></Layout>} />
            <Route path ="/auth-callback" element ={<AuthCallbackPage/>}  />
            <Route element={<ProtectedRoute></ProtectedRoute>}>
                <Route
                path="/user-profile"
                element={
                <Layout>
                  <UserProfilePage />
                </Layout>
                  }
                />
            </Route>
            <Route path ="*" element ={<Navigate to="/"/>}></Route>

        </Routes>
    )
};
export default AppRoutes