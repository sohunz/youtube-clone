import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const Homepage = ({ sidebar }) => {
    return (
        <div>
            <Sidebar sidebar={sidebar} />
        </div>
    );
};

export default Homepage;
