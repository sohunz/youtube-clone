import React, { useContext } from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { RiMoreLine } from "react-icons/ri";
import VidoeRecommended from "../../components/VideoRecommended/VidoeRecommended";
import DataContext from "../../context/DataContext";
import { useParams } from "react-router-dom";
import { VscVerifiedFilled } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import Description from "../../components/Description/Description";
import Comment from "../../components/Comment/Comment";
import SubscribeContext from "../../context/SubscribeContext";

const Video = () => {
    const data = useContext(DataContext);
    const { id } = useParams();

    const dataFiltered = data.filter((item) => item.id == id);

    const { handleSubscribeToggle, subscribe } = useContext(SubscribeContext);

    return (
        <div className="max-w-[1380px] mt-[70px] lg:ml-[70px] md:ml-[70px] sm:ml-3 ml-3 lg:grid md:flex sm:flex flex-col grid-cols-12 gap-3 mx-auto mr-3">
            {dataFiltered.map((item, index) => {
                return (
                    <div className="col-span-8" key={index}>
                        <div className="max-w-[920px] flex justify-center items-center overflow-hidden rounded-2xl">
                            <iframe
                                width="914"
                                // height="520"
                                src={item.src}
                                title={item.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="rounded-2xl lg:h-[520px] md:h-[520px] sm:h-[400px] h-[250px] "
                            ></iframe>
                        </div>
                        <div className="mt-5">
                            <p className="text-[20px] font-bold line-clamp-1">
                                {item.title}
                            </p>
                            <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between mt-3 ">
                                <div className=" flex gap-3 rounded-lg">
                                    <Link
                                        to={`/channel/user/${item.username}`}
                                        className="w-[45px] h-[45px] min-w-[45px] min-h-[45px] rounded-full lg:flex md:flex sm:hidden flex overflow-hidden"
                                    >
                                        <img
                                            src={item.profile}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </Link>
                                    <div className="w-full flex gap-6 items-center justify-between lg:mb-0 md:mb-0 sm:mb-0 mb-5">
                                        <div className="a line-clamp-1">
                                            <span className="flex gap-2 items-center">
                                                <p className="line-clamp-1">
                                                    {item.author}
                                                </p>
                                                {item.verified ? (
                                                    <VscVerifiedFilled color="gray" />
                                                ) : (
                                                    ""
                                                )}
                                            </span>
                                            <p className="text-sm text-gray-700">
                                                {item.subscribers} subscribers
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                subscribe
                                                    ? "flex items-center gap-2 bg-gray-200 rounded-full py-2 px-4 border-0 cursor-pointer w-[160px] h-[40px]"
                                                    : "flex items-center gap-3 bg-black text-white rounded-full px-4 border-0 cursor-pointer w-[110px] justify-center py-[9px] h-[40px] "
                                            }
                                            onClick={handleSubscribeToggle}
                                        >
                                            {subscribe ? (
                                                <IoMdNotificationsOutline
                                                    size={25}
                                                />
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
                                </div>
                                <div className="w-full lg:justify-end md:justify-end sm:justify-end justify-start min-w-100px] flex items-center">
                                    <ul className="flex gap-2">
                                        <li className="flex items-center bg-gray-100 rounded-full overflow-hidden">
                                            <span className="w-full h-full flex items-center gap-2 hover:bg-gray-200 px-3 cursor-pointer">
                                                <BiLike size={23} />
                                                <p>10K</p>
                                            </span>

                                            <span className="flex items-center w-full h-full px-5 hover:bg-gray-200 cursor-pointer">
                                                <BiDislike size={23} />
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2 bg-gray-100 py-2 px-5 rounded-full hover:bg-gray-200 cursor-pointer">
                                            <PiShareFatLight size={23} />
                                            <p>share</p>
                                        </li>
                                        {/* <li className="flex items-center gap-2 bg-gray-100 py-2 px-4 rounded-full hover:bg-gray-200 cursor-pointer">
                                            <LiaDownloadSolid size={23} />
                                            <p>download</p>
                                        </li> */}
                                        <li className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                                            <RiMoreLine size={22} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Description />
                        <Comment />
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
