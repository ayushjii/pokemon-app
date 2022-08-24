import React from "react";
import spinner from "../images/spinner-1s-200px.svg";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-96">
            <img src={spinner} alt="Loading..." />
        </div>
    );
};

export default Spinner;