import { useQuery } from "@tanstack/react-query";
import React from "react"
import { useParams } from "react-router-dom"
import { Header, Loader, Segment } from "semantic-ui-react";
import { fetchTvShowDetails } from "./query.ts";

export const TvShow = () => {
    const {id} = useParams<string>();

    const {data, isLoading} = useQuery({queryKey:["tvshow"], queryFn : () => fetchTvShowDetails(id)})

    if(!id) {
        return <div>Invalid Tv Show..</div>
    }

    if(isLoading) {
        return <Loader active/>
    }

    return(
        <div style={{marginTop:"100px"}}>
            <Segment> 
                <Header>{data.name}</Header>
            </Segment>
        </div>
    )
}