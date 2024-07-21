import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { ShowCase } from "./showcase";

export enum DisplayType {
    Movies = "movies",
    TvShows = "tvshows",
}

export const HomePage = () => {

    const [displayType, setDisplayType] = useState<DisplayType>(DisplayType.Movies);

    return (
        <div style={{ marginTop: "70px", height: "auto" }}>
            <Button.Group>
                <Button color={displayType === DisplayType.Movies ? "red" : "black"} onClick={() => setDisplayType(DisplayType.Movies)}>Movies</Button>

                <Button color={displayType === DisplayType.TvShows ? "red" : "black"} onClick={() => setDisplayType(DisplayType.TvShows)}>Tv Shows</Button>
            </Button.Group>

            <div style={{marginTop:"30px"}}>
                {displayType === DisplayType.Movies ? <>MOVIES</> : <>TV SHOWS</> }
            </div>
        </div >
    )
}