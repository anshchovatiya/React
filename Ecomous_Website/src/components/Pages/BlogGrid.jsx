import PageHeader from "../helpers/PageHeader";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { BlogPageData } from "../../data/constants";


const BlogGrid = () => {
  return (
    <div>
      <PageHeader
        tittle="Blog Grid"
        description={
          <div className="flex justify-center gap-3 items-center font-medium text-sm md:text-base">
            <p>Home</p> <span className="mt-1">&gt;</span> <p>Fashion</p>
          </div>
        }
      />
      <div className=" max-w-[1500px] pt-9 m-auto lg:px-12 px-[18px] overflow-x-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {BlogPageData.map((currentBlog) => {
          return (
            <div className="md:px-4 pb-8">
              <div className="overflow-hidden relative mb-7 rounded-md cursor-pointer">
                <img
                  src={currentBlog.blog_image}
                  alt="blog image"
                  className="hover:scale-105 duration-1000 h-full w-full object-cover"
                />
                <p className="absolute z-[99] bottom-3 left-3 px-4 bg-white text-[13px] font-semibold rounded py-2">
                  {currentBlog.type}
                </p>
              </div>
              <p className="text-xl font-medium mb-2 hover:text-[crimson] cursor-pointer">
                {currentBlog.tittle}
              </p>
              <div className="flex items-center gap-2 font-medium border-b w-fit border-black text-sm hover:text-[crimson] cursor-pointer">
                <p>Read More</p>
                <HiMiniArrowUpRight className="text-base" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogGrid;
