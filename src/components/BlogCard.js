import React from 'react'
import {useFetch} from "../helper/fireBlog"
import "../helper/firebase"

const BlogCard = () => {
  const {BlogList}=useFetch();

    return (
        <div>
            {[].map((blog, index) => {
        return (
          <div className="blogs" key={index}>
            <div className="title">
              <h2>{blog.title}</h2>
            </div>
            <img src={blog.image} alt={blog.title} />
            <div className="card-over">
              <p>{blog.content}</p>
            </div>
          </div>
        );
      })}
        </div>
    )
}

export default BlogCard
