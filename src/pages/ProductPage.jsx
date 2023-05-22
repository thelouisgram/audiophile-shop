import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import productData from "../../public/products.json";
import { updateCart } from "../store/storeSlice";
import { useSelector, useDispatch } from "react-redux";

const ProductPage = () => {
  const [itemNumber, setItemNumber] = useState(1);
  const dispatch = useDispatch();
  const { cartArray } = useSelector((state) => state.app);

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

  const goBack = () => {
    window.history.back();
  };

  useEffect(() => {
    setItemNumber(1);
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <div key={index} className="flex flex-col gap-8 items-center">
        <div>
          <img src={item.image.desktop} className="rounded-[10px]" />
        </div>
        <h3 className="text-black text-[28px] font-medium">{item.name}</h3>
        <Link
          to={`/${item.slug}`}
          className="bg-orange text-[14px] tracking-[0.1em] text-white py-3 font-bold w-[150px] 
          flex justify-center cursor-pointer"
        >
          SEE PRODUCT
        </Link>
      </div>
    );
  });

  return (
    <div className="pt-20 bg-whitishGrey  font-Manrope">
      <section className=" h-auto w-[1100px] mx-auto">
        {/* Go Back Button */}
        <div
          className="text-elements mb-16 cursor-pointer hover:underline w-[100px]"
          onClick={goBack}
        >
          Go Back
        </div>
        {/* Product Information */}
        <div className="flex items-center gap-24 mb-40">
          <div className="w-1/2">
            <img src={product.image.desktop} className="rounded-[10px]" />
          </div>
          <div className="w-1/2 pl-8">
            {product.new && (
              <p className="text-orange text-[15px] tracking-[0.5em] mb-4">
                NEW PRODUCT
              </p>
            )}
            <h2 className="text-[40px] font-bold text-black uppercase w-[275px] leading-[1.1em] mb-8">
              {product.name}
            </h2>
            <p className="text-[15px] leading-[1.5em] text-elements w-[450px] mb-8">
              {product.description}
            </p>
            <h3 className="text-[20px] font-bold text-black uppercase leading-[1.1em] mb-8">
              $ {product.price.toLocaleString()}
            </h3>
            <div className="flex gap-8">
              <div className="bg-grey w-[125px] justify-center items-center flex text-[17px] font-bold gap-3 text-black">
                <button
                  onClick={minusItemNumber}
                  className="text-elements hover:bg-[#D3D3D3] hover:text-orange px-4 py-3"
                >
                  -
                </button>
                <div className="text-[14px] flex items-center justify-center w-[40px]">
                  {itemNumber}
                </div>
                <button
                  onClick={addItemNumber}
                  className="text-elements hover:bg-[#D3D3D3] hover:text-orange px-4 py-3"
                >
                  +
                </button>
              </div>
              <button
                onClick={addToCart}
                className="bg-orange text-[14px] tracking-[0.1em] text-white py-3 font-bold 
              w-[150px] flex items-center justify-center cursor-pointer"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        {/* Features & In the Box Section */}
        <div className="flex mb-32">
          <div className="w-3/5">
            <h2 className="text-[32px] font-bold text-black uppercase w-[275px] leading-[1.1em] mb-6">
              FEATURES
            </h2>
            <p className="w-[600px] text-elements text-[15px] leading-[1.7em]">
              {product.features.split("\n\n").map((paragraph, index) => (
                <React.Fragment key={index}>
                  {paragraph}
                  <br />
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
          <div className="w-2/5 pl-20">
            <h2 className="text-[32px] font-bold text-black uppercase w-[275px] leading-[1.1em] mb-8">
              IN THE BOX
            </h2>
            <div className="flex flex-col gap-2">{includedItems}</div>
          </div>
        </div>
        {/* Gallery Section */}
        <div className="flex gap-5 h-[568px] w-full mb-32">
          <div className="flex flex-col gap-5 h-full w-2/5">
            <img
              src={product.gallery.first.desktop}
              className="h-1/2 w-full object-cover rounded-[10px]"
            />
            <img
              src={product.gallery.second.desktop}
              className="h-1/2 w-full object-cover rounded-[10px]"
            />
          </div>
          <div className="w-3/5">
            <img
              src={product.gallery.third.desktop}
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </div>
        {/* You may like section */}
        <div className="w-full mb-12">
          <div className="w-full text-center mb-16">
            <h2 className="text-[32px] font-bold text-black uppercase leading-[1.1em] ">
              YOU MAY ALSO LIKE
            </h2>
          </div>
          <div className="flex w-full gap-8">{others}</div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
