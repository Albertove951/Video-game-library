import React, { Component } from "react";
import Header from "./Components/Header";
import Library from "./Components/Library"

import "./styles.css";

export default class App extends Component {

    render() {
        return(
            <div>
                <Header/>
                <Library/>
            </div>
        )
    }
}