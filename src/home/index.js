import React from "react";
import Logout from "../logout/index";
import { useNavigate } from "react-router-dom";
import Header from "../headerbar";
import "./index.css";

const movies = [
	{
		id: 1,
		title: "First Place",
		adSrc: "https://h1-growth.onrender.com/statics/ads.mp4",
		mainSrc: "https://h1-growth.onrender.com/statics/sample.mp4",
		poster: "https://h1-growth.onrender.com/statics/poster.jpeg",
		midAdSrc: "https://h1-growth.onrender.com/midsads/midads.mp4",
	},
	{
		id: 1,
		title: "Aise Kyu",
		adSrc: "https://h1-growth.onrender.com/statics2/ads.mp4",
		mainSrc: "https://h1-growth.onrender.com/statics2/sample.mp4",
		poster: "https://h1-growth.onrender.com/statics2/poster.jpeg",
		midAdSrc: "https://h1-growth.onrender.com/midsads/midads.mp4",
	},
	{
		id: 1,
		title: "Die With a Smile",
		adSrc: "https://h1-growth.onrender.com/statics3/ads.mp4",
		mainSrc: "https://h1-growth.onrender.com/statics3/sample.mp4",
		poster: "https://h1-growth.onrender.com/statics3/poster.jpeg",
		midAdSrc: "https://h1-growth.onrender.com/midsads/midads.mp4",
	},
];

const Home = () => {
	const navigate = useNavigate();

	const goToVideoPlayer = (movie) => {
		navigate("/videoplayer", { state: { movie } }); // Pass object via state
	};
	return (
		<div className="home-container">
			<Header />

			<section className="movies-section">
				<h3>Latest Releases</h3>
				<div className="movies-grid">
					{movies.map((movie) => (
						<div
							className="movie-card"
							key={movie.id + Math.random()} // ensure unique key
							onClick={() => goToVideoPlayer(movie)}
						>
							<img src={movie.poster} alt={movie.title} />
							<h4>{movie.title}</h4>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Home;
