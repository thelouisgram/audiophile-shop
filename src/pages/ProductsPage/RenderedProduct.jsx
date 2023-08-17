// eslint-disable-next-line no-unused-vars
import React from "react";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, updateNotifMessage } from "../../store/storeSlice";
import { goBack } from "../../Utils/Shared";
import Others from "./Others";
import Info from "./Info";
import Gallery from "./Gallery";
import YouMayLike from "./YouMayLike";
import Features from "./Features";

// eslint-disable-next-line react/prop-types
const RenderedProduct = ({ product, itemNumber, setItemNumber }) => {
  const dispatch = useDispatch();
  const { cartArray, notifMessage } = useSelector((state) => state.app);

  /**
   * Increase item number
   */
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const addItemNumber = useCallback(() => {
    setItemNumber((item) => item + 1);
  }, [setItemNumber]);

  /**
   * Decrease item number
   */
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const minusItemNumber = useCallback(() => {
    if (itemNumber > 1) {
      setItemNumber((item) => item - 1);
    }
  }, [itemNumber, setItemNumber]);

  /**
   * Render included items
   */
  // eslint-disable-next-line react/prop-types
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
        // eslint-disable-next-line react/prop-types
        `Item "${product.name}" has been added to cart`,
      ])
    );
    // eslint-disable-next-line react/prop-types
    if (cartArray.some((item) => item.id === product.id)) {
      dispatch(
        updateCart(
          cartArray.map((item) => {
            // eslint-disable-next-line react/prop-types
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
      // eslint-disable-next-line react/prop-types
      const total = product.price * itemNumber;
      const newObject = { number: itemNumber, total: total };
      const updatedProduct = { ...product, ...newObject };
      dispatch(updateCart([...cartArray, updatedProduct]));
    }
  };

  /**
   * Render others in the "You may like" section
   */
  // eslint-disable-next-line react/prop-types
  const others = product?.others.map((item, index) => (
    <div key={index}>
      <Others item={item} />
    </div>
  ));

  return (
    <div>
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
    </div>
  );
};

export default RenderedProduct;
