import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { MdNotificationsActive } from "react-icons/md";
import { PiDot } from "react-icons/pi";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { BsChevronDown } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { MdAccessTime } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { VscVerifiedFilled } from "react-icons/vsc";

const Channel = () => {
    const { id } = useParams();
    const data = useContext(DataContext);
    const dataFiltered = data.filter((item) => item.id == id);

    const [activeTab, setActiveTab] = useState("Home");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className=" w-full mt-[60px]">
            <div className="max-w-[1400px] mx-auto">
                {dataFiltered.map((item) => {
                    return (
                        <div className="w-full h-[230px]">
                            <img
                                src={item.banner}
                                alt="Your Channel Logo"
                                className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="pt-7 flex gap-7">
                                <div className="w-[700px] h-full rounded-full overflow-hidden">
                                    <img
                                        src={item.channelProfile}
                                        alt=""
                                        className=" w-full h-full object-cover"
                                    />
                                </div>
                                <div className="inline-flex flex-col gap-3">
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <p className="font-bold text-4xl">
                                                {item.author}
                                            </p>
                                            {item.verified ? (
                                                <VscVerifiedFilled color="gray" />
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <div className="flex items-center text-gray-700">
                                            <p>@{item.username}</p>
                                            <PiDot size={25} className=" w-5" />
                                            <p>
                                                {item.subscribers} subscribers
                                            </p>
                                            <PiDot size={25} className=" w-5" />
                                            <p>{item.videos} videos</p>
                                        </div>
                                    </div>
                                    <div className="w-[50%] flex items-center cursor-pointer">
                                        <p className="line-clamp-1 text-gray-700">
                                            {item.description}
                                        </p>
                                        <div>
                                            <HiOutlineChevronRight
                                                size={20}
                                                color="gray"
                                            />
                                        </div>
                                    </div>
                                    <p>
                                        <span className="text-blue-700">
                                            {item.link}
                                        </span>
                                        and {item.linkCount} more link
                                    </p>
                                    <div className="flex items-center gap-3 bg-gray-100 rounded-full py-2 px-3 border-0 cursor-pointer w-[150px] justify-center">
                                        <p className="font-bold">Subscribed</p>
                                        <BsChevronDown />
                                    </div>
                                </div>
                            </div>
                            <ul className="flex gap-10 mt-5 text-xl">
                                <li
                                    className={`cursor-pointer ${
                                        activeTab === "Home"
                                            ? "border-b-2 border-black pb-3"
                                            : ""
                                    }`}
                                    onClick={() => handleTabClick("Home")}
                                >
                                    Home
                                </li>
                                <li
                                    className={`cursor-pointer ${
                                        activeTab === "Videos"
                                            ? "border-b-2 border-black pb-3"
                                            : ""
                                    }`}
                                    onClick={() => handleTabClick("Videos")}
                                >
                                    Videos
                                </li>
                                <li
                                    className={`cursor-pointer ${
                                        activeTab === "Shorts"
                                            ? "border-b-2 border-black pb-3"
                                            : ""
                                    }`}
                                    onClick={() => handleTabClick("Shorts")}
                                >
                                    Shorts
                                </li>
                                <li
                                    className={`cursor-pointer ${
                                        activeTab === "Live"
                                            ? "border-b-2 border-black pb-3"
                                            : ""
                                    }`}
                                    onClick={() => handleTabClick("Live")}
                                >
                                    Live
                                </li>
                                <li
                                    className={`cursor-pointer ${
                                        activeTab === "Playlists"
                                            ? "border-b-2 border-black pb-3"
                                            : ""
                                    }`}
                                    onClick={() => handleTabClick("Playlists")}
                                >
                                    Playlists
                                </li>
                                <li
                                    className={`cursor-pointer ${
                                        activeTab === "Community"
                                            ? "border-b-2 border-black pb-3"
                                            : ""
                                    }`}
                                    onClick={() => handleTabClick("Community")}
                                >
                                    Community
                                </li>
                                <li>
                                    <GoSearch color="gray" size={22} />
                                </li>
                            </ul>
                            <hr />
                            {dataFiltered.map((item) => {
                                return (
                                    <div
                                        className="relative group cursor-pointer mt-5 flex gap-5 pb-10"
                                        key={item.id}
                                    >
                                        <div className="w-[300px] h-auto overflow-hidden rounded-xl relative">
                                            <img
                                                src={item.thumbnail}
                                                alt=""
                                                className="h-auto"
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
                                            <p className="bg-black text-white px-2 rounded-md text-[13px] absolute bottom-1 right-[5px]">
                                                3:05
                                            </p>
                                        </div>
                                        <div className="w-full flex gap-3 rounded-lg pt-2">
                                            <div className="w-full flex gap-3 rounded-lg">
                                                <div className="flex flex-col gap-3 w-[50%]">
                                                    <p
                                                        className="line-clamp-2 pb-1 text-[15px] pr-1 "
                                                        style={{
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        {item.title}
                                                    </p>
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex items-center gap-1">
                                                            <p className="text-gray-600">
                                                                {item.author}
                                                            </p>
                                                            {item.verified ? (
                                                                <VscVerifiedFilled color="gray" />
                                                            ) : (
                                                                ""
                                                            )}
                                                        </div>
                                                        <p className="text-gray-600 flex flex-row items-center text-[13px]">
                                                            {item.views} views
                                                            <PiDot
                                                                size={25}
                                                                className=" w-5"
                                                            />
                                                            {item.upload}
                                                        </p>
                                                    </div>
                                                    <p className="line-clamp-2">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <p>
                                                <PiDotsThreeVerticalBold
                                                    size={23}
                                                    className="cursor-pointer"
                                                />
                                            </p>
                                        </div>
                                    </div>
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
