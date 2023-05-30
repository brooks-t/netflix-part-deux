// Typically we would store in {process.env.API_KEY}

const API_KEY = "baecf944019e733bf37ca32d27c37349";

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
