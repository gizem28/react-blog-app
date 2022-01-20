import { createContext, useEffect, useState, useContext} from "react";
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
    const result = currentBlogs?.filter((item)=>item.id===id);
    return result;
  }

//delete data
  function deleteBlog(id){
    const db = getDatabase();
    remove(ref(db, "blog/"+id));
  }

  // add document
const addBlog=(info)=>{
  const db=getDatabase();
  const userRef=ref(db,"blog")
  const newUserRef=push(userRef)
  set(newUserRef,{
    title:info.title,
    imageUrl:info.imageUrl,
    content:info.content,
    author:info.author,
    blogDate:Date.now()
  });
  console.log("data added");
}

  // update data, delete yapmadan calisiyor
  function updateBlog(id, info) {
    const db = getDatabase();
    const newUserKey=push(child(ref(db),"blog/")).key;
    const updates={};
    updates["blog/"+newUserKey]=info;
    // updates['/user-blog/' + id + '/' + newUserKey] = info;
    remove(ref(db, "blog/"+id));
    return update(ref(db),updates);
  }

  // function updateBlog(id, title, content, imageUrl){
  //   const db = getDatabase();
  //   const postData={
  //     id:id,
  //     title:title,
  //     content:content,
  //     imageUrl:imageUrl
  //   };
  //   // Get a key for a new Post.
  // const newPostKey = push(child(ref(db), 'blog/')).key;
  // // Write the new post's data simultaneously in the posts list and the user's post list.
  // const updates = {};
  // updates['blog/' + newPostKey] = postData;
  // updates['/user-blog/' + id + '/' + newPostKey] = postData;
  // return update(ref(db), updates);
  // }

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

