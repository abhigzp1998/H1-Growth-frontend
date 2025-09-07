// src/components/LogoutCard.jsx
import React from "react";
import "./index.css";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LogoutCard = () => {
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await signOut(auth);
			localStorage.removeItem("user");
			navigate("/signin");
		} catch (err) {
			console.error("Logout failed:", err);
		}
	};

	return (
		<div className="logout-card" onClick={handleLogout}>
			<h3 className="logout-tittle">Logout</h3>
			<p className="logout-para">Click to securely sign out of your account.</p>
		</div>
	);
};

export default LogoutCard;
