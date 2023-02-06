import React, { useState } from "react";
import Nav from './Nav';
import Heading from "./Heading";
import pageComponents from "./pages";


const pages = Object.keys(pageComponents);

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const Page = () => pageComponents[currentPage]();

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Heading />
      <Nav
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        pages={pages} 
      />
      <Page />
    </div>
  );
}