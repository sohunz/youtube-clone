import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import { useParams } from "react-router-dom";

const Description = () => {
    const data = useContext(DataContext);
    const { id } = useParams();

    const dataFiltered = data.filter((item) => item.id == id);

    return (
        <>
            {dataFiltered.map((item) => {
                return (
                    <div className="mr-5 mt-5 rounded-lg p-4 bg-gray-100">
                        <div className="w-[70%] font-[11px]">
                            <div className="flex items-center">
                                <p>{item.views} views </p> &nbsp;&nbsp;
                                <p>{item.upload}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 line-clamp-4">
                                    {item.description}
                                </p>
                                <span className="text-black cursor-pointer">
                                    ...see more
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Description;
