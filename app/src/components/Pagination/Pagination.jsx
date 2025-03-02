import React, { useEffect, useState } from "react";
import { ChevronLeft,ChevronRight,ChevronFirst,ChevronLast } from "lucide-react";

const Pagination = ({ totalPages, currentPage, onPageChange,}) => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
  }, [currentPage]); // เมื่อ currentPage เปลี่ยน ให้เลื่อนกลับไปด้านบน

  const getPageNumbers = () => {
    const pages = [];
    if(currentPage > 0){
      pages.push(currentPage)
    }
     else{
      currentPage = 1
      pages.push(currentPage)
     }
  
      
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center space-x-4 mt-4">
      {/* ปุ่ม gofirst */}
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded ${
          currentPage === 1 ? " cursor-not-allowed" : "bg-blue text-white hover:bg-blue-600"
        }`}
      >
        <ChevronFirst/>
      </button>
      {/* ปุ่ม Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded ${
          currentPage === 1 ? " cursor-not-allowed" : "bg-blue text-white hover:bg-blue-600"
        }`}
      >
        <ChevronLeft/>
      </button>

      {/* หมายเลขหน้า */}
      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-3 py-1 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page ? "bg-blue text-white" : "text-white hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* ปุ่ม Next */}
      <button
        onClick={() => {
          if (totalPages>0){
            onPageChange(currentPage + 1)
          }
        }}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded ${
          currentPage === totalPages || totalPages == 0 ? " cursor-not-allowed" : "bg-blue text-white hover:bg-blue-600"
        }`}
      >
        <ChevronRight/>
      </button>
       {/* ปุ่ม last*/}
       <button
        onClick={() => {
          if (totalPages>0){
            onPageChange(totalPages)
          }
        }}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded ${
          currentPage === totalPages || totalPages == 0 ? "  cursor-not-allowed" : "bg-blue text-white hover:bg-blue-600"
        }`}
      >
        <ChevronLast/>
      </button>
    </div>
  );
};

export default Pagination;