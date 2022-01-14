import { useNavigate } from "react-router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../helper/firebase";
import { FcShare, FcLike, FcRating } from "react-icons/fc";
// import { CircularProgress } from "@mui/material";


export default function BlogCard({blog}) {
  const navigate =useNavigate()

  // console.log(doc.id)
  // const { _document } = doc
  // console.log(_document.data.value.mapValue.fields)
  //  const items = _document.data.value.mapValue.fields
  //  console.log(items)
  // const {author, comments, content, get_like_count, image, published_date, title} = items
  // const slicedDate = published_date.timestampValue.slice(0,10)

  return (
            <Card sx={{ maxWidth: 345, marginLeft: 8 }}>
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
  )}