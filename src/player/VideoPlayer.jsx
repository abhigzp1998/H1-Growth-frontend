import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { useLocation } from "react-router-dom";

const VideoPlayer = () => {
	const videoRef = useRef(null);
	const playerRef = useRef(null);
	const isAdPlayingRef = useRef(true);
	const isMidAdPlayedRef = useRef(false);

	const location = useLocation();
	const adSrc = location.state?.movie?.adSrc;
	const midAdSrc = location.state?.movie?.midAdSrc;
	const mainSrc = location.state?.movie?.mainSrc;
	const poster = location.state?.movie?.poster;

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

			const player = playerRef.current;

			player.on("ended", () => {
				if (isAdPlayingRef.current) {
					isAdPlayingRef.current = false;
					player.src({ src: mainSrc, type: "video/mp4" });
					player.play();
				}
			});

			player.on("timeupdate", () => {
				const currentTime = player.currentTime();

				if (
					!isAdPlayingRef.current &&
					!isMidAdPlayedRef.current &&
					currentTime >= 90
				) {
					isMidAdPlayedRef.current = true;
					playMidAd();
				}
			});

			const playMidAd = () => {
				const currentTime = player.currentTime();
				player.pause();

				const savedTime = currentTime;
				const savedSrc = mainSrc;

				player.src({ src: midAdSrc, type: "video/mp4" });
				player.play();

				player.one("ended", () => {
					player.src({ src: savedSrc, type: "video/mp4" });
					player.play();
					player.one("loadedmetadata", () => {
						player.currentTime(savedTime);
					});
				});
			};
		}

		return () => {
			if (playerRef.current) {
				playerRef.current.dispose();
				playerRef.current = null;
			}
		};
	}, [adSrc, midAdSrc, mainSrc, poster]);

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
