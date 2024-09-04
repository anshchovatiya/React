import { act, createContext, useEffect, useReducer, useState } from "react";

export const PageContext = createContext();

function setPostList(currentState,action){
  let newPostList = currentState;
  if(action.type === "ADD_POST"){
    newPostList = [action.payload,...currentState];
  }
  else if(action.type === "DELETE_POST"){
    newPostList = newPostList.filter( (post) => post.id !== action.id);
  }
  else if(action.type === "FETCH_DATA"){
    newPostList = action.payload;
  }
  return newPostList;
}

const PageContextProvider = (props) => {

  // this state will keep track of the current page
  const [currentPage, setCurrentPage] = useState("HOME");

  // this state will manage all the post and their functions and information
  const [postList, dispatchPostList] = useReducer(setPostList, []);

  // this function will handle delete-button of the card
  const handleDeleteButton = (postId) => {
    let action = {
      type : "DELETE_POST",
      id : postId
    }
    dispatchPostList(action); 
  }

  // this function will manage will handle post New card button
  const AddNewPost = (action) => {
    // send action object to PageContext.jsx file for state using useReducer's setPostList function
    dispatchPostList(action);
  };

  // this hook keep track of data fetch
  const [Loading, setLoading] = useState(false);

  // this will fetch data from the server
  useEffect(() => {
    setLoading(true);
    let controller = new AbortController();
    let signal = controller.signal;
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: "FETCH_DATA",
          payload: response.posts,
        };
        dispatchPostList(action); 
        setLoading(false);
      });
      // return () => {
      //   controller.abort()
      // };
  }, []);

  return (
    <PageContext.Provider
      value={{ currentPage, setCurrentPage, postList, dispatchPostList,handleDeleteButton,AddNewPost,Loading}}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
