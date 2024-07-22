import React from "react";
import { DisplayType } from "./index.tsx";
import { Card, CardContent, CardDescription, CardHeader, CardMeta, Grid, GridColumn, Image } from "semantic-ui-react";

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
        >
            {data.map((displayData: DisplayData) => (
                <GridColumn key={displayData.id}>
                    <Card>
                        <Image src={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`} />
                        <CardContent>
                            <CardHeader>{displayType === DisplayType.Movies ? displayData.title : displayData.name}</CardHeader>
                            <CardMeta>{`Release Date: ${displayData.release_date} | Rating: ${displayData.vote_average}`}</CardMeta>
                            <CardDescription>{displayData.overview.slice(0, 250) + "..."}</CardDescription>
                        </CardContent>
                    </Card>
                </GridColumn>
            ))
            }
        </Grid>
    )
}

