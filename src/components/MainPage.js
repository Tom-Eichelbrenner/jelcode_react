import React, {Component} from 'react';
import {Button, Container, Grid, Hidden, Typography} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Character5 from "./Character5";

class MainPage extends Component {
    render() {
        const {handleClick} = this.props;
        return (
            <Container
                maxWidth={"xl"}>
                <Grid
                    container
                    direction={"row"}
                    justify={"center"}
                    alignItems={"center"}
                    style={{
                        height: "100vh",
                        maxHeight: "100vh",
                        maxWidth: "100vw",
                        // background: 'rgb(20,70,160)',
                        // background: 'linear-gradient(343deg, rgba(20,70,160,1) 0%, rgba(219,48,105,1) 100%)'

                    }}>
                    <Grid
                        container
                        direction={"row"}
                        justify={"space-around"}
                        alignItems={"center"}>
                        <Grid
                            item
                            xs={10}
                            sm={6}
                        >
                            <Typography
                                component={"h1"}
                                variant={"h2"}
                                color={"secondary"}
                            >
                                JelCODE
                            </Typography>
                            <Typography
                                variant={"subtitle1"}
                                color={"textPrimary"}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequuntur,
                                dolorem
                                dolorum eius esse expedita impedit ipsum laudantium magnam non numquam optio perferendis
                                qui
                                recusandae, similique sunt veniam, vero.
                            </Typography>
                            <Grid
                                container
                                direction={"column"}
                                alignItems={"center"}
                                justify={"center"}>
                                <Grid
                                    item
                                    style={{marginTop: "2rem"}}>
                                    <Button
                                        onClick={() => handleClick()}
                                        variant={"contained"}
                                        color={"secondary"}
                                        startIcon={<ExpandMoreIcon/>}
                                        size={"large"}>
                                        En savoir plus
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Hidden xsDown>
                            <Grid item
                                  sm={4}
                                  style={{maxHeight: "100vh"}}
                            >
                                <Character5/>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default MainPage;