import React, { useContext, useState } from "react";
import { useNavigation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function BlogPage() {
  const { loading, setLoading } = useContext(AppContext);
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigation();
  const blogId = location.pathname.split("/").at(-1);
  let fetchRelatedBlogs = async () => {
    setLoading(true);
    let url = `${baseUrl}?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("Error in blog id", error);
      setBlog(null);
      setRelatedBlogs([]);
    }
  };
  return <div>BlogPage</div>;
}
