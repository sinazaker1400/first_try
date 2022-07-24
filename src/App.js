import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import StyleChanger from "./pages/React";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Wives from "./pages/Redux";
import NoPage from "./pages/NoPage";
import { Provider } from "react-redux";
import store from "./pages/react-redux/store";
import ReactReduxApp from "./pages/react-redux/containers/app";

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
          <Route index element={<StyleChanger />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Redux" element={<Wives />} />
          <Route path="react-redux" element={<Provider store={store}><ReactReduxApp /></Provider>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

