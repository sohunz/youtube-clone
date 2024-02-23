import React from "react";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { CiStreamOn } from "react-icons/ci";

const Create = () => {
    return (
        <ul>
            <li className="flex items-center justify-start p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <AiOutlinePlaySquare size={23} />
                <p>Upload video</p>
            </li>
            <li className="flex items-center justify-start p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <CiStreamOn size={23} />
                <p>Go live</p>
            </li>
        </ul>
    );
};

export default Create;
