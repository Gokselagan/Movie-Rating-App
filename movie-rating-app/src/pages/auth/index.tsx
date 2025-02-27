import React from "react";
import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const Auth = ({setIsLogin}) => {

    const mutationLogin = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
                },
            });
            const data = await res.json();
            return data;
    }

    const { mutate } = useMutation({
        mutationKey: ["login"],
        mutationFn: mutationLogin,
        onSuccess: (data) => {
            localStorage.setItem("guest_session_id", data.guest_session_id);
            navigate("/homepage");
        }
    });

    const navigate = useNavigate();

    const handleLogin = async () => {
        await mutate();
        setIsLogin(true);

    }

    return (
        <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh", backgroundColor:"black", margin:"0px" }} >

            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="red" textAlign="center">
                    Welcome! Login as a guest below.
                </Header>
                <Form size="large">
                    <Segment stacked style={{backgroundColor:"red", opacity:"0.6"}}>
                        <Button size="large" color="black" fluid style={{ color: "#fff", fontWeight:"800", fontSize:"1.5rem" }} onClick={handleLogin}>Login</Button>
                    </Segment>
                </Form>
            </Grid.Column>

        </Grid>
    )
}