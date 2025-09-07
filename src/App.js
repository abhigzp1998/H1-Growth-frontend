import React from "react";
import VideoPlayer from "../src/player/VideoPlayer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../src/signUp/index";
import Signin from "../src/signIn/index";
import Home from "../src/home/index";
import Splash from "../src/splash/index";
import LiveNews from "../src/liveNews/index";
import Setting from "../src/setting/index";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Splash />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/home" element={<Home />} />
				<Route path="/liveNews" element={<LiveNews />} />
				<Route path="/settings" element={<Setting />} />
				<Route path="/videoplayer" element={<VideoPlayer />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
