import React, { Component } from "react";
import axios from "axios"

export default class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameInfo: [],
            search: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        axios.get(`/game/:${this.state.search}`)
            .then(res => {
                const gameInfo = res.data;
                this.setState({ gameInfo: gameInfo.results });
                console.log(this.state.gameInfo);
            })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
                <div className="search-bar">
                <input type="text" name="search" value={this.state.search} onChange={this.handleChange} placeholder="search..."/>
                <button onClick={this.onClick}>Search</button>
                </div>
                <div className="d-flex  flex-wrap align-content-around library-container">
                {this.state.gameInfo.map((game, i) => (
            <div key ={i}>
                    <div  className="card library-card">
                <p className="game-title">{game.name}</p>
                                <div>
                                    <img src={game.background_image} alt="" className="rounded mx-auto d-block" height="198px" width="198px" />
                                    <p>Metacritic: 93</p>
                            </div>
                    </div>
            </div>
                ))}
                </div>
            </div>
        )
    }
}