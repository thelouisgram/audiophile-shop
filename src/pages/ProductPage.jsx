import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import productData from "../../public/products.json";
import { updateCart, updateNotifMessage } from "../store/storeSlice";
import { useSelector, useDispatch } from "react-redux";
import { scrollToTop, goBack } from "../components/Utils/Shared";
import Others from "../components/ProductsPageComponents/Others";
import YouMayLike from "../components/ProductsPageComponents/YouMayLike";
import Gallery from "../components/ProductsPageComponents/Gallery";
import Features from '../components/ProductsPageComponents/Features';
import Info from "../components/ProductsPageComponents/Info";

const ProductPage = () => {
  const [itemNumber, setItemNumber] = useState(1);
  const dispatch = useDispatch();
  const { cartArray, notifMessage } = useSelector((state) => state.app);

  const addItemNumber = useCallback(() => {
    setItemNumber((item) => item + 1);
  }, []);

  const minusItemNumber = useCallback(() => {
    if (itemNumber > 1) {
      setItemNumber((item) => item - 1);
    }
  }, [itemNumber]);

  const slug = useParams();
  const product = productData.products.find((item) => item.slug === slug.code);

  useEffect(() => {
    setItemNumber(1);
  }, [slug]);

  useEffect(() => {
    scrollToTop()
  }, [slug]);

  useEffect(() => {
    return () => {
      setItemNumber(1);
    };
  }, []);

  const includedItems = product.includedItems.map((item, index) => {
    return (
      <div key={index} className="flex gap-3">
        <h4 className="text-[15px] font-bold text-orange">{item.quantity}x</h4>
        <p className="text-[15px] text-elements">{item.item}</p>
      </div>
    );
  });

  const addToCart = () => {
    setItemNumber(1);
    dispatch(updateNotifMessage([...notifMessage, `Item "${product.name}" has been added to cart`]))
    if (cartArray.some((item) => item.id === product.id)) {
      dispatch(
        updateCart(
          cartArray.map((item) => {
            if (item.id === product.id) {
              const total = item.price * item.number;
              return {
                ...item,
                number: item.number + itemNumber,
                total: total,
              };
            }
            return item;
          })
        )
      );
    } else {
      const total = product.price * itemNumber;
      const newObject = { number: itemNumber, total: total };
      const updatedProduct = { ...product, ...newObject };
      dispatch(updateCart([...cartArray, updatedProduct]));
    }
  };

  const others = product.others.map((item, index) => {
    return (
      <div key={index}>
        <Others item={item}/>
      </div>
    );
  });

  return (
      <section className=" h-auto pt-20 w-[1100px] mx-auto">
        {/* Go Back Button */}
        <div
          className="text-elements mb-16 cursor-pointer hover:underline w-[100px]"
          onClick={goBack}
        >
          Go Back
        </div>
        {/* Product Information */}
        <Info 
          product={product} 
          minusItemNumber={minusItemNumber} 
          itemNumber={itemNumber} 
          addToCart={addToCart} 
          addItemNumber={addItemNumber} />
        {/* Features & In the Box Section */}
        <Features product={product} includedItems={includedItems}/>
        {/* Gallery Section */}
        <Gallery product={product} />
          {/* You may like section  */}
        <YouMayLike others={others} />
      </section>
  );
};

export default ProductPage;
