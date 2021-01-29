import React, {Component} from 'react';
import './App.css'
import MainPage from "./components/MainPage";
import Pourquoi from "./components/Pourquoi";
import {Box, createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {blueGrey, brown} from "@material-ui/core/colors";
import Competences from "./components/Competences";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blueGrey[400],
        },
        secondary: {
            main: brown[500]
        },
        text: {
            primary: "#000000",
            secondary: "#ffffff"
        }
    }
})

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    render() {
        if (!this.state.clicked) {
            return (
                <MuiThemeProvider theme={theme}>
                    <Box bgcolor={"primary.main"}>
                        <MainPage
                            handleClick={this.handleClick}/>
                    </Box>
                </MuiThemeProvider>
            )
        } else {
            return (
                <MuiThemeProvider theme={theme}>
                    <Box bgcolor={"primary.main"}>
                        <MainPage
                            handleClick={this.handleClick}/>
                        <Pourquoi/>
                        <Competences/>
                    </Box>
                </MuiThemeProvider>
            )
        }
    }

    componentDidUpdate = () => {
        window.scroll(0, window.innerHeight)
    };


    handleClick = () => {
        return new Promise((resolve, reject) => {
            const state = this.state
            state.clicked = true
            this.setState({state})
        })
    }
}

export default App;