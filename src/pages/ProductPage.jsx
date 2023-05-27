import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productData from "../../public/products.json";
import { updateCart, updateNotifMessage } from "../store/storeSlice";
import { useSelector, useDispatch } from "react-redux";
import { scrollToTop, goBack } from "../components/Utils/Shared";
import Others from "../components/ProductsPage/Others";
import YouMayLike from "../components/ProductsPage/YouMayLike";
import Gallery from "../components/ProductsPage/Gallery";
import Features from "../components/ProductsPage/Features";
import Info from "../components/ProductsPage/Info";

/**
 * Product Page component
 */
const ProductPage = () => {
  const [itemNumber, setItemNumber] = useState(1);
  const dispatch = useDispatch();
  const { cartArray, notifMessage } = useSelector((state) => state.app);
  const navigate = useNavigate();
  const { code } = useParams();
  const product = productData.products.find((item) => item.slug === code);

  /**
   * Check if product exists
   * If not, navigate to error page
   */
  useEffect(() => {
    if (!product) {
      navigate("/not-found");
    }
  }, [code, navigate, product]);

  /**
   * Render the component
   */
  if (!product) {
    return null;
  }

  /**
   * Increase item number
   */
  const addItemNumber = useCallback(() => {
    setItemNumber((item) => item + 1);
  }, []);

  /**
   * Decrease item number
   */
  const minusItemNumber = useCallback(() => {
    if (itemNumber > 1) {
      setItemNumber((item) => item - 1);
    }
  }, [itemNumber]);

  /**
   * Scroll to top on component mount
   */
  useEffect(() => {
    scrollToTop();
    setItemNumber(1);
  }, []);

  /**
   * Render included items
   */
  const includedItems = product?.includedItems.map((item, index) => (
    <div key={index} className="flex gap-3">
      <h4 className="text-[15px] font-bold text-orange">{item.quantity}x</h4>
      <p className="text-[15px] text-elements">{item.item}</p>
    </div>
  ));

  /**
   * Add product to cart
   */
  const addToCart = () => {
    setItemNumber(1);
    dispatch(
      updateNotifMessage([
        ...notifMessage,
        `Item "${product.name}" has been added to cart`,
      ])
    );
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

  /**
   * Render others in the "You may like" section
   */
  const others = product?.others.map((item, index) => (
    <div key={index}>
      <Others item={item} />
    </div>
  ));

  useEffect(() => {
    document.title = `Audiophile Shop - ${product.name}`
  })

  

  return (
    <section className="h-auto pt-6 md:pt-20 px-4 xs:px-6 md:px-0 w-full md:w-[1100px] mx-auto">
      {/* Go Back Button */}
      <div
        className="text-elements mb-8 md:mb-16 cursor-pointer hover:underline w-[100px]"
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
        addItemNumber={addItemNumber}
      />
      {/* Features & In the Box Section */}
      <Features product={product} includedItems={includedItems} />
      {/* Gallery Section */}
      <Gallery product={product} />
      {/* You may like section  */}
      <YouMayLike others={others} />
    </section>
  );
};

export default ProductPage;
