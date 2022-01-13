import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useFetch} from "../helper/fireBlog"
import "../helper/firebase"
import Grid from '@mui/material/Grid';

export default function BlogCard() {
  const {isLoading, blogList}=useFetch();


  return (
    <Grid container margin={2} spacing={3}>
      {isLoading? 
          (<div><p>Loading..</p></div>):
          (blogList?.length ===0? 
        (<div className="blogs"><p>No blog found</p></div>):
        (blogList?.map((blog,index)=>(
          <Grid item xs={4} md={3}>
          <Card sx={{ maxWidth: 345 }} key={index}>
          <CardMedia
          component="img"
          alt={blog.title}
          height="140"
          image={blog.imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {blog.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
        </Grid>
        ))
        )
          )}
    </Grid>
  );
}
