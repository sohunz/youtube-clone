import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Category from "./components/Category/Category";
import Channel from "./components/Channel/Channel";
import DataContext from "./context/DataContext";
import data from "../data/data";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
    const [sidebar, setSidebar] = useState(false);
    return (
        <div>
            <DataContext.Provider value={data}>
                <Navbar setSidebar={setSidebar} sidebar={sidebar} />
                <Sidebar sidebar={sidebar} />
                {/* <Category /> */}
                <Routes>
                    <Route path="/" element={<Homepage sidebar={sidebar} />} />
                    <Route path="/channel/:username" element={<Channel />} />
                </Routes>
            </DataContext.Provider>
        </div>
    );
};

export default App;
