import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { PiDot } from "react-icons/pi";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { BsChevronDown } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { MdAccessTime } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { VscVerifiedFilled } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
import SubscribeContext from "../../context/SubscribeContext";
import { Link } from "react-router-dom";

const Channel = () => {
    const { username } = useParams();
    const data = useContext(DataContext);
    const dataFiltered = data.filter((item) => item.username == username);

    const [activeTab, setActiveTab] = useState("Home");
    const { handleSubscribeToggle, subscribe } = useContext(SubscribeContext);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className=" w-full mt-[65px]">
            <div className="lg:max-w-[1350px] md:w-full sm:w-full w-full  mx-auto lg:px-16 md:px-16 sm:px-5 px-5 lg:pl-28 md:pl-28 sm:pl-5 pl-5">
                {dataFiltered.map((item, index) => {
                    return (
                        <div
                            className="w-full lg:h-[200px] md:h-[150px] sm:h-[140px] h-[100px] "
                            key={index}
                        >
                            <img
                                src={item.banner}
                                alt="Your Channel Logo"
                                className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="lg:pt-7 md:pt-6 sm:pt-5 pt-3 flex gap-7">
                                <div className="w-[145px] h-[145px] min-w-[145px] min-h-[145px] rounded-full lg:flex md:flex sm:hidden hidden overflow-hidden">
                                    <img
                                        src={item.profile}
                                        alt=""
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div className="inline-flex flex-col gap-2">
                                    <div className="w-full">
                                        <div className="flex items-center gap-2">
                                            <p className="font-bold lg:text-4xl md:text-4xl sm:text-3xl text-2xl lg:pt-0 md:pt-0 sm:pt-2 pt-2">
                                                {item.author}
                                            </p>
                                            {item.verified ? (
                                                <VscVerifiedFilled color="gray" />
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <div className="flex flex-wrap items-center text-gray-600 pt-2 ">
                                            <p>@{item.username}</p>
                                            <PiDot size={25} className=" w-5" />
                                            <p>
                                                {item.subscribers} subscribers
                                            </p>
                                            <PiDot size={25} className=" w-5" />
                                            <p>{item.videos} videos</p>
                                        </div>
                                    </div>
                                    <div className="lg:w-[60%] md:w-[100%] sm:w-100 w-100 flex items-center cursor-pointer">
                                        <p className="line-clamp-1 text-gray-600">
                                            {item.description}
                                        </p>
                                        <div>
                                            <HiOutlineChevronRight
                                                size={20}
                                                color="gray"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-black pb-2">
                                        <span className="text-blue-700">
                                            {item.link}
                                        </span>
                                        &nbsp; and {item.linkCount} more link
                                    </p>

                                    <div
                                        className={
                                            subscribe
                                                ? "flex items-center gap-2 bg-gray-200 rounded-full py-2 px-4 border-0 cursor-pointer w-[160px] h-[40px]"
                                                : "flex items-center gap-3 bg-black text-white rounded-full px-4 border-0 cursor-pointer w-[120px] justify-center py-[9px] h-[40px] "
                                        }
                                        onClick={handleSubscribeToggle}
                                    >
                                        {subscribe ? (
                                            <IoMdNotificationsOutline
                                                size={25}
                                            />
                                        ) : (
                                            ""
                                        )}
                                        {subscribe ? (
                                            <p>Subscribed</p>
                                        ) : (
                                            <p>Subscribe</p>
                                        )}
                                        {subscribe ? <BsChevronDown /> : ""}
                                    </div>
                                </div>
                            </div>
                            <ul className="flex gap-10 mt-7 text-xl line-clamp-1">
                                <li
                                    to="/home"
                                    className={`cursor-pointer ${
                                        activeTab === "Home"
                                            ? "border-b-[3px] border-black pb-2"
                                            : "text-gray-700"
                                    }`}
                                    onClick={() => handleTabClick("Home")}
                                >
                                    Home
                                </li>

                                <li
                                    className={`cursor-pointer ${
                                        activeTab === "Videos"
                                            ? "border-b-[3px] border-black pb-2"
                                            : "text-gray-700"
                                    }`}
                                    onClick={() => handleTabClick("Videos")}
                                >
                                    Videos
                                </li>
                                <li
                                    className={`cursor-pointer ${
                                        activeTab === "Shorts"
                                            ? "border-b-[3px] border-black pb-2"
                                            : "text-gray-700"
                                    }`}
                                    onClick={() => handleTabClick("Shorts")}
                                >
                                    Shorts
                                </li>
                                <li
                                    className={`cursor-pointer ${
                                        activeTab === "Live"
                                            ? "border-b-[3px] border-black pb-2"
                                            : "text-gray-700"
                                    }`}
                                    onClick={() => handleTabClick("Live")}
                                >
                                    Live
                                </li>
                                <li
                                    className={`cursor-pointer ${
                                        activeTab === "Playlists"
                                            ? "border-b-[3px] border-black pb-2"
                                            : "text-gray-700"
                                    }`}
                                    onClick={() => handleTabClick("Playlists")}
                                >
                                    Playlists
                                </li>
                                <li
                                    className={`cursor-pointer ${
                                        activeTab === "Community"
                                            ? "border-b-[3px] border-black pb-2"
                                            : "text-gray-700"
                                    }`}
                                    onClick={() => handleTabClick("Community")}
                                >
                                    Community
                                </li>
                                <li className="cursor-pointer">
                                    <GoSearch color="gray" size={22} />
                                </li>
                            </ul>
                            <hr />
                            {dataFiltered.map((item) => {
                                return (
                                    <Link
                                        to={`/video/${item.id}`}
                                        className="w-full relative group cursor-pointer mt-7 flex lg:gap-5 md:gap-3 sm:gap-3 gap-3 pb-5"
                                        key={item.id}
                                    >
                                        <div className="w-[300px] lg:min-w-[300px] md:min-w-[270px] sm:min-w-[200px] min-w-[200px] h-auto overflow-hidden rounded-xl relative">
                                            <img
                                                src={item.thumbnail}
                                                alt=""
                                                className="h-full"
                                            />
                                            <div className="hidden flex-col gap-1 absolute top-0 right-1 show group-hover:flex">
                                                <div className="flex flex-col gap-1 p-2">
                                                    <div className="bg-black w-[27px] h-[27px] flex justify-center items-center text-white rounded-md opacity-80">
                                                        <MdAccessTime
                                                            size={23}
                                                        />
                                                    </div>
                                                    <div className="bg-black w-[27px] h-[27px] flex justify-center items-center text-white rounded-md opacity-80">
                                                        <RiPlayList2Fill
                                                            size={19}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="bg-black text-white px-2 rounded-md text-[13px] absolute bottom-2 right-2">
                                                3:05
                                            </p>
                                        </div>
                                        <div className=" flex gap-3 rounded-lg pt-2 ">
                                            <div className="w-full flex gap-3 rounded-lg">
                                                <div className="flex flex-col gap-3 lg:w-[50%] md:w-[70%] sm:w-100 w-100">
                                                    <p
                                                        className="lg:line-clamp-2 md:line-clamp-2 sm:line-clamp-1 line-clamp-1 pb-1 text-xl pr-1 "
                                                        style={{
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        {item.title}
                                                    </p>
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex items-center gap-1">
                                                            <p className="text-gray-600 text-sm">
                                                                {item.author}
                                                            </p>
                                                            {item.verified ? (
                                                                <VscVerifiedFilled color="gray" />
                                                            ) : (
                                                                ""
                                                            )}
                                                        </div>
                                                        <p className="text-gray-600 lg:flex md:flex sm:line-clamp-1 line-clamp-1 flex-row items-center text-sm ">
                                                            {item.views} views
                                                            <PiDot
                                                                size={25}
                                                                className=" w-5"
                                                            />
                                                            {item.upload}
                                                        </p>
                                                    </div>
                                                    <p className="lg:line-clamp-2 md:line-clamp-2 sm:line-clamp-2 line-clamp-2 text-sm">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Channel;
