import React from "react";
import Blogs from "./Blogs";
import Pagination from "./Pagination";
import Header from "./Header";
export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
}
