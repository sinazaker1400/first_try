
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Abril+Fatface|Poppins"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Palette+Mosaic&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Hurricane&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Inspiration&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Smokum&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Rock+3D&display=swap" rel="stylesheet"></link>
      






    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

