import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
	const [movies, setMovies] = useState([]);

	const base_url = "https://image.tmdb.org/t/p/original/";

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}

		fetchData();
	}, [fetchUrl]);

	return (
		<div className="row">
			<h2>{title}</h2>

			{/* The following code creates the poster rows. It checks to see if it's a large row or small row and applies the correct image type. It also checks to see if the images exist before populating them */}
			<div className="row__posters">
				{movies.map(
					(movie) =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<img
								className={`row__poster ${isLargeRow && "row__posterLarge"}`}
								key={movie.id}
								src={`${base_url}${
									isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.name}
							/>
						)
				)}
			</div>
		</div>
	);
}

export default Row;
