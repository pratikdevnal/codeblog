import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";
import { useLocation } from "react-router-dom";
import { baseUrl } from "../baseUrl";
import Header from "./Header";

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

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);
  return (
    <div>
      <Header />
      <div>
        <button
          onClick={() => {
            navigation(-1);
          }}
        >
          Back
        </button>
        {loading ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : blog ? (
          <div>
            <BlogDetails post={blog} />
            <h2>Related Blogs</h2>
            {relatedblogs.map((post) => {
              <div key={post.id}>
                <BlogDetails post={post} />
              </div>;
            })}
          </div>
        ) : (
          <div>
            <p>No Blog Found</p>
          </div>
        )}
      </div>
    </div>
  );
}
