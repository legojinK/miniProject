import React from "react";
import {MoonLoader} from "react-spinners";

const Loading = ({loading})=> {

    return (
        <div className="sweet-loading">
        <MoonLoader
            color="#233876" size={65} loading ={loading} />
        </div>
    );
}

export default Loading;
