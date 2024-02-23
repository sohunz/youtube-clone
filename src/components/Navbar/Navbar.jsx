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
import Voice from "../modal/Voice";
import { IoSettingsOutline } from "react-icons/io5";
import Create from "../modal/Create";
import Notification from "../modal/Notification";

import UserProfile from "../modal/UserProfile";

const Navbar = ({ setSidebar, sidebar }) => {
    const [voice, setVoice] = useState(false);
    const [create, setCreate] = useState(false);
    const [notification, setNotification] = useState(false);
    const [userProfile, setUserProfile] = useState(false);

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
                <Voice setvoice={setVoice} voice={voice} />
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
                        onClick={() => {
                            setVoice(!voice);
                            setCreate(false);
                            setNotification(false);
                            setUserProfile(false);
                        }}
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
                            onClick={() => {
                                setCreate(!create);
                                setNotification(false);
                                setUserProfile(false);
                                setVoice(false);
                            }}
                        />
                        <div className="bg-black opacity-70 text-white rounded-md absolute left-[-3px] bottom-[-45px] hidden group-hover:block">
                            <p
                                className={
                                    create
                                        ? "hidden"
                                        : "text-[11px] p-3 text-center"
                                }
                            >
                                Create
                            </p>
                        </div>
                        {/* create modal */}
                        <div
                            className={
                                create
                                    ? "absolute bg-white w-[170px] border rounded-lg p-1 left-[-60px] top-[46px] block"
                                    : "hidden"
                            }
                        >
                            <Create />
                        </div>
                    </div>
                    <div className="rounded-full p-2 hover:bg-gray-100 relative group">
                        <IoMdNotificationsOutline
                            className="cursor-pointer"
                            size={24}
                            onClick={() => {
                                setNotification(!notification);
                                setCreate(false);
                                setUserProfile(false);
                                setVoice(false);
                            }}
                        />
                        <div
                            className={
                                notification
                                    ? "hidden"
                                    : "bg-black opacity-70 text-white rounded-md absolute left-[-40px] bottom-[-45px] w-[90px] hidden group-hover:block"
                            }
                        >
                            <p className="text-[11px] text-center p-3">
                                Notifications
                            </p>
                        </div>
                        {/* notification modal min-h-[650px] */}
                        <div
                            className={
                                notification
                                    ? "absolute bg-white min-w-[500px]  border rounded-xl p-1 right-[0px] top-[46px]"
                                    : "hidden"
                            }
                        >
                            <div className="flex items-center justify-between p-3">
                                <p className="text-lg">Notifications</p>
                                <IoSettingsOutline size={23} />
                            </div>{" "}
                            <hr />
                            <Notification
                                notification={notification}
                                setNotification={setNotification}
                            />
                        </div>
                    </div>
                    <div className="bg-gray-500 w-[35px] h-[35px] text-white flex justify-center items-center rounded-full cursor-pointer relative">
                        <p
                            className="text-xl"
                            onClick={() => {
                                setUserProfile(!userProfile);
                                setCreate(false);
                                setNotification(false);
                                setVoice(false);
                            }}
                        >
                            J
                        </p>

                        {/* user profile modal */}
                        <div
                            className={
                                userProfile
                                    ? "absolute bg-white min-w-[350px] text-black  border rounded-xl right-[0px] top-[46px]"
                                    : "hidden"
                            }
                        >
                            <div className="flex gap-5 p-5">
                                <div className="bg-gray-500 w-[35px] h-[35px] text-white flex justify-center items-center rounded-full cursor-pointer relative">
                                    <p className="text-xl">J</p>
                                </div>
                                <div>
                                    <p>JDM</p>
                                    <p>@jdm</p>
                                    <p className="text-blue-500 pt-2">
                                        View your channel
                                    </p>
                                </div>
                            </div>
                            <UserProfile />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
