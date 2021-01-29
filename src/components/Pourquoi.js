import React, {Component} from 'react';
import {Box, Container, Grid, Hidden, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import Character16 from "./Character16";
import EuroIcon from '@material-ui/icons/Euro';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import InfoIcon from '@material-ui/icons/Info';
import FavoriteIcon from '@material-ui/icons/Favorite';

class Pourquoi extends Component {
    render() {
        return (
            <>
                <Container
                    style={{minHeight: "100vh", flexDirection: "column", display: "flex", justifyContent: "center"}}
                    maxWidth={"xl"}>
                    <Box mb={10}>
                        <Grid item>
                            <Typography component={"h2"} variant={"h3"} align={"center"} color={"textPrimary"}>
                                Pourquoi un site internet ?
                            </Typography>
                        </Grid>
                    </Box>
                    <Grid container direction={"row"} justify={"space-between"} alignItems={"stretch"}>
                        <Hidden xsDown>
                            <Grid item sm={4}>
                                <Grid container direction={"column"} justify={"center"} alignItems={"center"}
                                      style={{height: "100%"}}>
                                    <Character16/>
                                </Grid>
                            </Grid>
                        </Hidden>
                        <Grid item sm={6}>
                            <Grid container direction={"column"} justify={"space-around"} style={{minHeight: "100%"}}>

                                <List component={"ul"}>
                                    <Grid container direction={"column"} justify={"space-around"} spacing={2}>
                                        <Grid item>
                                            <Box border={2} borderLeft={0} borderRight={0} borderTop={0}
                                                 borderRadius={3} borderColor={"secondary.main"}
                                                 bgcolor={"secondary.light"}>

                                                <ListItem>
                                                    <ListItemIcon>
                                                        <EuroIcon color={"primary"}/>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primaryTypographyProps={{
                                                            variant: "overline",
                                                            color: "textPrimary"
                                                        }}
                                                        secondaryTypographyProps={{
                                                            variant: "body2",
                                                            color: "textPrimary"
                                                        }}
                                                        primary={"Pour investir !"}
                                                        secondary={"Vous vous rendrez rapidement compte des bienfaits de votre site sur vos ventes"}/>
                                                </ListItem>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box bgcolor={"primary.light"} border={2} borderLeft={0} borderRight={0}
                                                 borderTop={0}
                                                 borderRadius={3} borderColor={"secondary.main"}>

                                                <ListItem>
                                                    <ListItemIcon>
                                                        <EventAvailableIcon color={"secondary"}/>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        secondaryTypographyProps={{
                                                            variant: "body2",
                                                            color: "textPrimary"
                                                        }}
                                                        primaryTypographyProps={{
                                                            variant: "overline",
                                                            style: {},
                                                            color: "textPrimary"
                                                        }}
                                                        primary={"Pour être disponible 24/24, partout dans le monde !"}
                                                        secondary={"Par rapport à une publicité qui ne durera que quelques secondes, votre site web sera consultable tout le temps, par tout le monde. Peu importe vos horaires d'ouverture."}/>
                                                </ListItem>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box bgcolor={"secondary.light"} border={2} borderLeft={0} borderRight={0}
                                                 borderTop={0}
                                                 borderRadius={3} borderColor={"secondary.main"}>

                                                <ListItem>
                                                    <ListItemIcon>
                                                        <InfoIcon color={"primary"}/>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        secondaryTypographyProps={{
                                                            variant: "body2",
                                                            color: "textPrimary"
                                                        }}
                                                        primaryTypographyProps={{
                                                            variant: "overline",
                                                            color: "textPrimary"
                                                        }}
                                                        primary={"Pour fournir une source d'information pour vos clients !"}
                                                        secondary={"Vous avez la possibilité de mettre autant d'informations que vous le souhaitez, vous pourrez donc sauver du temps et de l'argent en affichant les informations les plus demandées sur une page dédiée, par exemple."}/>
                                                </ListItem>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box bgcolor={"primary.light"} border={2} borderLeft={0} borderRight={0}
                                                 borderTop={0}
                                                 borderRadius={3} borderColor={"secondary.main"}>

                                                <ListItem>
                                                    <ListItemIcon>
                                                        <FavoriteIcon color={"secondary"}/>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        secondaryTypographyProps={{
                                                            variant: "body2",
                                                            color: "textPrimary"

                                                        }}
                                                        primaryTypographyProps={{
                                                            variant: "overline",
                                                            color: "textPrimary"
                                                        }}
                                                        primary={"Pour vous démarquer !"}
                                                        secondary={"Un site unique vous démarquera de vos concurrents ! Profitez en pour montrer les produits et services uniques à votre entreprise. Détaillez et expliquez pourquoi le client devrait faire affaire avec vous et pourquoi votre entreprise est la meilleure !"}/>
                                                </ListItem>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

            </>
        );
    }
}

export default Pourquoi;