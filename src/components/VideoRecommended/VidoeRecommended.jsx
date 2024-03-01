import React, { useContext } from "react";
import { MdAccessTime } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { PiDot } from "react-icons/pi";
import DataContext from "../../context/DataContext";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";

function VidoeRecommended() {
    const data = useContext(DataContext);

    return (
        <>
            {data.map((item, index) => {
                return (
                    <Link
                        to={`/video/${item.id}`}
                        className="w-full relative group cursor-pointer flex flex-row gap-3 overflow-hidden"
                        key={index}
                    >
                        <div className="w-[200px] max-w-[190px] min-w-[180px] h-full overflow-hidden rounded-xl relative">
                            <img src={item.thumbnail} alt="" className="h-50" />
                            <div className="hidden flex-col gap-1 absolute top-0 right-1 show group-hover:flex">
                                <div className="flex flex-col gap-1 px-2">
                                    <div className="bg-black w-[27px] h-[27px] flex justify-center items-center text-white rounded-md opacity-80">
                                        <MdAccessTime size={23} />
                                    </div>
                                    <div className="bg-black w-[27px] h-[27px] flex justify-center items-center text-white rounded-md opacity-80">
                                        <RiPlayList2Fill size={19} />
                                    </div>
                                </div>
                            </div>
                            <p className="bg-black text-white px-2 rounded-md text-[13px] absolute bottom-2 right-2">
                                3:05
                            </p>
                        </div>

                        {/* text */}
                        <div className="w-full flex gap-3 rounded-lg">
                            <div className="w-full flex gap-1 rounded-lg">
                                <div className=" w-full flex flex-col">
                                    <p className="text-md lg:line-clamp-1 md:line-clamp-1 sm:line-clamp-1 line-clamp-2 ">
                                        {item.title}
                                    </p>
                                    <div className="w-full flex flex-col pt-1">
                                        <div className="flex items-center">
                                            <p className="text-gray-600 text-sm flex items-center gap-1 line-clamp-1">
                                                <span className="text-sm line-clamp-1">
                                                    {item.author}
                                                </span>
                                                {item.verified ? (
                                                    <VscVerifiedFilled
                                                        size={13}
                                                        color="gray"
                                                    />
                                                ) : (
                                                    ""
                                                )}
                                            </p>
                                        </div>
                                        <div className="w-full text-gray-600 flex flex-row items-center ">
                                            <span className="flex items-center gap-1">
                                                <p className="text-[12px]">
                                                    {item.views}
                                                </p>
                                                <p className="text-[12px]">
                                                    views
                                                </p>
                                            </span>
                                            <PiDot size={25} className=" w-5" />
                                            <p className="text-[12px] line-clamp-1">
                                                {item.upload}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <p>
                                <PiDotsThreeVerticalBold
                                    size={20}
                                    className="cursor-pointer"
                                />
                            </p> */}
                        </div>
                    </Link>
                );
            })}
        </>
    );
}

export default VidoeRecommended;
