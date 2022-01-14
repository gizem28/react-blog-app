import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useFetch } from "../helper/fireBlog";
import "../helper/firebase";
import Grid from "@mui/material/Grid";
import { FcShare, FcLike, FcRating } from "react-icons/fc";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router";


export default function BlogCard({blog}) {
  const navigate= useNavigate();
  const { isLoading, blogList } = useFetch();
 

  // console.log(doc.id)
  // const { _document } = doc
  // console.log(_document.data.value.mapValue.fields)
  //  const items = _document.data.value.mapValue.fields
  //  console.log(items)
  // const {author, comments, content, get_like_count, image, published_date, title} = items
  // const slicedDate = published_date.timestampValue.slice(0,10)

  return (
    <Grid container marginTop={2} spacing={4} sx={{ marginBottom: 3 }}>
      {isLoading ? (
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <CircularProgress color="inherit" />
        </Grid>
      ) : blogList?.length === 0 ? (
        <div className="blogs">
          <p>No blog found</p>
        </div>
      ) : (
        blogList?.map((blog, id) => (
          <Grid key={id} item xs={3} md={4}>
            <Card sx={{ maxWidth: 345, marginLeft: 8, cursor:"pointer" }}
            onClick={()=> navigate(`/details/${id}`)}>
              <CardMedia
                component="img"
                alt={blog.title}
                height="180"
                image={blog.imageUrl}
              />
              <CardContent sx={{ height:250 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.content.slice(0, 240) + "..."}
                </Typography>
              </CardContent>
              <CardActions sx={{ marginTop: 1 }}>
                <Button size="small">
                  Share
                  <FcShare />
                </Button>
                <Button size="small">
                  Like
                  <FcLike />
                </Button>
                <Typography variant="body2" color="text.secondary">
                  {/* {slicedDate} */}
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
}
