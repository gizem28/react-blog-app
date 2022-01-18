import React, { useAuth } from "../contexts/AuthContext";
import { Link, Routes, Route } from "react-router-dom";
import Details from "../pages/Details";
import NewBlog from "../pages/NewBlog";
import UpdateBlog from "../pages/UpdateBlog";

const PrivateRouter = (props) => {
  const { user } = useAuth();
 console.log("props", props)
  return user ? (
    <Routes>
    <Route path="/detail/:id" element={<Details/>} />
    <Route path="/newblog" element={<NewBlog/>} />
    {/* <Route path="/profile:id" element={<Profile/>} /> */}
    <Route path="/updateblog/:id" element={<UpdateBlog/>} />
    </Routes>
  ) : (
    <Link to="/login" />
  );
};

export default PrivateRouter;
