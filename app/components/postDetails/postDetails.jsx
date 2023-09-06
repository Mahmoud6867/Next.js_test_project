import React from "react";

export const metadata = {
  title: `Dynamic posts page (post)`,
};
async function PostDetails({ params }) {
  console.log(params);
  const postId = params.post;

  await new Promise((resolve) => {
    setTimeout(()=>{
      resolve();
    }, 2000);
  })

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
        //This function allows the page to call the api at first time it loads and cashes the result for the ammount of time in the relvalidate which is in seconds and then calls the api again to update it's values
      },
    }
  );

  const post = await response.json();

  return (
    <div>
      <h1 className="bg-red-600 flex justify-center rounded-full my-1 font-bold text-xl p-3">This is the post ID number: {post.id}</h1>
      <h2 className="bg-green-600 flex justify-center rounded-full my-1 font-bold text-xl p-3">This is the post user ID number: {post.userId}</h2>
      <h2 className="bg-blue-600 flex justify-center rounded-full my-1 font-bold text-xl p-3">This is the post title: {post.title}</h2>
      <h2 className="bg-yellow-600 flex justify-center rounded-full my-1 font-bold text-xl p-3">This is the post body: {post.body}</h2>
    </div>
  );
}

export default PostDetails;
