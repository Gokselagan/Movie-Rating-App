import React, { useState } from "react";
import { DisplayType } from "./index.tsx";
import { Card, CardContent, CardDescription, CardHeader, CardMeta, Form, FormField, FormGroup, FormInput, Grid, GridColumn, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { rateMovie, rateTvShow } from "./mutation.ts";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface DisplayData {
    id: number;
    overview: string;
    poster_path: string;
    title?: string;
    name?: string;
    vote_average: number;
    release_date: string;
}

interface Props {
    data: DisplayData[];
    displayType: DisplayType;
}

export const ShowCase = (props: Props) => {

    const { data, displayType } = props;
    const [rating, setRating] =useState<number>(0);

    const onSuccess = () => {
        toast.success("Your rated was successfully!",{
            autoClose:2000
        });
    }

    const onError = () => {
        toast.error("Oops something went wrong!",{
            autoClose:4000
        });
    }
 
    const {mutate: rateMovieMutation} = useMutation({mutationKey: ["rateMovie"], mutationFn: (id: number)=>rateMovie(id, rating),
        onSuccess: onSuccess,
        onError: onError,
    });

    const {mutate: rateTvShowMutation } = useMutation({mutationKey: ["rateTvShow"], mutationFn: (id: number)=>rateTvShow(id, rating),
    onSuccess: onSuccess,
    onError: onError,
    });

    const rate = displayType === DisplayType.Movies ? rateMovieMutation : rateTvShowMutation;

    return (
        <Grid
            columns={3}
            stackable
            centered
            verticalAlign="top"
            padded="vertically"
            style={{ margin: "0px auto", maxWidth: "1200px" }}
        >
            {data.map((displayData: DisplayData) => (
                <GridColumn key={displayData.id} style={{display:"flex", alignItems:"center"}}>
                    <Link to={`/${displayType === DisplayType.Movies ? "movie" : "tvshow"}/${displayData.id}`}>
                        <Card style={{ backgroundColor: "red", height: "450px" }}>
                            <Image src={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`} size="small" />
                            <CardContent>
                                <CardHeader style={{ color: "white", fontWeight: "800" }}>{displayType === DisplayType.Movies ? displayData.title : displayData.name}</CardHeader>
                                <CardMeta style={{ color: "black", fontWeight: "800" }}>{`Release Date: ${displayData.release_date} | Rating: ${displayData.vote_average.toFixed(1)}`}</CardMeta>
                                <CardDescription style={{ color: "white", fontWeight: "600" }}>{displayData.overview.slice(0, 250) + "..."}</CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                    <Form style={{marginTop:"10px"}}>
                        <FormGroup inline>
                            <FormField>
                                <FormInput type="number" min="0" max="10" step="0.5" onChange={(e)=>setRating(Number(e.target.value))} action={{
                                    color:"red",
                                    labelPosition: "right",
                                    icon:"star",
                                    content:"Rate",
                                    onClick: () => rate(displayData.id)
                                }} />
                            </FormField>
                        </FormGroup>
                    </Form>
                </GridColumn>
            ))
            }
        </Grid>
    )
}

