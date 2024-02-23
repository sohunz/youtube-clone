import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import "../../components/Sidebar/Scrollbar.css";
import { Link } from "react-router-dom";

const Notification = ({ notification, setNotification }) => {
    const data = useContext(DataContext);

    return (
        <div className="w-full h-[80vh] overflow-y-scroll custom-scrollbar">
            {data.map((item) => {
                return (
                    <ul className="overflow-hidden" key={item.id}>
                        <Link
                            to={`/channel/${item.username}`}
                            onClick={() => setNotification(!notification)}
                        >
                            <li className="flex justify-between gap-5 hover:bg-gray-100 px-3 py-7 rounded-lg cursor-pointer">
                                <div className="flex gap-3">
                                    <img
                                        src={item.profile}
                                        className="h-[50px] rounded-full"
                                    />

                                    <div>
                                        <p>
                                            <span>
                                                {item.author} uploaded:{" "}
                                            </span>
                                            {item.title}
                                        </p>
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
                        </Link>
                    </ul>
                );
            })}
        </div>
    );
};

export default Notification;
