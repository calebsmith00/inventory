import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <div className="text-2xl text-center my-5">Hello and welcome!</div>
      <div className="text-center">
        The site is very basic right now, but we{"'"}re working towards it with
        proper project management!
        <Link href="/create-product" className="block text-violet-500 italic">
          Create a product now!
        </Link>
      </div>
    </div>
  );
};

export default Home;
