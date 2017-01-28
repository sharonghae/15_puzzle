import React from 'react';
import Paper from 'material-ui/Paper';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };
    
    handleClick() {
        alert("clicked")
    };
    
    render() {
        const style = {
            height: 100,
            width: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 1,
            fontSize: 30,
            color: '#ffffff',
            backgroundColor: '#114263'
        };
        return (
            <div>
                {this.props.value === 0?
                    <div className="empty" onClick={() => this.handleClick()}></div>
                    :
                    <Paper
                        onClick={() => this.handleClick()}
                        style={style}>
                        {this.props.value}
                    </Paper>
                }
            </div>

        )
    }
}