import React from "react";
import Link from "next/link";
import Todo from "@/app/components/todo/todo";

export const metadata = {
  title: "Posts page",
};
async function page2() {


  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
      //This function allows the page to call the api at first time it loads and cashes the result for the ammount of time in the relvalidate which is in seconds and then calls the api again to update it's values
    },
  });
  const posts = await response.json();

  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <Link href={`posts/${post.id}`}>
          <h1 className="bg-red-600 flex justify-center rounded-full my-1 font-bold text-xl">
            {post.title}
          </h1>
        </Link>
      ))}
      {/* <div>
        <Todo />
      </div> */}
    </div>
  );
}

export default page2;
