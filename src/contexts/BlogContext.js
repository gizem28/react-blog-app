import { createContext, useEffect, useState } from "react";
// import { collection, query, orderBy, getDocs } from "firebase/firestore";
// import { readData } from "../helpers/firebase";
// import { onValue, ref } from "firebase/database";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const [blogsInfo, setBlogsInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  // const [data, setData] = useState([])

  // useEffect(() => {
  //     readData(setData);
  //   }, [])
    
  //   console.log(data)


  return (
    <BlogContext.Provider value={{ blogsInfo, isLoading }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;