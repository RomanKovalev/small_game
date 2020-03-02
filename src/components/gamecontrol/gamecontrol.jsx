import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	setMode,
	setName,
	setGameConfig,
	setMessage,
	setActive,
	addHumanSquare,
	addAISquare,
	setStatus,
	setResultTable,
	setShowed,
	setButtonLabel,
} from '../../redux/actions';

import { settings } from '../../settings/settings';
import FetchService from '../../services/fetch-service';

import './gamecontrol.styles.scss';

class GameControl extends Component {
	fetchService = new FetchService();

	componentDidMount() {
		this.fetchService
			.getData(settings)
			.then(response => response.json())
			.then(gameConfig => this.props.setGameConfig(gameConfig));
	}

	playClick = () => {
		if (this.props.name === '') {
			this.props.setMessage('Enter your name');
		} else if (this.props.mode === '') {
			this.props.setMessage('Choose game mode');
		} else {
			this.props.setMessage('');
			this.props.addAISquare([]);
			this.props.addHumanSquare([]);
			this.props.setStatus('playing');
			const squareArray = [];
			const square = this.props.gameConfig[this.props.mode] ? this.props.gameConfig[this.props.mode].field : 5;
			for (let i = 0; i < square * square; i++) {
				squareArray.push(i);
			}
			const timerId = setInterval(() => {
				if (this.props.squaresHuman.length > (square * square) / 2) {
					this.props.setMessage('Human won game!');
					clearInterval(timerId);
					this.props.setStatus('');
					this.fetchService
						.sendData(this.props.name)
						.then(response => response.json())
						.then(resultTable => this.props.setResultTable(resultTable.reverse()))
						.then(() =>
							this.props.setShowed(
								this.props.resultTable.slice(this.props.page * 4, this.props.page * 4 + 4)
							)
						);
					this.props.setButtonLabel('Play Again');
				}

				if (this.props.squaresAI.length > (square * square) / 2) {
					this.props.setMessage('AI won game!');
					clearInterval(timerId);
					this.props.setStatus('');
					this.fetchService
						.sendData('Computer AI')
						.then(response => response.json())
						.then(resultTable => this.props.setResultTable(resultTable.reverse()))
						.then(() =>
							this.props.setShowed(
								this.props.resultTable.slice(this.props.page * 4, this.props.page * 4 + 4)
							)
						);
					this.props.setButtonLabel('Play Again');
				}

				if (this.props.status === 'playing') {
					const squaresAI = this.props.squaresAI;
					const squaresHuman = this.props.squaresHuman;
					const c = squaresAI.filter(x => {
						if (!squaresHuman.includes(x)) {
							return x;
						} else {
							return '';
						}
					});
					this.props.addAISquare(c);

					const index = Math.floor(Math.random() * squareArray.length);
					const randomSquare = squareArray.splice(index, 1);
					this.props.setActive(randomSquare[0]);
					if (this.props.squaresHuman.includes(randomSquare[0]) !== true) {
						const a = this.props.squaresAI;
						a.push(randomSquare[0]);
						this.props.addAISquare(a);
					}
				}
			}, this.props.gameConfig[this.props.mode].delay);
		}
	};

	render() {
		const isDisabled = () => this.props.status === 'playing';

		return (
			<div className="game-control">
				<select disabled={isDisabled()} onChange={event => this.props.setMode(event.target.value)}>
					<option>Pick game mode</option>
					{Object.entries(this.props.gameConfig).map(([key]) => (
						<option key={key}>{key}</option>
					))}
				</select>
				<input
					disabled={isDisabled()}
					onChange={event => this.props.setName(event.target.value)}
					type="text"
					placeholder="Enter your name"
				/>
				<button disabled={isDisabled()} onClick={this.playClick}>
					{this.props.buttonLabel}
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	gameConfig: state.gameConfig,
	name: state.name,
	mode: state.mode,
	status: state.status,
	squaresAI: state.squaresAI,
	squaresHuman: state.squaresHuman,
	resultTable: state.resultTable,
	page: state.page,
	buttonLabel: state.buttonLabel,
});

const mapDispatchToProps = dispatch => ({
	setGameConfig: gameConfig => dispatch(setGameConfig(gameConfig)),
	setName: name => dispatch(setName(name)),
	setMode: mode => dispatch(setMode(mode)),
	setStatus: status => dispatch(setStatus(status)),
	setMessage: message => dispatch(setMessage(message)),
	setActive: square => dispatch(setActive(square)),
	addAISquare: square => dispatch(addAISquare(square)),
	addHumanSquare: square => dispatch(addHumanSquare(square)),
	setResultTable: resultTable => dispatch(setResultTable(resultTable)),
	setShowed: resultTable => dispatch(setShowed(resultTable)),
	setButtonLabel: label => dispatch(setButtonLabel(label)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameControl);
