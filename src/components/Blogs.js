import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";
export default function Blogs() {
  const { posts, loading } = useContext(AppContext);
  console.log(posts);
  return (
    <div className="w-11/12 h-screen max-w-[450px] py-3 flex flex-col gap-y-4 m-[100px] justify-center items-center">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Posts Found</p>
        </div>
      ) : (
        posts.map((post) => <BlogDetails key={post.id} post={post} />)
      )}
    </div>
  );
}
