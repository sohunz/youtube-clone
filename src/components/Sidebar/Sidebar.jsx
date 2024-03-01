import React from "react";
import { GoHomeFill } from "react-icons/go";
import { HiOutlineChevronRight } from "react-icons/hi2";
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
import data from "../../../data/data";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar, setSidebar }) => {
    const dataFiltered = data.slice(0, 7);

    return (
        <div
            className={
                sidebar
                    ? " w-[270px] h-screen flex flex-col gap-3 border-r-[1px] mt-[65px] overflow-y-auto fixed top-0 custom-scrollbar bg-white z-50"
                    : "w-auto h-screen lg:flex md:flex sm:hidden hidden flex-col gap-3 mt-[55px] overflow-y-auto fixed top-0 custom-scrollbar bg-white z-10"
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
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="/"
                            className={
                                sidebar
                                    ? "flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg cursor-pointer"
                                    : "flex flex-col items-center hover:bg-gray-100 px-1 py-5 rounded-lg cursor-pointer"
                            }
                        >
                            <GoHomeFill size={23} />
                            <p className={sidebar ? "" : "text-[11px]"}>Home</p>
                        </Link>
                    </li>
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="/short"
                            className={
                                sidebar
                                    ? "flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg cursor-pointer"
                                    : "flex flex-col items-center hover:bg-gray-100 px-1 py-5 rounded-lg cursor-pointer"
                            }
                        >
                            <MdOutlineVideoLibrary size={23} />
                            <p className={sidebar ? "" : "text-[11px]"}>
                                Shorts
                            </p>
                        </Link>
                    </li>
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="/subscription"
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
                        </Link>
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
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="/channel"
                            className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <PiUserSquareLight size={23} />
                            <p>Your channel</p>
                        </Link>
                    </li>
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="/history"
                            className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <LiaHistorySolid size={23} />
                            <p>History</p>
                        </Link>
                    </li>
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="/video"
                            className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <AiOutlinePlaySquare size={23} />
                            <p>Your videos</p>
                        </Link>
                    </li>
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="/later"
                            className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <MdOutlineWatchLater size={23} />
                            <p>Watch later</p>
                        </Link>
                    </li>
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="/clip"
                            className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <IoCutSharp size={23} />
                            <p>Your clips</p>
                        </Link>
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
                    {dataFiltered.map((item) => {
                        return (
                            <div key={item.id}>
                                <li onClick={() => setSidebar(false)}>
                                    <Link
                                        to={`/channel/user/${item.username}`}
                                        className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg"
                                    >
                                        <div className="bg-gray-500 w-[25px] h-[25px] text-white flex justify-center items-center rounded-full cursor-pointer overflow-hidden">
                                            <img
                                                src={item.profile}
                                                className="w-[100%] h-[100%]"
                                            />
                                        </div>
                                        <p>{item.author}</p>
                                    </Link>
                                </li>
                            </div>
                        );
                    })}

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
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="/trending"
                            className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <BsFire size={23} />
                            <p>Trending</p>
                        </Link>
                    </li>
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="music"
                            className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <PiMusicNoteLight size={23} />
                            <p>Music</p>
                        </Link>
                    </li>
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="/gaming"
                            className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <SiYoutubegaming size={23} />
                            <p>Gaming</p>
                        </Link>
                    </li>
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="/sport"
                            className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <GoTrophy size={23} />
                            <p>Sports</p>
                        </Link>
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
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="/premium"
                            className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <FaYoutube color="#FF0000" size={23} />
                            <p>Youtube Premium</p>
                        </Link>
                    </li>
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="/studio"
                            className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <SiYoutubestudio size={23} color="#FF0000" />
                            <p>Youtube Studio</p>
                        </Link>
                    </li>
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="/youtube-music"
                            className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <SiYoutubemusic size={23} color="#FF0000" />
                            <p>Youtube Music</p>
                        </Link>
                    </li>
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="/kids"
                            className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <TbBrandYoutubeKids size={23} color="#FF0000" />
                            <p>Youtube Kids</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div
                className={
                    sidebar ? "w-full px-3 border-b-[1px] pb-3 " : "hidden"
                }
            >
                <ul className="flex flex-col">
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="setting"
                            className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <IoMdSettings size={23} />
                            <p>Settings</p>
                        </Link>
                    </li>
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="/report"
                            className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <RiFlagLine size={23} />
                            <p>Report history</p>
                        </Link>
                    </li>
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="/help"
                            className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <IoIosHelpCircleOutline size={23} />
                            <p>Help</p>
                        </Link>
                    </li>
                    <li onClick={() => setSidebar(false)}>
                        <Link
                            to="/feedback"
                            className="flex items-center gap-5 hover:bg-gray-100 p-2 rounded-lg"
                        >
                            <MdOutlineFeedback size={23} />
                            <p>Send feedback</p>
                        </Link>
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
