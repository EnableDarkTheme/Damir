import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./globals/styles.scss";
import { Route, Routes } from "react-router-dom";

//TODO: search project with "//remove" and clean up code
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/about-us" element={<About />}></Route>
      </Routes>
      <Nav />
    </>
  );
}

export default App;
