// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Error404 from "../pages/Error/404";
import { handlePageRender } from "../Utils/Shared";

const Error = () => {
  useEffect(() => {
    handlePageRender(' - Page Not Found')
  }, []);

  return (
    <div className="h-screen-78 md:h-screen-98 w-full md:w-[1100px] mx-auto pt-4 ss:py-12">
      <Error404 />
    </div>
  );
};

export default Error;
