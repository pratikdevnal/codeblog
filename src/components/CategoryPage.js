import React from "react";
import { useLocation, useNavigation } from "react-router-dom";
import Pagination from "./Pagination";
import Header from "./Header";
import Blogs from "./Blogs";
export default function CategoryPage() {
  const navigation = useNavigation();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
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
        <h2>
          Blogs on <span>{category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
}
