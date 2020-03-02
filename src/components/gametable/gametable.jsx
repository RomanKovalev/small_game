import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setResultTable, setShowed, setPage } from '../../redux/actions';
import FetchService from '../../services/fetch-service';
import { winners } from "../../settings/settings";

import './gametable.styles.scss';

class GameTable extends Component {

	fetchService = new FetchService();

	componentDidMount() {
		this.fetchService
			.getData(winners)
			.then(response => response.json())
			.then(resultTable => this.props.setResultTable(resultTable.reverse()))
			.then(() =>
				this.props.setShowed(this.props.resultTable.slice(this.props.page * 4, this.props.page * 4 + 4))
			);
	}

	changePage = x => {
		if (!(this.props.page === 0 && x < 0)) {
			this.props.setPage(this.props.page + x);
			this.props.setShowed(
				this.props.resultTable.slice((this.props.page + x) * 4, (this.props.page + x) * 4 + 4)
			);
		}
	};

	render() {
		const content = this.props.showed.map((item, index) => (
			<tr key={index}>
				<td>{item.winner}</td>
				<td>{item.date}</td>
			</tr>
		));

		return (
			<div className="game-table">
				<div className="leaderboard">Leaderboard</div>
				<div className="table">
					<table>
						<tbody>{content}</tbody>
					</table>
				</div>
				<button onClick={() => this.changePage(-1)} disabled={this.props.page === 0}>
					Prev
				</button>
				<button
					onClick={() => this.changePage(1)}
					disabled={this.props.showed.length < 4 && this.props.page !== 0}
				>
					Next
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	resultTable: state.resultTable,
	page: state.page,
	showed: state.showed,
	nextDisabled: state.nextDisabled,
	prevDisabled: state.prevDisabled,
});

const mapDispatchToProps = dispatch => ({
	setResultTable: resultTable => dispatch(setResultTable(resultTable)),
	setShowed: showed => dispatch(setShowed(showed)),
	setPage: page => dispatch(setPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameTable);
