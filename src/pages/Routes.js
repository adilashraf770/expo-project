import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componants
import Header from "../componants/Header";
import Footer from "../componants/Footer";

// Pages
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Usestate from "./Hooks/Usestate";
import Useffect from "./Hooks/Useffect";
import Useref from "./Hooks/UseRef";
import UseMemo from "./Hooks/UseMemo";
import NoPage from "./NoPage";
import UseContext from "./Hooks/UseContext";
import UseReducer from "./Hooks/UseReducer";
import Dashborad from "./Dashborad";

export default function index() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hooks/usestate" element={<Usestate />} />
          <Route path="/hooks/useffect" element={<Useffect />} />
          <Route path="/hooks/useref" element={<Useref />} />
          <Route path="/hooks/usememo" element={<UseMemo />} />
          <Route path="/hooks/usecontext" element={<UseContext />} />
          <Route path="/hooks/usereducer" element={<UseReducer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashborad" element={<Dashborad />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

// // <BrowserRouter>
// //   <Header />
// //   <main>
// //     <Routes>
// //       <Route path='/' element={<Home />} />
// //       <Route path="about" element={<About />} />
// //       <Route path="contact" element={<Contact />} />
// //       <Route path="Login" element={<Login />} />
// //

// //     </Routes>
//   </main>
//   <Footer />
// </BrowserRouter>
