import React from "react";

// It is a wrrapper component for all of the pages used in _app.js
const Wrapper = ({ children }) => {
  return <div className="w-11/12 md:9/12 lg:w-8/12 mx-auto">{children}</div>;
};

export default Wrapper;
