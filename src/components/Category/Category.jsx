import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import categories from "../../../data/categories";

const Category = () => {
    return (
        <div className="w-[1440px] mt-[55px] z-40 fixed left-auto top-0 bg-white py-5 mx-auto">
            <ul className="max-w-[1440px] mx-auto flex gap-3">
                <li className="bg-gray-600 py-1 px-3 rounded-md text-white cursor-pointer">
                    All
                </li>
                {categories.map((item) => (
                    <li className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer">
                        <p className="line-clamp-1">{item}</p>
                    </li>
                ))}
                <li className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 cursor-pointer">
                    <IoChevronForwardOutline size={20} />
                </li>
            </ul>
        </div>
    );
};

export default Category;
