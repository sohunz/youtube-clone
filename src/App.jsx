import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Video from "./pages/Video/Video";

const App = () => {
    const [sidebar, setSidebar] = useState(false);
    return (
        <div>
            <Navbar setSidebar={setSidebar} sidebar={sidebar} />
            <Routes>
                <Route path="/" element={<Homepage sidebar={sidebar} />} />
                <Route path="/video/:categoryId/:videoId" element={<Video />} />
            </Routes>
        </div>
    );
};

export default App;
