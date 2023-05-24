import React from "react";
import Categories from "../components/Categories";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="w-full font-Manrope">
      {/* Hero section */}
      <div className="w-full bg-black mb-20">
        <section className="w-[1100px] mx-auto md:h-screen-16 xl:h-[611px]  flex font-Manrope relative overflow-hidden">
          <div className="z-[1] flex h-full justify-center items-start flex-col">
            <h4 className="tracking-[0.8em] text-elements text-[14px] font-bold">
              NEW PRODUCT
            </h4>
            <h1 className="text-[56px] text-white font-bold leading-[1.1em] mb-8">
              XX99 MARK II <br />
              HEADPHONES
            </h1>
            <p className="w-[325px] text-elements text-[14px] mb-[40px]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to="/headphones/xx99-mark-two-headphones">
              <button className="bg-orange text-[14px] tracking-[0.1em] text-white py-3 font-bold w-[150px] flex justify-center cursor-pointer">
                SEE PRODUCT
              </button>
            </Link>
          </div>
          <div className="absolute w-auto h-[700px] mt-[-90px] z-[0]">
            <img
              src="/images/home/desktop/image-hero.png"
              className="w-auto h-full object-cover"
            />
          </div>
        </section>
      </div>
      {/* Categories Section */}
      <Categories />
      {/* zx9 Speaker Section */}
      <div className="w-full bg-whitishGrey mt-20 mb-12">
        <section className="speaker flex pt-24 h-auto rounded-[10px] bg-orange w-[1100px] mx-auto">
          <div className="w-full h-auto ">
            <div className="flex justify-center overflow-hidden">
              <div className="w-1/2 h-[500px] flex relative">
                <img
                  src="/images/home/desktop/image-speaker-zx9.png"
                  className="w-relative h-[500px] bottom-[-10px] absolute "
                />
              </div>
              <div className="mt-[15px]">
                <h2 className="text-[56px] text-white font-bold tracking-[0.1em] leading-[1.1em] mb-8">
                  ZX9 <br />
                  SPEAKER
                </h2>
                <p className="w-[325px] text-white text-[15px] mb-8">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <Link to="/speakers/zx9-speaker">
                  <button className="px-6 py-3 text-[15px] text-white font-bold bg-black">
                    SEE PRODUCT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* zx7 speaker section */}
      <div className="w-full bg-whitishGrey mb-12">
        <section className=" py-24 h-auto w-[1100px] rounded-[10px] mx-auto zx7">
          <div className="pl-24">
            <h3 className="text-[28px] text-black font-bold  mb-6">
              ZX7 SPEAKER
            </h3>
            <Link to='/speakers/zx7-speaker'>
            <button className="py-3 px-6 text-[15px] font-bold  text-black border-[1px] border-black">
              SEE PRODUCT
            </button>
            </Link>
          </div>
        </section>
      </div>
      {/* earphones section */}
      <div className="w-full bg-whitishGrey mb-12">
        <section className="h-auto w-[1100px] rounded-[10px] mx-auto earphones">
          <div className="flex gap-8 h-[300px]">
            <div className="w-1/2 h-full">
              <img
                src="/images/home/desktop/image-earphones-yx1.jpg"
                className="h-full w-full rounded-[10px] object-cover"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center pl-24 bg-grey rounded-[10px]">
              <h3 className="text-[28px] text-black font-bold  mb-6">
                YX1 EARPHONES
              </h3>
              <div>
                <Link to='/earphones/yx1-earphones'>
                  <button className="py-3 px-6 text-[15px] font-bold  text-black border-[1px] border-black">
                    SEE PRODUCT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
