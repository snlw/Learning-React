import { React, Component } from "react";
import './MemoryGame.css';

const TILE_COUNT = 10;

class MemoryGameApp extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            board : [],
            score : 0,
            attempts : 0,
            lastPicked : null,
        };

        this.resetTiles = this.resetTiles.bind(this);
        this.flipTile = this.flipTile.bind(this);
    };

    resetTiles() {
        let tiles = [];
        let number = 0;
        for (let i = 0; i < TILE_COUNT; i+=2){
            tiles = [
                ...tiles, 
                {matched:false, flipped:true, value:number},
                {matched:false, flipped:true, value:number}
            ];
            number++;
        };

        for (let j = 0; j < tiles.length; j++) {
            const swap = Math.floor(Math.random()*tiles.length);
            [tiles[j], tiles[swap]] = [tiles[swap], tiles[j]];
        };
        this.setState(
            {
                board : tiles,
                attempts : 0,
                score : 0,
            }
        );
    };

    renderTile (tile, index) {
        const tileKey = `key-${index}`;
        // className cannot be Tile-matched-flipped. This will cause the tile rendering to fail.
        // Please use Tile matched flipped insteaed with " " to concatenate.
        const tileClassName = `Tile${tile.matched ? ' matched' : ''}${tile.flipped ? ' flipped' : ''}`;
        return (
            <div
                key={tileKey}
                className={tileClassName}
                onClick={() => this.flipTile(index)}>{!tile.flipped && tile.value}
            </div>
        );
    };

    flipTile(index) {
        let tiles = this.state.board;
        let attempts = this.state.attempts + 1;
        let currentTile = tiles[index];

        currentTile.flipped = true;

        console.log(currentTile, this.state.lastPicked)

        if (this.state.lastPicked){
            // Check if the second pick matches the first pick
            let score = this.state.score;
            if (this.state.lastPicked === currentTile.value){
                currentTile.matched = true;
                score++;
            }
            this.setState({
                lastPicked : null,
                attempts : attempts,
                score : score
            });
        }
        else {
            this.flipAllUnmatchedTilesBack();
            this.setState({
                lastPicked : currentTile.value,
                attempts : attempts
            });
        };
    };

    flipAllUnmatchedTilesBack () {
        return this.state.board.map((tile) => {
            if (!tile.matched){
                tile.flipped = true;
            }
            return;
        });
    };

    render() {
        return (
            <div>
                <h1>Memory Game</h1>
                <strong>Clicks : {this.state.attempts}</strong>
                <br />
                <button 
                    className='reset'
                    onClick={this.resetTiles}>New Game</button>
                <hr />
                {this.state.board.map((v, index) => this.renderTile(v, index))}
            </div>
        );
    }
}

export default MemoryGameApp;