import React, { useState, useCallback, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Channel from "./components/Channel/Channel";
import DataContext from "./context/DataContext";
import data from "../data/data";
import Sidebar from "./components/Sidebar/Sidebar";
import Video from "./pages/Video/Video";
import SubscribeContext from "./context/SubscribeContext";
import CreateVideo from "./components/modal/CreateVideo";

const App = () => {
    const [sidebar, setSidebar] = useState(false);

    const savedSubscribe = localStorage.getItem("subscribe") === "true";
    const [subscribe, setSubscribe] = useState(savedSubscribe);

    const handleSubscribeToggle = useCallback(() => {
        setSubscribe((prevSubscribe) => {
            const newSubscribe = !prevSubscribe;
            localStorage.setItem("subscribe", newSubscribe.toString());
            return newSubscribe;
        });
    }, []);

    const contextValue = { handleSubscribeToggle, subscribe };

    return (
        <div>
            <DataContext.Provider value={data}>
                <SubscribeContext.Provider value={contextValue}>
                    <Navbar setSidebar={setSidebar} sidebar={sidebar} />
                    <Sidebar sidebar={sidebar} />
                    {/* <Category /> */}
                    <Routes>
                        <Route
                            path="/"
                            element={<Homepage sidebar={sidebar} />}
                        />
                        <Route path="/channel/:id" element={<Video />} />
                        <Route
                            path="/channel/user/:username"
                            element={<Channel />}
                        />
                        <Route path="/upload" element={<CreateVideo />} />
                    </Routes>
                </SubscribeContext.Provider>
            </DataContext.Provider>
        </div>
    );
};

export default App;
