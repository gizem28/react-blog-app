import "./firebase";
import { useState,useEffect } from "react";
import { getDatabase,ref,push,set, onValue,query } from "firebase/database"


export const useFetch=()=>{
    const [blogList, setBlogList] = useState();
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
      setIsLoading(true)

      const db = getDatabase();
      const userRef = ref(db, 'blog');
  
      onValue(query(userRef), snapshot => {
        const blog=snapshot.val()
        // send an array of the values in database
        const blogArray = [];
        for (let id in blog) {
          blogArray.push({ id, ...blog[id] });
        }
        setBlogList(blogArray);
        setIsLoading(false)
      })
    },[]);
    return {isLoading,blogList};
}