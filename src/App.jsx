import { HashRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedElements/SharedLayout";
import Home from "./layout/Home";
// eslint-disable-next-line no-unused-vars
import React from "react";
import SharedCategory from "./components/SharedElements/SharedCategory";
import ProductPage from "./layout/Product";
import SharedPart from "./components/SharedElements/SharedPart";
import Checkout from "./layout/Checkout";
import Error from "./layout/Error";
import Section from "./layout/Section";

const sections = ['headphones', 'earphones', 'speakers'];

const renderedSections = sections.map((section, index) => (
  <Route key={index} path={`/${section}`}>
    <Route index element={<Section section={section}/>} />
    <Route path={`/${section}/:code`} element={<ProductPage />} />
  </Route>
));

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<SharedPart />}>
            <Route index element={<Home />} />
            <Route path="/" element={<SharedCategory />}>
              {renderedSections}
            </Route>
          </Route>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
