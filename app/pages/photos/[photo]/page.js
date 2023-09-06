import React from 'react'

export const metadata={
  title:'Dynamic articles page (title)'
}
async function title({params}) {
  console.log(params.title)
  const photoId = params.title;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${photoId}`,
    {
      next: {
        revalidate: 120,
        //This function allows the page to call the api at first time it loads and cashes the result for the ammount of time in the relvalidate which is in seconds and then calls the api again to update it's values
      },
    }
  );

  const photo = await response.json();
  return (
    <div>
    <h1 className="bg-red-600 flex justify-center rounded-full my-1 font-bold text-xl p-3">This is the photo ID number: {photo.id}</h1>
    <h2 className="bg-green-600 flex justify-center rounded-full my-1 font-bold text-xl p-3">This is the photo album ID number: {photo.albumId}</h2>
    <h2 className="bg-blue-600 flex justify-center rounded-full my-1 font-bold text-xl p-3">This is the photo title: {photo.title}</h2>
    <h2 className="bg-yellow-600 flex justify-center rounded-full my-1 font-bold text-xl p-3"><img src={`${photo.url}`} alt={`${photo.title}`}></img></h2>
  </div>
  )
}

export default title