import React, { useContext } from "react";
import { MdAccessTime } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { PiDot } from "react-icons/pi";
import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext";

const FeedCard = () => {
    const data = useContext(DataContext);
    return (
        <>
            {data.map((item) => {
                return (
                    <Link
                        to={`/channel/${item.id}`}
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
                                3:05
                            </p>
                        </div>
                        <div className="w-full flex gap-3 rounded-lg pt-2">
                            <div className="w-full flex gap-3 rounded-lg">
                                <div className="bg-gray-500 min-w-[35px] h-[35px] text-white flex justify-center items-center rounded-full cursor-pointer overflow-hidden">
                                    <img
                                        src={item.profile}
                                        className="w-[100%] h-[100%]"
                                    />
                                </div>
                                <div>
                                    <p
                                        className="line-clamp-2 pb-1 text-[15px] pr-1 "
                                        style={{ fontWeight: "500" }}
                                    >
                                        {item.title}
                                    </p>
                                    <p className="text-gray-600">
                                        {item.author}
                                    </p>
                                    <p className="text-gray-600 flex flex-row items-center text-[13px]">
                                        {item.views} views
                                        <PiDot size={25} className=" w-5" />
                                        {item.upload}
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
