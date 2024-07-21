import React from "react";
import { DisplayType } from ".";

interface DisplayData {
    id: number;
    overview: string;
    poster_path: string;
    title: string;
    vote_average: number;
    elease_date: string;
}

interface Props {
    data: DisplayData[];
    displayType: DisplayType;
}

export const ShowCase = (props: Props) => {
    return (
        <div></div>
    )
}