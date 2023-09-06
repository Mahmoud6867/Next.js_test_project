import React from "react";

function layout({ children }) {
  return (
    <div className="flex flex-col">
      <h1 className="bg-orange-800 flex justify-center rounded-full font-bold text-xl my-5  w-full">
        This is the photos layout
      </h1>
      <div>{children}</div>
    </div>
  );
}

export default layout;
