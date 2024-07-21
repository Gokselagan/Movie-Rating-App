export const fetchMovies = async () => {
    const res = await fetch(`${process.env.REACT_APP_MOVIES_API_URL}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
            },
        });
        const data = await res.json();
        return data;
}

export const fetchTvShows = async () => {
    const res = await fetch(`${process.env.REACT_APP_TVSHOWS_API_URL}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
            },
        });
        const data = await res.json();
        return data;
}