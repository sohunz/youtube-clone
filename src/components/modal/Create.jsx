import React from "react";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { CiStreamOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Create = ({ closeModal }) => {
    const handleUploadClick = () => {
        closeModal();
    };

    return (
        <ul>
            <li className="flex items-center gap-3 justify-start p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <AiOutlinePlaySquare size={23} />
                <Link to="/upload" onClick={handleUploadClick}>
                    <p>Upload video</p>
                </Link>
            </li>
            <li>
                <Link
                    to="/empty"
                    className="flex items-center gap-3 justify-start p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
                    onClick={handleUploadClick}
                >
                    <CiStreamOn size={23} />
                    <p>Go live</p>
                </Link>
            </li>
        </ul>
    );
};

export default Create;
