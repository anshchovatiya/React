import React, { useContext} from "react";
import PostCard from "./card";
import { PageContext } from "../store/pageContext";
import Welcome from "./Welcome";
import LoadingPage from "./Loading";

const PostList = () => {
  const { postList,Loading } = useContext(PageContext);
 

  return (
    <div className="row g-4 postContainer">
      {Loading && <LoadingPage />}
      {!Loading && postList.length === 0 && <Welcome />}
      {!Loading &&
        postList.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
    </div>
  );
};

export default PostList;
