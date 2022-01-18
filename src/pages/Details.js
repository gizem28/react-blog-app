import { useNavigate } from "react-router";
import { Col, Row, Container } from "react-bootstrap";
import Button from "@mui/material/Button";
import "../helper/firebase";
import { useAuth } from "../contexts/AuthContext";
import { useParams } from "react-router-dom";
import { useBlog } from "../contexts/BlogContext";
import moment from "moment";
import { successNote } from "../helper/toastNotify";
import {FaRegUserCircle} from "react-icons/fa"

export default function Details() {
 
  const navigate = useNavigate();
  const { user } = useAuth();
  const {currentBlogs, deleteBlog}=useBlog()
  const {id}=useParams();
 

  const deleteHandler = (id) => {
    deleteBlog(id);
    successNote("Deleted successfully!");
    navigate("/");
  };

  const updateHandler = (id) => {
    navigate(`/updateblog/${id}`);
    console.log(id)
  };

  return (
    <Container className="pt-5" style={{minHeight:"80vh"}}>
      {currentBlogs?.filter((item)=>item.id===id).map((item, index) => (
         <Container key={index} className="text-center mt-4">
         <Row>
           <Col>
             <img src={item.imageUrl} style={{height:450, width:600
             ,marginBottom:20}} alt={item.title} />
           </Col>
           <Col>
             <h1>{item.title}</h1>
             <div className="pt-4">
             {item.content}
             </div>
             <div className="pt-4">
             {moment(item.blogDate).format("MMM DD, YYYY")}
             </div>
             <div className="pt-4 mb-4">
             <FaRegUserCircle/> : {item.author}
             {console.log("author", item.author)}
             </div>
           </Col>
         </Row>
         <Row>
         {item.author===user?.email && (
              <div >
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => updateHandler(item.id)}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className="m-4"
                  onClick={() => deleteHandler(item.id)}
                >
                  Delete
                </Button>
                </div>
            )
          }
          
         </Row>
       </Container>
        ))}
    </Container>
  );
}
