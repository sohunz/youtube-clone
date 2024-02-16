import React from "react";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { PiUserSquareFill } from "react-icons/pi";
import { RiHistoryLine } from "react-icons/ri";
import { BiSolidVideos } from "react-icons/bi";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoCutSharp } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { PiMusicNoteLight } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { GoTrophy } from "react-icons/go";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { RiFlagLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import "./Scrollbar.css";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { PiUserSquareLight } from "react-icons/pi";
import { LiaHistorySolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";
import { LuMusic } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { BiBookContent } from "react-icons/bi";
import { CiTrophy } from "react-icons/ci";

const Sidebar = ({ sidebar }) => {
    return (
        <div
            className={
                sidebar
                    ? " w-[270px] h-screen flex flex-col gap-3 border mt-16 overflow-y-auto fixed top-0 custom-scrollbar bg-white z-20"
                    : "w-auto h-screen flex flex-col gap-3 border mt-16 overflow-y-auto fixed top-0 custom-scrollbar bg-white z-20 rounded-lg"
            }
        >
            <div
                className={
                    sidebar
                        ? " w-full px-3 pb-3 border-b-[1px]"
                        : " w-full px-[1px] pb-3 border-0"
                }
            >
                <ul
                    className={
                        sidebar ? "flex flex-col" : "flex flex-col gap-3"
                    }
                >
                    <li
                        className={
                            sidebar
                                ? "flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg cursor-pointer"
                                : "flex flex-col items-center hover:bg-gray-100 px-1 py-5 rounded-lg cursor-pointer"
                        }
                    >
                        <GoHomeFill size={23} />
                        <p className={sidebar ? "" : "text-[11px]"}>Home</p>
                    </li>
                    <li
                        className={
                            sidebar
                                ? "flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg cursor-pointer"
                                : "flex flex-col items-center hover:bg-gray-100 px-1 py-5 rounded-lg cursor-pointer"
                        }
                    >
                        <MdOutlineVideoLibrary size={23} />
                        <p className={sidebar ? "" : "text-[11px]"}>Shorts</p>
                    </li>
                    <li
                        className={
                            sidebar
                                ? "flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg cursor-pointer"
                                : "flex flex-col items-center hover:bg-gray-100 px-1 py-5 rounded-lg cursor-pointer"
                        }
                    >
                        <MdOutlineSubscriptions size={23} />
                        <p className={sidebar ? "" : "text-[11px]"}>
                            Subscripts
                        </p>
                    </li>
                    <li
                        className={
                            sidebar
                                ? "hidden"
                                : "flex flex-col items-center hover:bg-gray-100 px-1 py-5 rounded-lg cursor-pointer"
                        }
                    >
                        <AiOutlinePlaySquare size={23} />
                        <p className={sidebar ? "" : "text-[11px]"}>You</p>
                    </li>
                </ul>
            </div>

            <div
                className={
                    sidebar ? "w-full px-3 pb-3 border-b-[1px]" : "hidden"
                }
            >
                <ul className="flex flex-col">
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <p className="font-bold">You</p>
                        <HiOutlineChevronRight size={23} />
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <PiUserSquareLight size={23} />
                        <p>Your channel</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <LiaHistorySolid size={23} />
                        <p>History</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <AiOutlinePlaySquare size={23} />
                        <p>Your videos</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <MdOutlineWatchLater size={23} />
                        <p>Watch later</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <IoCutSharp size={23} />
                        <p>Your clips</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <MdExpandMore size={23} />
                        <p>See more</p>
                    </li>
                </ul>
            </div>

            <div
                className={
                    sidebar ? "w-full px-3 pb-3 border-b-[1px]" : "hidden"
                }
            >
                <p className="font-bold pl-3 pb-3">Subscriptions</p>
                <ul className="flex flex-col">
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <div className="bg-gray-500 w-[25px] h-[25px] text-white flex justify-center items-center rounded-full cursor-pointer overflow-hidden">
                            <img
                                src="https://yt3.googleusercontent.com/ZJay_PuGajAmgtcOUGKdaJYGqI1RWAXoGiWZadFUcGn9E1Ubm-uMQ5NUGjWm1ThoG-zE8GHkxw=s900-c-k-c0x00ffffff-no-rj"
                                alt=""
                                className="w-[100%] h-[100%]"
                            />
                        </div>
                        <p>Web Development</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <div className="bg-gray-500 w-[25px] h-[25px] text-white flex justify-center items-center rounded-full cursor-pointer overflow-hidden">
                            <img
                                src="https://yt3.googleusercontent.com/ZJay_PuGajAmgtcOUGKdaJYGqI1RWAXoGiWZadFUcGn9E1Ubm-uMQ5NUGjWm1ThoG-zE8GHkxw=s900-c-k-c0x00ffffff-no-rj"
                                alt=""
                                className="w-[100%] h-[100%]"
                            />
                        </div>
                        <p>Web Development</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <div className="bg-gray-500 w-[25px] h-[25px] text-white flex justify-center items-center rounded-full cursor-pointer overflow-hidden">
                            <img
                                src="https://yt3.googleusercontent.com/ZJay_PuGajAmgtcOUGKdaJYGqI1RWAXoGiWZadFUcGn9E1Ubm-uMQ5NUGjWm1ThoG-zE8GHkxw=s900-c-k-c0x00ffffff-no-rj"
                                alt=""
                                className="w-[100%] h-[100%]"
                            />
                        </div>
                        <p>Web Development</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <div className="bg-gray-500 w-[25px] h-[25px] text-white flex justify-center items-center rounded-full cursor-pointer overflow-hidden">
                            <img
                                src="https://yt3.googleusercontent.com/ZJay_PuGajAmgtcOUGKdaJYGqI1RWAXoGiWZadFUcGn9E1Ubm-uMQ5NUGjWm1ThoG-zE8GHkxw=s900-c-k-c0x00ffffff-no-rj"
                                alt=""
                                className="w-[100%] h-[100%]"
                            />
                        </div>
                        <p>Web Development</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <div className="bg-gray-500 w-[25px] h-[25px] text-white flex justify-center items-center rounded-full cursor-pointer overflow-hidden">
                            <img
                                src="https://yt3.googleusercontent.com/ZJay_PuGajAmgtcOUGKdaJYGqI1RWAXoGiWZadFUcGn9E1Ubm-uMQ5NUGjWm1ThoG-zE8GHkxw=s900-c-k-c0x00ffffff-no-rj"
                                alt=""
                                className="w-[100%] h-[100%]"
                            />
                        </div>
                        <p>Web Development</p>
                    </li>

                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <MdExpandMore size={23} />
                        <p>Show 169 more</p>
                    </li>
                </ul>
            </div>

            <div
                className={
                    sidebar ? "w-full px-3 pb-3 border-b-[1px]" : "hidden"
                }
            >
                <ul className="flex flex-col">
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <p className="font-bold">Explore</p>
                        <HiOutlineChevronRight />
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <BsFire size={23} />
                        <p>Trending</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <PiMusicNoteLight size={23} />
                        <p>Music</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <SiYoutubegaming size={23} />
                        <p>Gaming</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <GoTrophy size={23} />
                        <p>Sports</p>
                    </li>
                </ul>
            </div>

            <div
                className={
                    sidebar ? "w-full px-3 border-b-[1px] pb-3" : "hidden"
                }
            >
                <ul className="flex flex-col">
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <p className="font-bold">More From Youtube</p>
                        <HiOutlineChevronRight />
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <FaYoutube color="#FF0000" size={23} />
                        <p>Youtube Premium</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <SiYoutubestudio size={23} color="#FF0000" />
                        <p>Youtube Studio</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <SiYoutubemusic size={23} color="#FF0000" />
                        <p>Youtube Music</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <TbBrandYoutubeKids size={23} color="#FF0000" />
                        <p>Youtube Kids</p>
                    </li>
                </ul>
            </div>
            <div
                className={
                    sidebar ? "w-full px-3 border-b-[1px] pb-3 " : "hidden"
                }
            >
                <ul className="flex flex-col">
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <IoMdSettings size={23} />
                        <p>Settings</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <RiFlagLine size={23} />
                        <p>Report history</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <IoIosHelpCircleOutline size={23} />
                        <p>Help</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <MdOutlineFeedback size={23} />
                        <p>Send feedback</p>
                    </li>
                </ul>
            </div>
            <div
                className={
                    sidebar ? " w-full px-3 border-b-[1px] pb-20" : "hidden"
                }
            >
                <ul className="flex flex-col">
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <p className="font-bold">Category</p>
                        <HiOutlineChevronRight />
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <GoHomeFill size={23} />
                        <p>Home</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <IoGameControllerOutline size={23} />
                        <p>Gaming</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <CiTrophy size={23} />
                        <p>Sports</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <RiRobot2Line size={23} />
                        <p>Technology</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <LuMusic size={23} />
                        <p>Music</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <BiBookContent size={23} />
                        <p>Blog Content</p>
                    </li>
                    <li className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg">
                        <IoNewspaperOutline size={23} />
                        <p>News</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
