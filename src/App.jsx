import { HashRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import React from "react";
import Headphones from "./pages/Headphones";
import SharedCategory from "./components/SharedCategory";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import ProductPage from "./pages/ProductPage";
import SharedPart from "./components/SharedPart";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<SharedPart />}>
            <Route index element={<Home />} />
            <Route path="/" element={<SharedCategory />}>
              <Route path="/headphones">
                <Route index element={<Headphones />} />
                <Route path="/headphones/:code" element={<ProductPage />} />
              </Route>
              <Route path="/earphones">
                <Route index element={<Earphones />} />
                <Route path="/earphones/:code" element={<ProductPage />} />
              </Route>
              <Route path="/speakers">
                <Route index element={<Speakers />} />
                <Route path="/speakers/:code" element={<ProductPage />} />
              </Route>
              <Route path="/:code" element={<ProductPage />} />
            </Route>
          </Route>
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
