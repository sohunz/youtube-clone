import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiMiniMicrophone } from "react-icons/hi2";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { CiStreamOn } from "react-icons/ci";

const Navbar = ({ setSidebar, sidebar }) => {
    const [voice, setVoice] = useState(false);

    return (
        <div className="w-full mx-auto fixed top-0 left-0 bg-white z-20">
            {/* voice modal */}
            <div
                className={
                    voice
                        ? "absolute bg-white min-w-[700px] h-[450px] border left-[25%] top-14 rounded-xl"
                        : "hidden"
                }
            >
                <div className="flex flex-col justify-center items-center p-10">
                    <div
                        className="absolute top-3 right-3 hover:bg-gray-100 rounded-full p-2 cursor-pointer"
                        onClick={() => setVoice(!voice)}
                    >
                        <IoCloseOutline size={30} />
                    </div>
                    <div className="mb-20">
                        <p className="text-3xl pb-5">Search with your voice</p>
                        <p className="text-gray-600">
                            To search by voice, go to your browser settings and
                            allow access to microphone
                        </p>
                    </div>
                    <div className="bg-gray-200 p-5 rounded-full cursor-pointer">
                        <HiMiniMicrophone
                            size={40}
                            width={40}
                            height={40}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-between py-2 lg:gap-5 md:gap-5 sm:gap-3 gap-3 px-5">
                <div className="flex items-center gap-5">
                    <RxHamburgerMenu
                        size={22}
                        className="cursor-pointer"
                        onClick={() => setSidebar(!sidebar)}
                    />
                    <Link
                        to="/"
                        className="flex items-center gap-1 cursor-pointer"
                    >
                        <FaYoutube color="#FF0000" size={35} />
                        <p className="font-bold text-[22px] title">Youtube</p>
                    </Link>
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
                    <div
                        className="bg-gray-100 rounded-full p-3 hover:bg-gray-200 relative group cursor-pointer"
                        onClick={() => setVoice(!voice)}
                    >
                        <HiMiniMicrophone
                            size={18}
                            className="cursor-pointer"
                        />
                        <div
                            className={
                                voice
                                    ? "hidden"
                                    : "bg-black opacity-70 text-white rounded-md absolute left-[-40px] bottom-[-45px] w-[135px] hidden group-hover:block"
                            }
                        >
                            <p className="text-[11px] p-3 text-center">
                                Search with your voice
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center lg:gap-5 md:gap-5 sm:gap-1 gap-1">
                    <div className=" rounded-full p-3 hover:bg-gray-100 lg:hidden md:hidden sm:hidden block">
                        <GoSearch size={21} className="cursor-pointer" />
                    </div>
                    <div className=" rounded-full p-3 hover:bg-gray-100 relative group">
                        <HiOutlineVideoCamera
                            className="cursor-pointer"
                            size={20}
                        />
                        <div className="bg-black opacity-70 text-white rounded-md absolute left-[-3px] bottom-[-45px] hidden group-hover:block">
                            <p className="text-[11px] p-3 text-center hidden">
                                Create
                            </p>
                        </div>
                        {/* create modal */}
                        <div className="absolute bg-white w-[170px] border rounded-lg p-1 left-[-10px] top-[45px]">
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
                        </div>
                    </div>
                    <div className="rounded-full p-2 hover:bg-gray-100 relative group">
                        <IoMdNotificationsOutline
                            className="cursor-pointer"
                            size={24}
                        />
                        <div className="bg-black opacity-70 text-white rounded-md absolute left-[-40px] bottom-[-45px] w-[90px] hidden group-hover:block">
                            <p className="text-[11px] text-center p-3">
                                Notifications
                            </p>
                        </div>
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
