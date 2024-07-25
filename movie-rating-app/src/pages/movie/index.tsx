import { useQuery } from "@tanstack/react-query";
import React from "react"
import { useParams } from "react-router-dom"
import { Grid, Header, Loader, Segment, Image, GridColumn, List, ListItem, ListHeader} from "semantic-ui-react";
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
        <div style={{margin:"100px auto", maxWidth:"675px"}}>
            <Segment> 
                <Header>{data.title}</Header>
                <Grid columns={2} divided textAlign="left" style={{marginTop:"20px"}}>
                    <Grid.Row>
                        <GridColumn width={6}>
                            <div
                            style={{
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center",
                                height:"100%"
                            }}
                            >
                                <Image src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} size="medium" centered />
                            </div>
                        </GridColumn>

                        <GridColumn width={10} style={{display:"flex"}}>
                            <List style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                                <ListItem>
                                    <ListHeader>Is The Movie For Adults:</ListHeader>
                                    {data.adult ? "Yes" : "No"}
                                </ListItem>
                                <ListItem>
                                    <ListHeader>Budget:</ListHeader>
                                    {data.budget}
                                </ListItem>
                                <ListItem>
                                    <ListHeader>Genres:</ListHeader>
                                    {data.genres.map((genre: any)=>(
                                        <ListItem key={genre.id}>{genre.name}</ListItem>
                                    ))}
                                </ListItem>
                                <ListItem>
                                    <ListHeader>IMDB ID:</ListHeader>
                                    {data.imdb_id}
                                </ListItem>
                                <ListItem>
                                    <ListHeader>Popularity:</ListHeader>
                                    {data.popularity}
                                </ListItem>
                                <ListItem>
                                    <ListHeader>Production Companies:</ListHeader>
                                    {data.production_companies.map((company: any)=> company.name).join(", ")}
                                </ListItem>
                                <ListItem>
                                    <ListHeader>Release Date:</ListHeader>
                                    {data.release_date}
                                </ListItem>
                                <ListItem>
                                    <ListHeader>Revenue:</ListHeader>
                                    {data.revenue}
                                </ListItem>
                                <ListItem>
                                    <ListHeader>Language:</ListHeader>
                                    {data.original_language}
                                </ListItem>
                            </List>
                        </GridColumn>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}