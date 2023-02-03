import React, { useState } from "react";
import pageComponents from "./pages";


const pages = Object.keys(pageComponents)

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const Page = () => pageComponents[currentPage]();

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        pages={pages} 
      />
      <Page />
    </div>
  );
}