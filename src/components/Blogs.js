import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";
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
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-sm font-bold">{post.title}</p>
            <p className="text-[10px]">
              By <span className="italic">{post.author} </span> on{" "}
              <span className="font-bold underline">{post.category}</span>
            </p>
            <p className="text-[10px]">Posted on {post.date}</p>
            <p className="text-[11px] mt-[10px]">{post.content}</p>
            <div className="flex gap-x-3">
              {post.tags.map((tag, index) => {
                return (
                  <span
                    className="text-blue-500 underline font-bold text-[8px]"
                    key={index}
                  >{`#${tag}`}</span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
