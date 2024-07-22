import React from "react"
import { useParams } from "react-router-dom"
import { Header, Segment } from "semantic-ui-react";

export const Movie = () => {
    const {id} = useParams<string>();
    return(
        <div style={{marginTop:"100px"}}>
            <Segment>
                <Header></Header>
            </Segment>
        </div>
    )
}