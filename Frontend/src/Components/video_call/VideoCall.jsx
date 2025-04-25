import React from "react";
import { Route,Routes } from "react-router-dom";
import RoomPage from "./RoomPage";
// import RoomPage from "./roomPage";
import HomePage from "./HomePage";
// import HomePage from "./HomePage";
const  VideoCall = () => {
    console.log("hello")
    return(
        <div className="video-full-page">
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/room/:roomId" element={<RoomPage/>}/>
    </Routes>
</div>
    );
}
export default VideoCall;