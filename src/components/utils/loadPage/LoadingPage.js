import React from "react";
import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <div className="container">
      <div className="infinity-loader">
        <div className="bg">
          {/* background circles */}
          <div className="left-bg"></div>
          <div className="right-bg"></div>
        </div>
        <div className="fg">
          {/* foreground circles */}
          <div className="top-left-rect">
            <div></div>
          </div>
          <div className="bottom-right-rect">
            <div></div>
          </div>
          <div className="top-right-rect">
            <div></div>
          </div>
          <div className="bottom-left-rect">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
