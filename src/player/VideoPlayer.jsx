import React, { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ adSrc, mainSrc, poster }) => {
	const videoRef = useRef(null);
	const playerRef = useRef(null);
	const [isAdPlaying, setIsAdPlaying] = useState(true);

	useEffect(() => {
		if (!videoRef.current) return;

		if (!playerRef.current) {
			playerRef.current = videojs(videoRef.current, {
				controls: true,
				autoplay: true,
				fluid: true,
				muted: false,
				poster,
				sources: [{ src: adSrc, type: "video/mp4" }],
			});

			playerRef.current.on("ended", () => {
				if (isAdPlaying) {
					setIsAdPlaying(false);
					playerRef.current.src({ src: mainSrc, type: "video/mp4" });
					playerRef.current.play();
				}
			});
		}

		return () => {
			if (playerRef.current) {
				playerRef.current.dispose();
				playerRef.current = null;
			}
		};
	}, [adSrc, mainSrc, poster]);

	return (
		<div className="video-player-container" style={{ position: "relative" }}>
			<video
				ref={videoRef}
				className="video-js vjs-big-play-centered"
				playsInline
			/>
		</div>
	);
};

export default VideoPlayer;
