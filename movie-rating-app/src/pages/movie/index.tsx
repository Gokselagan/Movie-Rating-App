import { useQuery } from "@tanstack/react-query";
import React from "react"
import { useParams } from "react-router-dom"
import { Header, Loader, Segment } from "semantic-ui-react";
import { fetchMovieDetails } from "./query.ts";

export const Movie = () => {
    const {id} = useParams<string>();

    const {data, isLoading} = useQuery({queryKey:["movie"], queryFn : () => fetchMovieDetails(id)})

    if(!id) {
        return <div>Invalid Movie..</div>
    }

    if(isLoading) {
        return <Loader active/>
    }

    return(
        <div style={{marginTop:"100px"}}>
            <Segment> 
                <Header>{data.title}</Header>
            </Segment>
        </div>
    )
}