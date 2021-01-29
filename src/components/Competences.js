import React, {Component} from 'react';
import {Box, Container, Grid, Hidden, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import AssignmentIcon from '@material-ui/icons/Assignment';
import WebIcon from '@material-ui/icons/Web';
import BuildIcon from '@material-ui/icons/Build';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import {Character12} from "./index";

const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    borderBottom: 1,

}

class Competences extends Component {
    render() {
        return (

            <Container maxWidth={"xl"}>
                <Grid container style={{minHeight: "100vh", display: "flex"}} direction={"column"} justify={"center"}>
                    <Box mb={10}>
                        <Grid item>
                            <Typography component={"h2"} variant={"h3"} align={"center"} color={"textPrimary"}>
                                Mes champs d'action
                            </Typography>
                        </Grid>
                    </Box>
                    <Grid container direction={"row"} justify={"space-between"} alignItems={"stretch"}>
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
                                                        <AssignmentIcon color={"primary"}/>
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
                                                        primary={"DIFFERENTS TYPES DE SITES WEB"}
                                                        secondary={"Site vitrine, catalogue, informatif, informatif, mini-site ou application web, votre projet est réalisable."}/>
                                                </ListItem>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box border={2} borderLeft={0} borderRight={0} borderTop={0}
                                                 borderRadius={3} borderColor={"secondary.main"}
                                                 bgcolor={"primary.light"}>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <WebIcon color={"secondary"}/>
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
                                                        primary={"INTEGRATION WEB"}
                                                        secondary={"Intégrations HTML/CSS respectueuses des standards du Web."}/>
                                                </ListItem>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box border={2} borderLeft={0} borderRight={0} borderTop={0}
                                                 borderRadius={3} borderColor={"secondary.main"}
                                                 bgcolor={"secondary.light"}>

                                                <ListItem>
                                                    <ListItemIcon>
                                                        <BuildIcon color={"primary"}/>
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
                                                        primary={"DEVELOPPEMENT SPECIFIQUE"}
                                                        secondary={"Des outils adaptés à votre coeur de métier, applications et solutions personnalisées."}/>
                                                </ListItem>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box border={2} borderLeft={0} borderRight={0} borderTop={0}
                                                 borderRadius={3} borderColor={"secondary.main"}
                                                 bgcolor={"primary.light"}>

                                                <ListItem>
                                                    <ListItemIcon>
                                                        <DynamicFeedIcon color={"secondary"}/>
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
                                                        primary={"PAGES DYNAMIQUES"}
                                                        secondary={"Des animations non intrusives embelissant votre projet."}/>
                                                </ListItem>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box border={2} borderLeft={0} borderRight={0} borderTop={0}
                                                 borderRadius={3} borderColor={"secondary.main"}
                                                 bgcolor={"secondary.light"}>

                                                <ListItem>
                                                    <ListItemIcon>
                                                        <PhoneAndroidIcon color={"primary"}/>
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
                                                        primary={"RESPONSIVE DESIGN"}
                                                        secondary={"Compatibles tous supports, tablette, ordinateur et téléphone."}/>
                                                </ListItem>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </List>
                            </Grid>
                        </Grid>
                        <Hidden xsDown>
                            <Grid item sm={4} style={{display: "flex"}}>
                                <Grid container direction={"column"} justify={"center"} alignItems={"center"}>
                                    <Character12/>
                                </Grid>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Competences;