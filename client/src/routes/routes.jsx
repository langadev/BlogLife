import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Article from "../components/Posts/Article/Article";
import Categories from "../components/Categories/Categories";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts/:id" element={<Article />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
