import { useQuery } from "@tanstack/react-query";
import React from "react"
import { useParams } from "react-router-dom"
import { Grid, GridColumn, Header, List, ListHeader, ListItem, Loader, Segment, Image, ListDescription, Accordion, Card } from "semantic-ui-react";
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

    const seasonsPanels = data.seasons.map((season: any)=>({
        key:season.id,
        title:`Season ${season.season_number}`,
        content :{
            content: (
                <Card 
                style={{height:"70px"}}
                meta={season.air_date}
                description={`${season.episode_count} episodes`}
                />
            )
        }
    }))

    return(
        <div style={{margin:"100px auto"}}>
            <Segment> 
            <Header>{data.name}</Header>
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
                                    <ListHeader>Created By :</ListHeader>
                                    {data.created_by.map((creator:any)=>creator.name).join(", ")}
                                </ListItem>
                                <ListItem>
                                    <ListHeader>Episodes Run Time :</ListHeader>
                                    {data.episode_run_time.join(", ")}
                                </ListItem>
                                <ListItem>
                                    <ListHeader>Genres :</ListHeader>
                                    {data.genres.map((genre: any)=>(
                                        <ListItem key={genre.id}>{genre.name}</ListItem>
                                    ))}
                                </ListItem>
                                <ListItem>
                                    <ListHeader>First Air Date :</ListHeader>
                                    {data.first_air_date}
                                </ListItem>
                                <ListItem>
                                    <ListHeader>Networks :</ListHeader>
                                    {data.networks.map((network: any)=>(
                                        <Image 
                                        key={network.id}
                                        src={`https://image.tmdb.org/t/p/original/${network.logo_path}`}
                                        size="small"
                                        />
                                    ))}
                                </ListItem>
                                <ListItem>
                                    <ListHeader>Production Companies :</ListHeader>
                                    {data.production_companies.map((company: any)=> company.name).join(", ")}
                                </ListItem>
                                <ListItem>
                                    <ListHeader>Number Of Episodes :</ListHeader>
                                    {data.number_of_episodes}
                                </ListItem>
                                <ListItem>
                                    <ListHeader>Number Of seasons :</ListHeader>
                                    {data.number_of_seasons}
                                </ListItem>
                                <ListItem>
                                    <ListHeader>Language:</ListHeader>
                                    {data.original_language}
                                </ListItem>
                                <ListItem>
                                    <ListHeader>Seasons:</ListHeader>
                                    <ListDescription style={{height:"200px", overFlowY:"scroll"}}>
                                        <Accordion 
                                        defaultActiveIndex={0}
                                        panels={seasonsPanels}
                                        styled
                                        />
                                    </ListDescription>
                                </ListItem>
                            </List>
                        </GridColumn>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}