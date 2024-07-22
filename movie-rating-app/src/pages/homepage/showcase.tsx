import React from "react";
import { DisplayType } from "./index.tsx";
import { Card, CardContent, CardDescription, CardHeader, CardMeta, Grid, GridColumn, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

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

    console.log("data", data);

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
                <GridColumn key={displayData.id}>
                    <Link to={`/${displayType === DisplayType.Movies ? "movie" : "tvshow"}/${displayData.id}`}>
                        <Card style={{ backgroundColor: "red" }}>
                            <Image src={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`} />
                            <CardContent>
                                <CardHeader style={{ color: "white", fontWeight: "800" }}>{displayType === DisplayType.Movies ? displayData.title : displayData.name}</CardHeader>
                                <CardMeta style={{ color: "black", fontWeight: "800" }}>{`Release Date: ${displayData.release_date} | Rating: ${displayData.vote_average}`}</CardMeta>
                                <CardDescription style={{ color: "white", fontWeight: "600" }}>{displayData.overview.slice(0, 250) + "..."}</CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                </GridColumn>
            ))
            }
        </Grid>
    )
}

