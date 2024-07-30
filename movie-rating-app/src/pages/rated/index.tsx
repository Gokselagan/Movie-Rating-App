import React, { useState } from "react";
import { Container, Header, Menu, MenuItem, Segment } from "semantic-ui-react";
import { DisplayType } from "../homepage/index.tsx";
import { fetchRatedMovieDetails, fetchRatedTvShowsDetails } from "./query.ts";
import { useQuery } from "@tanstack/react-query";
import { ShowCase } from "../homepage/showcase.tsx";

export const Rated = () => {

    const [activeTabs,setActiveTabs] = useState<DisplayType>(DisplayType.Movies);

    const {data : ratedMovies, isLoading: isLoadingRatedMovies} = useQuery({queryKey:["ratedMovies"], queryFn : fetchRatedMovieDetails})

    const {data : ratedTvShows, isLoading: isLoadingRatedTvShows} = useQuery({queryKey:["ratedTvShows"], queryFn : fetchRatedTvShowsDetails})
    return(
        <Container style={{marginTop:"60px"}}>
            <Menu pointing secondary>
                <MenuItem name="Movies" active={activeTabs === DisplayType.Movies} onClick={()=>setActiveTabs(DisplayType.Movies)}></MenuItem>
                <MenuItem name="Tv Show" active={activeTabs === DisplayType.TvShows} onClick={()=>setActiveTabs(DisplayType.TvShows)}></MenuItem>
            </Menu>

            <Segment>
                {activeTabs === DisplayType.Movies ? (
                    <div>
                        <Header as={"h2"}>Rated Movies</Header>
                        <ShowCase  data={ratedMovies?.results} displayType={DisplayType.Movies}/>
                    </div>
                ) : (
                    <div>
                        <Header as={"h2"}>Tv Shows</Header>
                        <ShowCase  data={ratedTvShows?.results} displayType={DisplayType.TvShows}/>
                    </div>
                ) }
            </Segment>
        </Container>
    )
}