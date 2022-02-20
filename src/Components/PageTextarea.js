import React from 'react';
import Header from "./Header";
import CustomTextarea from "./CustomTextarea";

const PageTextarea = () => {
    return (
        <div>
            <Header />
            <div className="form">
                <CustomTextarea />
            </div>
        </div>
    );
};

export default PageTextarea;