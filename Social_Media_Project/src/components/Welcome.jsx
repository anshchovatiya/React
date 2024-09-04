import React, { useContext } from "react";
import { PageContext } from "../store/pageContext";

const Welcome = () => {
  const { dispatchPostList } = useContext(PageContext);
    

  return (
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto text-center">
        <h1 className="fw-light">there are no posts</h1>
        <p className="lead text-body-secondary">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
