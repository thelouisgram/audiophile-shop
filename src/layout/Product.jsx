// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../../public/products.json";
import { handlePageRender } from "../Utils/Shared";
import RenderedProduct from "../pages/ProductsPage/RenderedProduct";
import Error from "../pages/ProductsPage/Error";

/**
 * Product Page component
 */
const ProductPage = () => {
  const [itemNumber, setItemNumber] = useState(1);
  const { code } = useParams();
  const product = productData.products.find((item) => item.slug === code);
  const pageName = product?.name;

  /**
   * On page Render
   */
  useEffect(() => {
    if (!product) {
      handlePageRender(`- page not found`);
    } else {
      handlePageRender(`- ${pageName}`);
      setItemNumber(1);
    }
  }, [pageName, product]);

  return (
    <section className="h-auto pt-6 md:pt-20 px-4 xs:px-6 md:px-0 w-full md:w-[1100px] mx-auto">
      {product ? (
        <RenderedProduct
          product={product}
          itemNumber={itemNumber}
          setItemNumber={setItemNumber}
        />
      ) : (
        <Error />
      )}
    </section>
  );
};

export default ProductPage;
