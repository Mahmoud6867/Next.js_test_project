import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full ">
      <h1 className="bg-purple-700 flex justify-center rounded-full font-bold text-xl">Hello world, Welcome to my Next.js project</h1>
      <div className="flex justify-around m-5">
        <Link
          href="/pages/photos"
          className="rounded-full bg-orange-500 w-1/4 flex justify-center"
        >
          <button>Photos</button>
        </Link>
        <Link
          href="/pages/posts"
          className="rounded-full bg-red-600 w-1/4 flex justify-center"
        >
          <button>Posts</button>
        </Link>
      </div>
    </div>
  );
}
