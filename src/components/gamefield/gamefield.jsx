import React, { Component } from 'react';
import { connect } from "react-redux";

import { addHumanSquare } from "../../redux/actions";
import Square from "../square/square";
import './gamefield.styles.scss';

class GameField extends Component {

    getColor = (index) => {
        if (this.props.squaresHuman.includes(index) === true) {
            return 'green'
        }
        if (this.props.squaresAI.includes(index) === true) {
            return 'red'
        }
        if (this.props.active === index) {
            return 'blue'
        }
    }

    handleSquareClick = (e) => {
        const square = e.target.getAttribute('datatag')
        if (square == this.props.active) {
            const humanArray = this.props.squaresHuman
            humanArray.push(parseInt(square))
            this.props.addHumanSquare(humanArray)
        }
    }

    render() {
        let squares = [];
        const square = (this.props.gameConfig[this.props.mode]) ? this.props.gameConfig[this.props.mode].field : 5
        for (let i = 0; i < square*square; i++) {
            squares.push(<Square key={i} status={this.getColor(i)} datatag={i} />);
        }
        return (
            <div className="gamefield" onClick={this.handleSquareClick}>
                <div className="message">{this.props.message}</div>
                <div className="game-square-wrapper" style={{width: parseInt(square)*50+'px'}}>
                    {squares}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    message: state.message,
    gameConfig: state.gameConfig,
    mode: state.mode,
    active: state.active,
    squaresAI: state.squaresAI,
    squaresHuman: state.squaresHuman
})

const mapDispatchToProps = (dispatch) => ({
    addHumanSquare: square => dispatch(addHumanSquare(square)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameField)