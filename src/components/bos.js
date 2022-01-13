import {useFetch} from "../helper/fireBlog"
import "../helper/firebase"


const BlogCard = () => {
  const {isLoading, blogList}=useFetch();

    return (
        <Container>
          {isLoading? 
          (<div><p>Loading..</p></div>):

          (blogList?.length ===0? 

          (<div className="blogs"><p>No blog found</p></div>):

          (blogList?.map((blog,index)=>
          (
              <Container key={index}>
              <div className="title">
                <h2>{blog.title}</h2>
              </div>
              <img src={blog.imageUrl} alt={blog.title} />
              <div className="card-over">
                  <p>{blog.content}</p>
              </div>
              </Container>)
              )
          )
          )}
        </Container>
        )
        };
    export default BlogCard;

