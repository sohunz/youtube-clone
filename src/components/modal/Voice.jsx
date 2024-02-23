import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { HiMiniMicrophone } from "react-icons/hi2";

const Voice = ({ setvoice, voice }) => {
    return (
        <div className="flex flex-col justify-center items-center p-10">
            <div
                className="absolute top-3 right-3 hover:bg-gray-100 rounded-full p-2 cursor-pointer"
                onClick={() => setvoice(!voice)}
            >
                <IoCloseOutline size={30} />
            </div>
            <div className="mb-20">
                <p className="text-3xl pb-5">Search with your voice</p>
                <p className="text-gray-600">
                    To search by voice, go to your browser settings and allow
                    access to microphone
                </p>
            </div>
            <div className="bg-gray-200 p-5 rounded-full cursor-pointer">
                <HiMiniMicrophone
                    size={40}
                    width={40}
                    height={40}
                    className="cursor-pointer"
                />
            </div>
        </div>
    );
};

export default Voice;
