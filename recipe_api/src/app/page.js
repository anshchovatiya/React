// https://developer.edamam.com/edamam-docs-recipe-content-management-api

export default function Home() {
  return (
    <div className="h-svh bg-[#111] md:px-32">
      <form className="py-8 w-1/2 flex  mx-auto gap-4">
        <input type="text" name="searchItem" className="flex-1 rounded focus:outline-none px-3" />
        <button className="border border-white text-white text-sm  py-2 rounded hover:bg-white duration-500 hover:text-black px-10 ">Search</button>
      </form>
      <div className="w-full mb-3 border-white border min-h-[80vh] rounded">

      </div>
    </div>
  );
}
