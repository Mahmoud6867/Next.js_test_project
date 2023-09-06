import React from "react";

function layout({ children }) {
  return (
    <div className="flex flex-col">
      <h1 className="bg-red-400 flex justify-center rounded-full font-bold text-xl my-5  w-full">
        This is the post layout
      </h1>
      <div>{children}</div>
    </div>
  );
}

export default layout;
