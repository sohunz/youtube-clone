import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import Category from "../../components/Category/Category";

const Homepage = ({ sidebar }) => {
    return (
        <div>
            <Sidebar sidebar={sidebar} />
            {/* <Category /> */}
            <Feed />
        </div>
    );
};

export default Homepage;
