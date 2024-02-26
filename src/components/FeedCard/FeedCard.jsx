import React, { useContext } from "react";
import { MdAccessTime } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { PiDot } from "react-icons/pi";
import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { VscVerifiedFilled } from "react-icons/vsc";

const FeedCard = () => {
    const data = useContext(DataContext);
    return (
        <>
            {data.map((item) => {
                return (
                    <Link
                        to={`/video/${item.id}`}
                        className="relative group cursor-pointer"
                        key={item.id}
                    >
                        <div className="w-auto h-auto overflow-hidden border rounded-xl relative">
                            <img
                                src={item.thumbnail}
                                alt=""
                                className="h-auto"
                            />
                            <p className="bg-black text-white px-2 rounded-md text-[13px] absolute bottom-1 right-[5px]">
                                {item.timestamp}
                            </p>
                        </div>
                        <div className="w-full flex gap-3 rounded-lg pt-2 relative">
                            <div className="w-full flex gap-3 rounded-lg">
                                <div className="w-[45px] h-[45px] min-w-[45px] min-h-[45px] rounded-full lg:flex md:flex sm:hidden hidden overflow-hidden">
                                    <img
                                        src={item.profile}
                                        alt=""
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div>
                                    <p
                                        className="line-clamp-2 pb-1 text-[15px] pr-5 "
                                        style={{ fontWeight: "500" }}
                                    >
                                        {item.title}
                                    </p>
                                    <p className="text-gray-600 flex items-center gap-1">
                                        {item.author}
                                        {item.verified ? (
                                            <VscVerifiedFilled
                                                size={13}
                                                color="gray"
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </p>
                                    <p className="text-gray-600 flex flex-row items-center text-[13px]">
                                        {item.views} views
                                        <PiDot size={25} className=" w-5" />
                                        {item.upload}
                                    </p>
                                </div>
                                <div className="absolute top-2 right-[-5px] hidden group-hover:block">
                                    <p>
                                        <PiDotsThreeVerticalBold
                                            size={23}
                                            className="cursor-pointer"
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden flex-col gap-1 absolute top-0 right-0 show group-hover:flex">
                            <div className="flex flex-col gap-1 p-2">
                                <div className="bg-black w-[27px] h-[27px] flex justify-center items-center text-white rounded-md opacity-80">
                                    <MdAccessTime size={23} />
                                </div>
                                <div className="bg-black w-[27px] h-[27px] flex justify-center items-center text-white rounded-md opacity-80">
                                    <RiPlayList2Fill size={19} />
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </>
    );
};

export default FeedCard;
