import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Photos page",
};

async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos", {
    next: {
      revalidate: 120,
      //This function allows the page to call the api at first time it loads and cashes the result for the ammount of time in the relvalidate which is in seconds and then calls the api again to update it's values
    },
  });
  const photos = await response.json();
  console.log(photos);
  return (
    <div className="flex flex-col">
      {photos.map((photo)=>{
                <Link href={`photos/${photo.id}`}>
                <h1 className="bg-red-600 flex justify-center rounded-full my-1 font-bold text-xl">
                  {photo.title}
                </h1>
              </Link>
      })}
    </div>
  );
}

export default page;
