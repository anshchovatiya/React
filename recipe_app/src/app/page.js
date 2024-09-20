import Link from "next/link";

export default function Home() {
  return (
      <div className="flex items-center justify-center h-svh">
           <Link href="/recipes" className="border border-white text-white text-sm  py-2 rounded hover:bg-white duration-500 hover:text-black px-10 h-11 font-semibold">
          Go to Recipe Page
        </Link>
      </div>
  );
}
