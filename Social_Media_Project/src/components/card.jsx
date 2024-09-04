import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PageContext } from "../store/pageContext";

const PostCard = ({ post }) => {
  const { handleDeleteButton } = useContext(PageContext);

  return (
    <div className="col-12 col-md-6">
      <div className="card ">
        <div className="card-body ContentCard">
          <div className="CardTop">
            {post.tags.map((tag) => {
              return (
                <span key={tag} className="rounded-pill text-bg-secondary">
                  <div id="0" className="
                  +"></div>{tag}
                </span>
              );
            })}
          </div>
          <h5 className="fs-3">{post.title}</h5>
          <p className="fs-6">{post.body}</p>
          <a href="#" className="btn btn-primary w-100">
            More
          </a>
          <div className="CardProfileSection">
            <div>
              <div className="fs-5">{"user" + post.userId}</div>
            </div>
            <div
              className="DeleteButton"
              onClick={() => {
                handleDeleteButton(post.id);
              }}
            >
              <MdDelete />
            </div>
          </div>
          <div className="alert alert-success mt-3" role="alert">
            {`This post is liked by ${post.reactions.likes} people`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
