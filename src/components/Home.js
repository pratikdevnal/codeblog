import React from "react";
import Blogs from "./Blogs";
import Pagination from "./Pagination";

export default function Home() {
  return (
    <div>
      <Headers />
      <div>
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
}
