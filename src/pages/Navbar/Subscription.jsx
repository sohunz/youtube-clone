import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import { PiDot } from "react-icons/pi";
import SubscribeContext from "../../context/SubscribeContext";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Subscription = () => {
    const data = useContext(DataContext);
    const { subscribe, handleSubscribeToggle } = useContext(SubscribeContext);

    return (
        <div className="mt-24 lg:ml-[70px] md:ml-[70px] sm:ml-0 ml-0 px-3">
            {data.map((item) => {
                return (
                    <Link
                        to={`/channel/user/${item.username}`}
                        className="max-w-[900px] mx-auto flex justify-between items-center lg:gap-20 md:gap-20 sm:gap-5 gap-5 mb-6"
                        key={item.id}
                    >
                        <div className="lg:w-[150px] md:w-[150px] sm:w-[50px] w-[50px]  lg:h-[150px] md:h-[150px] sm:h-[50px] h-[50px] lg:min-w-[150px] md:min-w-[150px] sm:min-w-[50px] min-w-[50px] lg:min-h-[150px] md:min-h-[150px] sm:min-h-[50px] min-h-[50px] rounded-full flex overflow-hidden">
                            <img
                                src={item.profile}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div className="w-full flex flex-row justify-between items-center gap-10">
                            <div>
                                <div className="flex items-center gap-2">
                                    <p className="lg:font-bold md:font-bold sm:font-normal font-medium lg:text-2xl md:text-2xl sm:text-xl text-lg lg:pt-0 md:pt-0 sm:pt-2 pt-2 line-clamp-1">
                                        {item.author}
                                    </p>
                                    <span className="lg:block md:block sm:hidden hidden">
                                        {item.verified ? (
                                            <VscVerifiedFilled color="gray" />
                                        ) : (
                                            ""
                                        )}
                                    </span>
                                </div>
                                <div className="lg:flex md:flex sm:flex hidden flex-wrap items-center text-gray-600 pt-2 ">
                                    <p className="text-[13px]">
                                        @{item.username}
                                    </p>
                                    <PiDot size={25} className=" w-5" />
                                    <p className="text-[13px]">
                                        {item.subscribers} subscribers
                                    </p>
                                </div>
                                <div className="lg:block md:block sm:block hidden">
                                    <p className="text-[13px] text-gray-600 line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                            <div
                                className={
                                    subscribe
                                        ? "flex items-center gap-2 bg-gray-200 rounded-full py-2 px-4 border-0 cursor-pointer min-w-[160px] h-[40px]"
                                        : "flex items-center gap-3 bg-black text-white rounded-full px-4 border-0 cursor-pointer min-w-[120px] justify-center py-[9px] h-[40px] "
                                }
                                onClick={handleSubscribeToggle}
                            >
                                {subscribe ? (
                                    <IoMdNotificationsOutline size={25} />
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
                    </Link>
                );
            })}
        </div>
    );
};

export default Subscription;
