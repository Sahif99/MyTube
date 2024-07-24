import React from "react";
import Sidebody from "./Sidebody";

import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex gap-16 space-y-3 w-full h-full  ">
      <Sidebody />
      <Outlet />
    </div>
  );
};

export default Body;