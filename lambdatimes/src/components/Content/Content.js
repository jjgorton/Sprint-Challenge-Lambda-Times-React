import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected : 'all',
			tabs     : [],
			cards    : []
		};
	}

	componentDidMount() {
		this.setState({
			tabs  : tabData,
			cards : cardData
		});
	}

	changeSelected = (e, tab) => {
		e.preventDefault();

		this.setState({
			selected : tab
		});
	};

	filterCards = () => {
		const filtered = this.state.cards.filter((item) => item.tab === this.state.selected);

		if (this.state.selected === 'all') {
			return this.state.cards;
		} else {
			return filtered;
		}
	};

	render() {
		return (
			<div className="content-container">
				<Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected} />
				<Cards cards={this.filterCards()} />
			</div>
		);
	}
}
