import { createContext, useEffect, useState, useContext} from "react";
import {db} from "../helper/firebase";
import { getDatabase,ref,push,set, onValue,query, remove
,update, child} from "firebase/database"


//Context for gloabal data

const BlogContext=createContext();

//Function to use context
export function useBlog(){
  return useContext(BlogContext);
}

//Method for BlogContext.provider
export function BlogContextProvider({children}){
  const [currentBlogs, setCurrentBlogs]=useState();

  //navigate to Details Page
  function getDetails(id){
    const db = getDatabase();
    remove(ref(db, "blog/"+id));
  }

//delete data
  function deleteBlog(id){
    const db = getDatabase();
    remove(ref(db, "blog/"+id));
  }

  //update data
  function updateBlog(id, info){
    db = getDatabase();
    const newUserKey=push(child(ref(db),"blog/")).key;
    const updates={};
    updates["blog/"+newUserKey]=info;
    return update(ref(db),updates);
  }

  //send data to Firebase
    useEffect(()=>{
      const db = getDatabase();
      const userRef = ref(db, 'blog');
  
      onValue(query(userRef), snapshot => {
        const blog=snapshot.val()
        // send an array of the values in database
        const blogArray = [];
        for (let id in blog) {
          blogArray.push({ id, ...blog[id] });
        }
        setCurrentBlogs(blogArray);
      });
    }, []);


// add document
const addBlog=(info)=>{
  const db=getDatabase();
  const userRef=ref(db,"blog")
  const newUserRef=push(userRef)
  set(newUserRef,{
    title:info.title,
    imageUrl:info.imageUrl,
    content:info.content
  });
  console.log("data added");
}


const value={
  currentBlogs,
  getDetails,
  updateBlog,
  deleteBlog,
  addBlog
}

  return <BlogContext.Provider value={value}>
    {children}
  </BlogContext.Provider>
}

