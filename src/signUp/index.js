import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const navigate = useNavigate();
	const handleSignup = async (e) => {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			setSuccess("Signup successful!");
			setError("");
			setEmail("");
			setPassword("");
			setTimeout(() => {
				navigate("/signin");
			}, 1000);
		} catch (err) {
			setError(err.message);
			setSuccess("");
		}
	};

	return (
		<div className="signup-wrapper">
			<div className="image-side" />
			<div className="form-side">
				<div className="form-container">
					<h1>Create your account</h1>
					<form onSubmit={handleSignup}>
						<input
							type="email"
							placeholder="Email address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							autoComplete="email"
						/>
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							autoComplete="new-password"
						/>
						<button type="submit">Sign Up</button>
					</form>
					{error && <p className="error-message">{error}</p>}
					{success && <p className="success-message">{success}</p>}
				</div>
			</div>
		</div>
	);
};

export default Signup;
