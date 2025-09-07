import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";

const Signin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const navigate = useNavigate();

	const handleSignin = async (e) => {
		e.preventDefault();
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;

			// Check if email is verified
			if (!user.emailVerified) {
				setError("Please verify your email before signing in.");
				setSuccess("");
				return;
			}

			const token = await user.getIdToken();

			const res = await fetch("https://h1-growth.onrender.com/protected", {
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const data = await res.json();
			if (res.ok) {
				localStorage.setItem("user", JSON.stringify(user));
				setSuccess("Signin successful!");
				setError("");
				navigate("/home");
			} else {
				setError(data.detail || "Backend authentication failed");
				setSuccess("");
			}
		} catch (err) {
			console.error(err);
			setError("Invalid credentials or network error");
			setSuccess("");
		}
	};

	return (
		<div className="signup-wrapper">
			<div className="image-side" />
			<div className="form-side">
				<div className="form-container">
					<h1>Sign In</h1>
					<form onSubmit={handleSignin}>
						<input
							type="email"
							placeholder="Email address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<button type="submit">Sign In</button>
					</form>
					{error && <p className="error-message">{error}</p>}
					{success && <p className="success-message">{success}</p>}
					<p className="redirect-text">
						Don't have an account? <Link to="/signup">Sign Up</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Signin;
