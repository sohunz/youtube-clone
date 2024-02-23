import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import "../../components/Sidebar/Scrollbar.css";

const Notification = () => {
    const data = useContext(DataContext);

    return (
        <div className="w-full h-[80vh] overflow-y-scroll custom-scrollbar">
            {data.map((item) => {
                return (
                    <ul className="mt-3 overflow-hidden">
                        <li className="flex justify-between gap-5 hover:bg-gray-100 px-3 py-7 rounded-lg cursor-pointer">
                            <div className="flex gap-3">
                                <img
                                    src={item.profile}
                                    className="h-[50px] rounded-full"
                                />

                                <div>
                                    <p>{item.title}</p>
                                    <p className="text-[12px] text-gray-600 pt-2">
                                        {item.upload}
                                    </p>
                                </div>
                            </div>

                            <img
                                src={item.thumbnail}
                                alt=""
                                className="h-[60px]"
                            />
                        </li>
                    </ul>
                );
            })}
        </div>
    );
};

export default Notification;
