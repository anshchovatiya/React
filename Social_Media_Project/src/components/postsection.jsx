import React, { useContext } from "react";
import sty from "./postsection.module.css";
import AddPost from "./addPost";
import PostList from "./postlist";
import { PageContext } from "../store/pageContext";

const PostSection = () => {
  const { currentPage } = useContext(PageContext);

  return (
    <div className={`${sty.PostSection} overflow-x-hidden w-100`}>
      {currentPage === "CREATE_POST" && <AddPost></AddPost>}
      {currentPage === "HOME" && <PostList></PostList>}
    </div>
  );
};

export default PostSection;
// this is comment