import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiMiniMicrophone } from "react-icons/hi2";
import { HiOutlineVideoCamera } from "react-icons/hi2";

const Navbar = ({ setSidebar, sidebar }) => {
    return (
        <div className="w-full mx-auto fixed top-0 left-0 bg-white">
            <div className="flex justify-between py-2 lg:gap-5 md:gap-5 sm:gap-3 gap-3 px-5">
                <div className="flex items-center gap-5">
                    <RxHamburgerMenu
                        size={22}
                        className="cursor-pointer"
                        onClick={() => setSidebar(!sidebar)}
                    />
                    <div className="flex items-center gap-1 cursor-pointer">
                        <FaYoutube color="#FF0000" size={35} />
                        <p className="font-bold text-[22px] title">Youtube</p>
                    </div>
                </div>
                <div className=" w-[45%] lg:flex md:flex sm:flex hidden items-center gap-4">
                    <div className="w-full flex items-center border-[1px] rounded-full">
                        <input
                            type="text"
                            placeholder="Search"
                            className=" w-full border border-gray-300 px-2 py-2 rounded-l-full outline-none pl-5"
                        />
                        <button className=" text-white px-5 py-1">
                            <GoSearch color="gray" size={22} />
                        </button>
                    </div>
                    <div className="bg-gray-100 rounded-full p-3 hover:bg-gray-200">
                        <HiMiniMicrophone
                            size={18}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
                <div className="flex items-center lg:gap-5 md:gap-5 sm:gap-1 gap-1">
                    <div className=" rounded-full p-3 hover:bg-gray-100 lg:hidden md:hidden sm:hidden block">
                        <GoSearch size={21} className="cursor-pointer" />
                    </div>
                    <div className=" rounded-full p-3 hover:bg-gray-100">
                        <HiOutlineVideoCamera
                            className="cursor-pointer"
                            size={20}
                        />
                    </div>
                    <div className="rounded-full p-2 hover:bg-gray-100">
                        <IoMdNotificationsOutline
                            className="cursor-pointer"
                            size={24}
                        />
                    </div>
                    <div className="bg-gray-500 w-[35px] h-[35px] text-white flex justify-center items-center rounded-full cursor-pointer">
                        <p className="text-xl">J</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
