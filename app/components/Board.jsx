import React from 'react';
import _ from 'lodash';

var empty;
var board = [[],[],[],[]];
var randomTiles =_.shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
for(var i = 0; i < 4; i++) {
    for (var k = 0; k < 4; k++) {
        var value = randomTiles.pop();
        if(value === 0) empty = [i, k];
        board[i][k] = value;
    }
}

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: board,
            empty: empty
        };
        this.handleClick = this.handleClick.bind(this);
    };

    //check if tile is movable (shares x or y axis with empty spot)
    //if tiles are "movable"  need to shift position

    //ex row [ 1, 2, 3, empty ]
    //click on tile 1 => new row [ empty, 1, 2, 3 ]


    handleClick(x, y) {
        function isMovable(empty) {
            if(x === empty[0]) return 'row';
            else if(y === empty[1]) return 'col';
        }

        if(!isMovable(this.state.empty)) return;

        if(isMovable(this.state.empty) === 'row') {
            board[x].splice(this.state.empty[1],1);
            board[x].splice(y, 0, 0);
            empty[1] = y

        }
        
        if(isMovable(this.state.empty) === 'col') {
            if(this.state.empty[0] > x) {
                for (var i = this.state.empty[0]; i > x; i--) {
                    board[i][y] = board[i - 1][y]
                }
            }
            else {
                for (var k = this.state.empty[0]; k < x; k++) {
                    board[k][y] = board[k + 1][y]
                }
            }
            board[x][y] = 0;
            empty[0] = x
        }

        this.setState({board: board, empty: empty});

    };

    render() {
        return (
            <div className="board">
                {this.state.board.map((row, x) => (
                    <div className="row" key={x}>
                        {row.map((cell, y) => {
                            if(cell === 0) {
                                return (
                                    <div className="cell" key={cell}>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <button 
                                        onClick={() => this.handleClick(x, y)}
                                        className="cell tile" 
                                        key={cell}>
                                            {cell}
                                    </button>
                                )
                            }
                        })}
                    </div>
                ))}
            </div>
        )
    }
}




