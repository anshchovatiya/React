import React from "react";

const LoadingPage = () => {
  return (
    <div className="container LoadingScreen" >
      <div className="spinner-grow text-success" role="status" style={{"height" : "3rem", "width" : "3rem"}}>
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default LoadingPage;
