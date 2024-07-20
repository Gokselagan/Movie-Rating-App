import React from "react";
import {Grid, Header, Form, Segment, Button} from "semantic-ui-react";

export const Auth = () => {

    const handleLogin = () => {}

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