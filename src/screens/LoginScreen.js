import React, { useState, useEffect } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
	const [signIn, setSignIn] = useState(false);

	return (
		<div className="loginScreen">
			<div className="loginScreen__background">
				<img
					src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
					alt="Netflix logo"
					className="loginScreen__logo"
				/>
				<button onClick={() => setSignIn(true)} className="loginScreen__button">
					Sign In
				</button>
			</div>
			<div className="loginScreen__body">
				{signIn ? (
					<SignupScreen />
				) : (
					<>
						<h1>Unlimited films, TV programmes and more.</h1>
						<h2>Watch anywhere. Cancel at any time.</h2>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h3>

						<div className="loginScreen__input">
							<form>
								<input type="email" placeholder="Email Address" />
								<button
									onClick={() => setSignIn(true)}
									className="loginScreen__getStarted"
								>
									GET STARTED
								</button>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default LoginScreen;
