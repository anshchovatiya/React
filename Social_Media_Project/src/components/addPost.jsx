import React, { act, useContext, useRef } from "react";
import { PageContext } from "../store/pageContext";

const AddPost = () => {
  let { AddNewPost } = useContext(PageContext);

  let userId = useRef();
  let postTittle = useRef();
  let postDescription = useRef();
  let hashTags = useRef();

  function handleFormSubmit(event) {
    event.preventDefault();

    let postTittleValue = postTittle.current.value;
    let postDescriptionValue = postDescription.current.value;
    let userIdValue = userId.current.value;
    let hashTagsValue = hashTags.current.value;
    hashTagsValue = hashTagsValue.split(" ");
    let Likes = { likes: Math.floor(Math.random() * 3000 + 1) };

    // this will send data to the api and update the list in normal api but this is dummy api
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTittleValue,
        body: postDescriptionValue,
        userId: userIdValue,
        tags: hashTagsValue,
        reactions: Likes,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        let action = {
          type: "ADD_POST",
          payload: res,
        };
        AddNewPost(action);
      });

    userIdValue = "";
    postDescriptionValue = "";
    hashTagsValue = "";
    postTittleValue = "";
  }

  return (
    <form className="CreatePost container" onSubmit={handleFormSubmit}>
      <div className="form-group ">
        <label htmlFor="UserId">User Id</label>
        <input
          type="text"
          className="form-control"
          id="UserId"
          placeholder="Enter your user id"
          ref={userId}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="PostTittle" className="mt-3">
          Post Tittle
        </label>
        <input
          type="text"
          className="form-control mb-3"
          id="PostTittle"
          placeholder="Enter the post tittle"
          ref={postTittle}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="PostDescription" className="mt-3">
          Post Description
        </label>
        <textarea
          className="form-control mb-3"
          id="PostDescription"
          placeholder="Enter the description"
          rows="5"
          ref={postDescription}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="HashTags" className="mt-3">
          Hash Tags
        </label>
        <input
          type="text"
          className="form-control mb-4"
          id="HashTags"
          placeholder="Enter related hashtags"
          ref={hashTags}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddPost;
