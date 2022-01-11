import React from "react";

const LoadingComponent = () => {
    return (
        <div className="loading_wrapper">
            <div className="loading_circle"></div>
            <div className="loading_circle"></div>
            <div className="loading_circle"></div>
            <div className="loading_shadow"></div>
            <div className="loading_shadow"></div>
            <div className="loading_shadow"></div>
            <span>Loading</span>
        </div>
    );
};

export default LoadingComponent;
