import React from "react";
import { Link } from "react-router-dom";

const EmptyPage = () => {
    return (
        <div className="w-100 h-screen border flex justify-center items-center">
            <div className="flex flex-col gap-10 justify-start items-center">
                <p className="text-2xl">This Page Under Construction</p>
                <Link
                    to="/"
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 text-md rounded-lg px-5 py-2.5 "
                >
                    Back To Homepage
                </Link>
            </div>
        </div>
    );
};

export default EmptyPage;
