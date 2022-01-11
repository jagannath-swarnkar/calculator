import React, { useEffect, useState } from "react";
import { PagerLoader } from "../utils/rxSubjects";

const LoaderHoc = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const rxLoaderHandler = PagerLoader.subscribe((flag) => {
            setLoading(!!flag);
        });
        return () => {
            rxLoaderHandler && rxLoaderHandler.unsubscribe();
        };
    }, []);

    return (
        <React.Fragment>
            {loading ? (
                <div id="loading-hoc">
                    <div className="loading_hoc_bg"></div>
                    <div className="loding_hoc_container">
                        <div className="loading_wrapper">
                            <div className="loading_circle"></div>
                            <div className="loading_circle"></div>
                            <div className="loading_circle"></div>
                            <div className="loading_shadow"></div>
                            <div className="loading_shadow"></div>
                            <div className="loading_shadow"></div>
                            <span>Loading</span>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </React.Fragment>
    );
};

export default LoaderHoc;
