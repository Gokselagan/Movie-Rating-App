import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { ShowCase } from "./showcase.tsx";
import { fetchMovies, fetchTvShows } from "./query.ts";
import { useQuery } from "@tanstack/react-query";

export enum DisplayType {
    Movies = "movies",
    TvShows = "tvshows",
}

export const HomePage = () => {

    const [displayType, setDisplayType] = useState<DisplayType>(DisplayType.Movies);

    const { data: movieData, isLoading: isLoadingMovies } = useQuery({ queryKey: ["movies"], queryFn: fetchMovies })

    const { data: tvShowsData, isLoading: isLoadingTvShows } = useQuery({ queryKey: ["tvshows"], queryFn: fetchTvShows })

    return (
        <div style={{ marginTop: "70px", height: "auto", backgroundColor:"black" }}>
            <Button.Group>
                <Button color={displayType === DisplayType.Movies ? "red" : "black"} onClick={() => setDisplayType(DisplayType.Movies)}>Movies</Button>

                <Button color={displayType === DisplayType.TvShows ? "red" : "black"} onClick={() => setDisplayType(DisplayType.TvShows)}>Tv Shows</Button>
            </Button.Group>

            {
                isLoadingMovies || isLoadingTvShows ? (
                    <div>Loading...</div>
                ) : (
                    <div style={{ marginTop: "30px" }}>
                        {displayType === DisplayType.Movies ?
                            <ShowCase data={ movieData.results } displayType={DisplayType.Movies} /> :
                            <ShowCase data={ tvShowsData.results } displayType={DisplayType.TvShows} />}
                    </div>
                )
            }
        </div >
    )
}