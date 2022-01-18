import React, { useAuth } from "../contexts/AuthContext";
import { Navigate, Routes, Route } from "react-router-dom";
// import Details from "../pages/Details";
// import NewBlog from "../pages/NewBlog";
// import  Login  from "../pages/Login";
// import UpdateBlog from "../pages/UpdateBlog";

const PrivateRouter = (props) => {
  const { user } = useAuth();
  // const navigate = useNavigate()

  return user? (
    <Routes>
      <Route path={props.path} element={props.element} />
    </Routes>
  ) : (
    
    <Routes>
      <Route path="/login" render={() => <Navigate replace to="/login" />} />
      {/* <Route path="/login" element={<Login/>}/> */}
    </Routes>
    // <Routes>
    //   <Route path="/login" element={<Navigate replace to="/login" />} />
    // </Routes>

    // <Navigate replace to="/login" />
  );
};

export default PrivateRouter;
