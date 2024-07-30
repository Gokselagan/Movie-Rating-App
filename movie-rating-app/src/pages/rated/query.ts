export const fetchRatedMovieDetails = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/movies?language=en-US&page=1&sort_by=created_at.asc&api_key=${process.env.REACT_APP_API_KEY}`,
    );
    const data = await res.json();
    console.log("movie data", data);
    return data;
}

export const fetchRatedTvShowsDetails = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/guest_session/${localStorage.getItem("guest_session_id")}/rated/tv?language=en-US&page=1&sort_by=created_at.asc&api_key=${process.env.REACT_APP_API_KEY}`,
    );
    const data = await res.json();
    console.log("tv show data", data);
    return data;
}