import React, { useContext } from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { RiMoreLine } from "react-icons/ri";
import VidoeRecommended from "../../components/VideoRecommended/VidoeRecommended";
import DataContext from "../../context/DataContext";
import { useParams } from "react-router-dom";

const Video = () => {
    const data = useContext(DataContext);
    const { username } = useParams();

    const dataFiltered = data.filter((item) => item.username == username);

    return (
        <div className="max-w-[1410px] mx-auto mt-[70px] grid grid-cols-12">
            {dataFiltered.map((item, index) => {
                return (
                    <div className="col-span-8" key={index}>
                        <div className="w-[920px] h-[525px] flex justify-center items-center overflow-hidden rounded-2xl">
                            <iframe
                                width="914"
                                height="520"
                                src={item.src}
                                title={item.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="rounded-2xl "
                            ></iframe>
                        </div>
                        <div className="mt-5">
                            <p className="text-2xl font-bold">{item.title}</p>
                            <div className="flex justify-between mt-3">
                                <div className="w-full flex gap-3 rounded-lg">
                                    <div className="bg-gray-500 min-w-[45px] h-[45px] text-white flex justify-center items-center rounded-full cursor-pointer overflow-hidden ">
                                        <img
                                            src={item.channelProfile}
                                            className="w-[100%] h-[100%]"
                                        />
                                    </div>
                                    <div className="flex gap-6 items-center">
                                        <div>
                                            <p>{item.author}</p>
                                            <p className="text-sm text-gray-700">
                                                {item.subscribers} subscribers
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-center gap-3 bg-black text-white rounded-full px-4 border-0 cursor-pointer">
                                            <p className="p-2">Subscribe</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <ul className="flex gap-3">
                                        <li className="flex items-center gap-2 bg-gray-100 py-2 px-4 rounded-full">
                                            <BiLike size={23} />
                                            10K
                                            <BiDislike size={23} />
                                        </li>
                                        <li className="flex items-center gap-2 bg-gray-100 py-2 px-4 rounded-full">
                                            <PiShareFatLight size={23} />
                                            <p>share</p>
                                        </li>
                                        <li className="flex items-center gap-2 bg-gray-100 py-2 px-4 rounded-full">
                                            <LiaDownloadSolid size={23} />
                                            <p>download</p>
                                        </li>
                                        <li className="bg-gray-100 p-2 mr-5 rounded-full">
                                            <RiMoreLine size={22} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* right side */}
            <div className="col-span-4 flex flex-col gap-3">
                <VidoeRecommended />
            </div>
        </div>
    );
};

export default Video;
