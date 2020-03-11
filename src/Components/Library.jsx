import React, { Component } from "react";
import axios from "axios"

export default class Library extends Component {
    constructor(props){
        super(props);
        this.state = {
            gameInfo: []
        }
    }

    componentDidMount() {
        i=0
        axios.get(`/game/:gamesearch`)
          .then(res => {
            const gameInfo = res.data;
            this.setState({ gameInfo });
            console.log(gameInfo.results[2].name);
          })
      }

    render() {
        return (
            <div className=" d-flex  flex-wrap align-content-around library-container">
                <div className="card library-card">
                    <p className="game-title">Grand Theft Auto: San Andreas</p>
                    <div>
                        <img src="https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg" alt="" className="rounded mx-auto d-block" height="198px" width="198px" />
                        <p>Metacritic: 93</p>
                    </div>
                </div>
            </div>
        )
    }
}