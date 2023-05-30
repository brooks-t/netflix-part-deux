import React from "react";
import "./Banner.css";

function Banner() {
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://preview.redd.it/zc3nnfklwz941.jpg?auto=webp&s=c0bcbce019bc5f774529821335c2b962330c3db5")`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">Movie Name</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{truncate(
						`lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsuem lorem ipsume lorem ipsum`,
						150
					)}
				</h1>

				<div className="banner--fadeBottom"></div>
			</div>
		</header>
	);
}

export default Banner;
