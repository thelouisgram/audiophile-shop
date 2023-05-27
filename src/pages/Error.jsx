import React, { useEffect } from "react";
import Error404 from "../components/Error/404";

const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Audiophile Shop - Page Not Found"
  }, []);

  return (
    <div className="h-screen-78 w-full md:w-[1100px] mx-auto pt-4 md:pt-0 ss:py-12">
      <Error404 />
    </div>
  );
};

export default Error;
