import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { BsShare, BsSuitHeart, BsChatRightText } from "react-icons/bs";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import moment from "moment";
import { toastErrorNotify } from "../helper/toastNotify";
import {FaRegUserCircle} from "react-icons/fa"

const BlogCard = ({item}) => {
  const {
    id,
    content,
    likeCount,
    imageUrl,
    title,
    blogDate,
    commentCount,
    author,
  } = item;

  const { user } = useAuth();

  const navigate = useNavigate();

  const getDetails = () => {
    if (!user) {
      toastErrorNotify("Please login to get details");
      navigate("/login");
    } else {
      navigate(`/detail/${id}`);
    }
  };

  return (
    // <CircularProgress color="inherit" />
    <Card
      sx={{ maxWidth: 345, marginLeft: 8, cursor: "pointer" }}
      onClick={getDetails}
    >
      <CardMedia component="img" alt={title} height="180" image={imageUrl} />

      <CardContent sx={{ height: 250 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>

        <Typography variant="body2" component="p" color="text.secondary">
          {content.slice(0, 240) + "..."}
        </Typography>
        <Typography variant="body2">
          <Link to={`/details/${id}`}> View more</Link>
        </Typography>
      </CardContent>

      <CardActions>
        <Typography
          gutterBottom
          variant="body2"
          component="p"
          color="text.secondary">
            <FaRegUserCircle style={{ marginLeft: 10 }}/> {author}
        </Typography>
      </CardActions>

      <CardActions>
        <Typography
          style={{ marginLeft: 10 }}
          variant="body2"
          color="text.secondary"
        > {likeCount}
        <BsSuitHeart />
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <BsChatRightText style={{ marginLeft: 10 }} />
          {commentCount}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <BsShare style={{ marginLeft: 10 }} />
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          style={{ position: "relative", left: 140 }}
        >
          {moment(blogDate).format("MMM DD, YYYY")}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
