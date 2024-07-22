export const fetchMovieDetails = async (movieId: string) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_MOVIEDETAILS_ACCESS_TOKEN}`
            },
        });
        const data = await res.json();
        return data;
        console.log("data", data);
}