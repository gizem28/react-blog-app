import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FcShare, FcLike } from "react-icons/fc";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const BlogCard= ({ item })=> {
  const {
    id,
    author,
    content,
    likeCount,
    imageUrl,
    title,
    blogDate,
    commentCount,
  } = item;

  const { user } = useAuth();
  const navigate = useNavigate();

  const getDetails = () => {
    if (!user) {
      alert("Please log in");
    } else {
      navigate(`/detail/${id}`);
    }
  };

  return (
    // <CircularProgress color="inherit" />
    <Card
      sx={{ maxWidth: 345, marginLeft: 8, cursor: "pointer" }}
      onClick={getDetails}>

      <CardMedia component="img" alt={title} height="180" image={imageUrl} />

      <CardContent sx={{ height: 250 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>

        <Typography variant="body2" component="p" color="text.secondary">
          {content.slice(0, 240) + "..."}
        </Typography>
      </CardContent>

      <CardActions sx={{ marginTop: 1 }}>

      <Typography gutterBottom variant="h6" component="h2">
          {author}
      </Typography>
      
      <Typography variant="body2" color="text.secondary">
        {moment(blogDate).format("MMM DD, YYYY")}
        </Typography>


        <Typography variant="body2" color="text.secondary">
        <FcShare />
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <FcLike />
        {likeCount}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {commentCount}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default BlogCard;