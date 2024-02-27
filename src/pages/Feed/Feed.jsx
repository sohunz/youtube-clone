import React from "react";
import FeedCard from "../../components/FeedCard/FeedCard";
import Category from "../../components/Category/Category";

const Feed = () => {
    return (
        <div className="w-auto mr-5 h-screen mt-36 ml-20 z-0">
            <div className="max-w-[1550px] mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 pb-10">
                <Category />
                <p>Hello</p>
                <FeedCard />
            </div>
        </div>
    );
};

export default Feed;
