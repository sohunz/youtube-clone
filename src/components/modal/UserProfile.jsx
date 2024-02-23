import React from "react";
import { PiUserSquareLight } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";
import { PiSignIn } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { RiShieldUserLine } from "react-icons/ri";
import { MdOutlineLightMode } from "react-icons/md";
import { HiOutlineLanguage } from "react-icons/hi2";
import { TbUserShield } from "react-icons/tb";
import { CiGlobe } from "react-icons/ci";
import { FaRegKeyboard } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import "../../components/Sidebar/Scrollbar.css";

const UserProfile = () => {
    return (
        <div>
            <hr />
            <div className="py-2 px-2">
                <ul>
                    <li className="flex items-center gap-4 py-2 hover:bg-gray-100 px-3 rounded-md">
                        <FaGoogle size={23} />
                        <p>Google Account</p>
                    </li>
                    <li className="flex items-center gap-4 py-2 hover:bg-gray-100 px-3 rounded-md">
                        <PiUserSquareLight size={24} />
                        <p>Switch Account</p>
                    </li>
                    <li className="flex items-center gap-4 py-2 hover:bg-gray-100 px-3 rounded-md">
                        <PiSignIn size={24} />
                        <p>Sign out</p>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="py-2 px-2">
                <ul>
                    <li className="flex items-center gap-4 py-2 hover:bg-gray-100 px-3 rounded-md">
                        <BiMoviePlay size={23} />
                        <p>YouTube Studio</p>
                    </li>
                    <li className="flex items-center gap-4 py-2 hover:bg-gray-100 px-3 rounded-md">
                        <PiCurrencyCircleDollar size={24} />

                        <p>Purchases and memberships</p>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="py-2 px-2">
                <ul>
                    <li className="flex items-center gap-4 py-2 hover:bg-gray-100 px-3 rounded-md">
                        <RiShieldUserLine size={23} />
                        <p>Your data in YouTube</p>
                    </li>
                    <li className="flex items-center gap-4 py-2 hover:bg-gray-100 px-3 rounded-md">
                        <MdOutlineLightMode size={23} />
                        <p>Appearance: Light</p>
                    </li>
                    <li className="flex items-center gap-4 py-2 hover:bg-gray-100 px-3 rounded-md">
                        <HiOutlineLanguage size={23} />
                        <p>Language: English</p>
                    </li>
                    <li className="flex items-center gap-4 py-2 hover:bg-gray-100 px-3 rounded-md">
                        <TbUserShield size={23} />
                        <p>Restricted Mode: Off</p>
                    </li>
                    <li className="flex items-center gap-4 py-2 hover:bg-gray-100 px-3 rounded-md">
                        <CiGlobe size={23} />
                        <p>Location: Cambodia</p>
                    </li>

                    <li className="flex items-center gap-4 py-2 hover:bg-gray-100 px-3 rounded-md">
                        <FaRegKeyboard size={23} />
                        <p>Keyboard shortcuts</p>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="py-2 px-2">
                <ul>
                    <li className="flex items-center gap-4 py-2 hover:bg-gray-100 px-3 rounded-md">
                        <IoSettingsOutline size={23} />
                        <p>Settings</p>
                    </li>
                </ul>
            </div>
            {/* <hr />
            <div className="py-2 px-2">
                <ul>
                    <li className="flex items-center gap-4 py-2 hover:bg-gray-100 px-3 rounded-md">
                        <IoIosHelpCircleOutline size={23} />
                        <p>Help</p>
                    </li>
                    <li className="flex items-center gap-4 py-2 hover:bg-gray-100 px-3 rounded-md">
                        <MdOutlineFeedback size={23} />
                        <p>Send feedback</p>
                    </li>
                </ul>
            </div> */}
        </div>
    );
};

export default UserProfile;
