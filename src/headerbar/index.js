import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./index.css";

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const tabs = [
		{ name: "Home", path: "/home" },
		{ name: "Live", path: "/liveNews" },
		{ name: "Settings", path: "/settings" },
	];

	const handleClick = (path) => {
		navigate(path);
	};

	return (
		<header className="navbar">
			<h2 className="logo">Growth OTT</h2>
			<nav>
				<ul>
					{tabs?.map((tab) => (
						<li
							key={tab.path}
							onClick={() => handleClick(tab.path)}
							className={location.pathname === tab.path ? "active" : ""}
						>
							{tab.name}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
