import React from "react";
import Layout from "../common/Layout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FAQ from "../pages/FAQ"; 
import TrainingVideos from "../pages/TrainingVideos";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import LicenseCheck from "../pages/LicenseCheck";
import CareersPage from "../pages/CareersPage";
import TermsOfUse from "../pages/TermsOfUse";
import NewsPage from "../pages/NewsPage";
import SitemapPage from "../pages/SitemapPage";
import PartnersPage from "../pages/PartnersPage";
import GalleryPage from "../pages/GalleryPage";

const routesConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, meta: { title: "Home - Regal Forklift" } },
      { path: "/services", element: <Services />, meta: { title: "Services - Regal Forklift" } },
      { path: "/about", element: <About />, meta: { title: "About - Regal Forklift" } },
      { path: "/contact", element: <Contact />, meta: { title: "Contact - Regal Forklift" } },
      { path: "/our-partners", element: <PartnersPage />, meta: { title: "Partners - Regal Forklift" } },
      { path: "/gallery", element: <GalleryPage />, meta: { title: "Gallery - Regal Forklift" } },
      { path: "/login", element: <Login />, meta: { title: "Login - Regal Forklift" } },
      { path: "/check-license", element: <LicenseCheck />, meta: { title: "License Check - Regal Forklift" } },
      { path: "/register", element: <Register />, meta: { title: "Register - Regal Forklift" } },
      { path: "/faq", element: <FAQ />, meta: { title: "FAQ - Regal Forklift" } }, 
      { path: "/training", element: <TrainingVideos />, meta: { title: "Training Videos - Regal Forklift" } },
      { path: "/privacy-policy", element: <PrivacyPolicy />, meta: { title: "Privacy Policy - Regal Forklift" } },
      { path: "/careers", element: <CareersPage />, meta: { title: "Careers - Regal Forklift" } },
      { path: "/terms-of-use", element: <TermsOfUse />, meta: { title: "Terms Of Use - Regal Forklift" } }, 
      { path: "/news", element: <NewsPage />, meta: { title: "News - Regal Forklift" } },
      { path: "/sitemap", element: <SitemapPage />, meta: { title: "Sitemap - Regal Forklift" } },
    ],
  },
];

export default routesConfig;