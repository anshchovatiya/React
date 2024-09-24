import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black flex text-white h-svh justify-center items-center">
      <Link href="/table"><button className="py-2 px-6 border border-white hover:bg-white hover:text-black rounded">go to table page</button></Link>
    </div>
  );
}
