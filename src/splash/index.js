import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import "./index.css";

const Splash = () => {
	const navigate = useNavigate();
	const title = "Welcome to Growth";

	useEffect(() => {
		const timeout = setTimeout(() => {
			const storedUser = localStorage.getItem("user");

			if (storedUser) {
				navigate("/home");
			} else {
				navigate("/signin");
			}
		}, 3000);

		return () => clearTimeout(timeout);
	}, [navigate]);

	return (
		<div className="splash-container">
			<h1 className="animated-title">
				{title.split("").map((char, index) => (
					<span
						key={index}
						className="animated-letter"
						style={{ animationDelay: `${index * 0.1}s` }}
					>
						{char === " " ? "\u00A0" : char}
					</span>
				))}
			</h1>
		</div>
	);
};

export default Splash;
