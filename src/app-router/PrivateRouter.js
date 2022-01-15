import React, { useAuth } from "../contexts/AuthContext";
import { Route, Redirect} from "react-router-dom";


const PrivateRouter = (props) => {
  const {user}=useAuth();

  return user ?(
   
        <Route path={props.path} components={props.components} />
    
    ): (<Redirect to="/login"/>);
};

export default PrivateRouter;
