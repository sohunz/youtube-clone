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
        <div className="w-full mt-24">
            {data.map((item) => {
                return (
                    <Link
                        to={`/channel/user/${item.username}`}
                        className="max-w-[900px] mx-auto flex justify-between items-center gap-20 mb-6"
                        key={item.id}
                    >
                        <div className="w-[150px] h-[150px] min-w-[150px] min-h-[150px] rounded-full lg:flex md:flex sm:hidden hidden overflow-hidden">
                            <img
                                src={item.profile}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div className="w-full flex flex-row justify-between items-center gap-10">
                            <div>
                                <div className="flex items-center gap-2">
                                    <p className="font-bold text-2xl lg:pt-0 md:pt-0 sm:pt-2 pt-2">
                                        {item.author}
                                    </p>
                                    {item.verified ? (
                                        <VscVerifiedFilled color="gray" />
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="flex flex-wrap items-center text-gray-600 pt-2 ">
                                    <p className="text-[13px]">
                                        @{item.username}
                                    </p>
                                    <PiDot size={25} className=" w-5" />
                                    <p className="text-[13px]">
                                        {item.subscribers} subscribers
                                    </p>
                                </div>
                                <div>
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
