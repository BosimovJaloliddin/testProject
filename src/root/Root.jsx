import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
// import navMenu from "../utils/navMenu";

const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="*" element={<h1>NOT FOUND 404</h1>} />
      </Route>
    </Routes>
  );
};

export default Root;
