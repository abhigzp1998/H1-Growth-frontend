import React from "react";
import VideoPlayer from "../src/player/VideoPlayer";

const App = () => {
	return (
		<div>
			<VideoPlayer
				adSrc="http://localhost:8000/statics/ads.mp4"
				mainSrc="http://localhost:8000/statics/sample.mp4"
				poster="http://localhost:8000/statics/poster.jpeg"
				width={800}
				height={450}
			/>
		</div>
	);
};

export default App;
