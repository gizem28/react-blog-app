import "./firebase";
import { useState,useEffect } from "react";
import { getDatabase,ref,push,set, onValue,query } from "firebase/database"

//send data
export const useFetch=()=>{
    const [blogList, setBlogList] = useState();
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
      setIsLoading(true)

      const db = getDatabase();
      const userRef = ref(db, 'blog');
  
      onValue(query(userRef), snapshot => {
        const blogs=snapshot.val()
        // send an array of the values in database
        const blogArray = [];
        for (let id in blogs) {
          blogArray.push({ id, ...blogs[id] });
        }
        setBlogList(blogArray);
        setIsLoading(false)
      })
    },[]);
    return {isLoading,blogList};
}


// add document
export const addInfo=(info)=>{
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