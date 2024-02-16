import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../Feed/Feed";

const Homepage = ({ sidebar }) => {
    return (
        <div>
            <Sidebar sidebar={sidebar} />
            <Feed />
        </div>
    );
};

export default Homepage;
