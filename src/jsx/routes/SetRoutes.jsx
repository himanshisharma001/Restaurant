import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Services from "../services/Services";
import AboutUs from '../aboutus/AboutUs';
import ContactUs from "../contact-us/ContactUs";
import ReserveTable from "../reserve-table/ReserveTable";
import ChefPage from "../chef-page/ChefPage";
import MenuPage from "../menu-page/MenuPage";
import Gallery from '../gallery/Gallery';
import Blog from '../blog/Blog';
import BlogDetails from '../blog/BlogDetails';

const SetRoutes = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/reservation" element={<ReserveTable />} />
      <Route path="/chefs" element={<ChefPage />} />
      <Route path="/ourmenu" element={<MenuPage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogdetails" element={<BlogDetails />} />
      </Routes>
    </>
  );
};

export default SetRoutes;
