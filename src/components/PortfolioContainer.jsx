import React, { useState } from "react";
import Nav from './Nav';
import Heading from "./Heading";
import pageComponents from "./pages";
import Footer from "./Footer";


const pages = Object.keys(pageComponents);

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
      <Footer />
    </div>
  );
}