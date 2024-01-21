import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className="w-full flex justify-center items-center fixed bottom-0 bg-white border-2">
      <div className="flex justify-between w-11/12 max-w-[670px] py-2">
        <div className="space-x-4">
          {page > 1 && (
            <button
              className="rounded-md border px-4 py-2"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              className="rounded-md border px-4 py-2"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        <p className="font-bold text-sm px-4 py-2">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}
