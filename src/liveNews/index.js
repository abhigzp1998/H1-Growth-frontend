// LiveNews.js
import React, { useState, useEffect } from "react";
import "./index.css";
import Header from "../headerbar";

const API_KEY = "cdaac9b5112742e98e7b86585ac3da14";
const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const LiveNews = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchNews = async () => {
		try {
			setLoading(true);
			const response = await fetch(NEWS_URL);
			const data = await response.json();
			if (data.status === "ok") {
				setArticles(data.articles);
			}
		} catch (error) {
			console.error("Error fetching news:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchNews();
		const interval = setInterval(fetchNews, 30000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			{" "}
			<Header />
			<div className="live-news-container">
				<h2>Live News</h2>
				{loading ? (
					<p className="loading-text">Loading news...</p>
				) : (
					<div className="articles-grid">
						{articles.map((article, index) => (
							<div key={index} className="article-card">
								{article.urlToImage && (
									<img src={article.urlToImage} alt={article.title} />
								)}
								<div className="article-card-content">
									<h4>{article.title}</h4>
									<p>{article.description || "No description available."}</p>
									<a
										href={article.url}
										target="_blank"
										rel="noopener noreferrer"
										className="read-more-btn"
									>
										Read more
									</a>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default LiveNews;
