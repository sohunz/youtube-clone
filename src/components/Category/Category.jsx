import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

const Category = () => {
    return (
        <div className="w-full mr-5 mt-[55px] ml-20 z-40 fixed top-0 bg-white py-5">
            <ul className="max-w-[1550px] mx-auto flex gap-3">
                <li className="bg-gray-600 py-1 px-3 rounded-md text-white cursor-pointer">
                    All
                </li>
                <li className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer">
                    <p className="line-clamp-1">Web Developer</p>
                </li>
                <li className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer">
                    <p className="line-clamp-1">HTML</p>
                </li>
                <li className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer">
                    <p className="line-clamp-1">CSS</p>
                </li>
                <li className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer">
                    <p className="line-clamp-1">Javascript</p>
                </li>
                <li className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer">
                    <p className="line-clamp-1">ReactJS</p>
                </li>
                <li className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer">
                    <p className="line-clamp-1">Bootstrap</p>
                </li>
                <li className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer">
                    <p className="line-clamp-1">Tailwind</p>
                </li>
                <li className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer">
                    <p className="line-clamp-1">NextJS</p>
                </li>
                <li className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer">
                    <p className="line-clamp-1">NodeJS</p>
                </li>
                <li className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer">
                    <p className="line-clamp-1">JAVA</p>
                </li>
                <li className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer">
                    <p className="line-clamp-1">Expres JS</p>
                </li>
                <li className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer">
                    <p className="line-clamp-1">Mongodb</p>
                </li>
                <li className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer">
                    <p className="line-clamp-1">Nest JS</p>
                </li>
                <li className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer">
                    <p className="line-clamp-1">Docker</p>
                </li>
                <li className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer">
                    <p className="line-clamp-1">Github</p>
                </li>
                <li className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer">
                    <IoChevronForwardOutline size={20} />
                </li>
            </ul>
        </div>
    );
};

export default Category;
