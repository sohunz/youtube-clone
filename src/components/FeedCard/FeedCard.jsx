import React from "react";
import { MdAccessTime } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const FeedCard = () => {
    return (
        <div className="relative group cursor-pointer">
            <div className="w-auto h-auto overflow-hidden border rounded-xl relative">
                <img
                    src="https://static.sproutgigs.com/gigs/2022/10/28/0099ee2e/b3d86567.jpg"
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
                            src="https://yt3.googleusercontent.com/ZJay_PuGajAmgtcOUGKdaJYGqI1RWAXoGiWZadFUcGn9E1Ubm-uMQ5NUGjWm1ThoG-zE8GHkxw=s900-c-k-c0x00ffffff-no-rj"
                            alt=""
                            className="w-[100%] h-[100%]"
                        />
                    </div>
                    <div>
                        <p className="line-clamp-2 pb-1 text-[15px] pr-1 font-bold">
                            WEB DEVELOPMENT How To Become a Pro Web Development
                            in 2024
                        </p>
                        <p className="text-gray-600">Travis Scott</p>
                        <p className="text-gray-600">295K 1 hour ago</p>
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
        </div>
    );
};

export default FeedCard;
