import React from "react";
import {Grid, Header, Form, Segment, Button} from "semantic-ui-react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const Auth = () => {

    const mutationLogin= async () => {
        const res = await fetch ("https://api.themoviedb.org/3/authentication/guest_session/new ",

        {
            headers: {
                Authorization: " Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWEzNDYwM2FhODUzNTQxODhhNzQxNzFhMWFhYjBkMSIsIm5iZiI6MTcyMTQ5NTcwMy40NDMzNDgsInN1YiI6IjY2OWFiYzBlNjVjOGJhMWY3ZDViY2YyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DENOy10SXoVXL-iYgQIzT_Xu46LQPLhxRWZwoDdWgOg"
            },
        });
        return res.json();
    }

    const { data, mutate } = useMutation({mutationKey:["login"], mutationFn: mutationLogin})

    const navigate = useNavigate();

    const handleLogin = async () => {
        await mutate();
        if (data) {
            localStorage.setItem("quest_session_id", data.guest_session_id)
            navigate("/");
        }
        
    }

    return(
        <Grid textAlign="center" verticalAlign="middle" style={{height: "100vh"}} >

            <Grid.Column style={{maxWidth: 450}}>
                <Header as="h2" color="red" textAlign="center">
                    Welcome! Login as a guest below.
                </Header>
                <Form size="large">
                    <Segment stacked>
                        <Button size="large" color="black" fluid style={{color: "red"}} onClick={handleLogin}>Login</Button>
                    </Segment>
                </Form>
            </Grid.Column>

        </Grid>
    )
}