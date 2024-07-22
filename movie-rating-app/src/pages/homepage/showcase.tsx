import React from "react";
import { DisplayType } from "./index.tsx";
import { Card, CardGroup, Grid, GridColumn } from "semantic-ui-react";

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
            {data.map((displayData: DisplayData)=>(
                <GridColumn key={displayData.id}>
                    <CardGroup>
                        <Card
                        fluid
                        image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`}
                        />
                    </CardGroup>
                </GridColumn>
            ))}
        </Grid>
    )
}