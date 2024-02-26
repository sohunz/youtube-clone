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
import Gaming from "./pages/Navbar/Gaming";
import Help from "./pages/Navbar/Help";
import History from "./pages/Navbar/History";
import Music from "./pages/Navbar/Music";
import ReportHistory from "./pages/Navbar/ReportHistory";
import SendFeedback from "./pages/Navbar/SendFeedback";
import Setting from "./pages/Navbar/Setting";
import Short from "./pages/Navbar/Short";
import Sport from "./pages/Navbar/Sport";
import Subscription from "./pages/Navbar/Subscription";
import Trending from "./pages/Navbar/Trending";
import WatchLater from "./pages/Navbar/WatchLater";
import YourChannel from "./pages/Navbar/YourChannel";
import YourClip from "./pages/Navbar/YourClip";
import YourVideo from "./pages/Navbar/YourVideo";
import YoutubeKids from "./pages/Navbar/YoutubeKids";
import YoutubePremium from "./pages/Navbar/YoutubePremium";
import YoutubeStudio from "./pages/Navbar/YoutubeStudio";
import YoutubeMusic from "./pages/Navbar/YoutubeMusic";
import EmptyPage from "./components/EmptyPage/EmptyPage";

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
                    <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
                    {/* <Category /> */}
                    <Routes>
                        <Route path="/empty" element={<EmptyPage />} />
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
                        <Route path="/short" element={<Short />} />
                        <Route path="/gaming" element={<Gaming />} />
                        <Route path="/help" element={<Help />} />
                        <Route path="/history" element={<History />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/report" element={<ReportHistory />} />
                        <Route path="/feedback" element={<SendFeedback />} />
                        <Route path="/setting" element={<Setting />} />
                        <Route path="/sport" element={<Sport />} />
                        <Route
                            path="/subscription"
                            element={<Subscription />}
                        />
                        <Route path="/trending" element={<Trending />} />
                        <Route path="/later" element={<WatchLater />} />
                        <Route path="/channel" element={<YourChannel />} />
                        <Route path="/clip" element={<YourClip />} />
                        <Route path="/video" element={<YourVideo />} />
                        <Route path="/kids" element={<YoutubeKids />} />
                        <Route path="/premium" element={<YoutubePremium />} />
                        <Route
                            path="/youtube-music"
                            element={<YoutubeMusic />}
                        />
                        <Route path="/studio" element={<YoutubeStudio />} />
                    </Routes>
                </SubscribeContext.Provider>
            </DataContext.Provider>
        </div>
    );
};

export default App;
