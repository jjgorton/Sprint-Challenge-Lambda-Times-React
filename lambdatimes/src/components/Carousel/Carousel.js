import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel

export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgArray   : [],
			currentImg : '',
			counter    : 0
		};
	}
	componentDidMount() {
		this.setState({
			imgArray   : carouselData,
			currentImg : carouselData[0]
		});
	}

	leftClick = () => {
		let index = this.state.counter;
		if (index === this.state.imgArray.length - 1) {
			index = 0;
		}
		index++;
		this.setState({
			counter    : index,
			currentImg : carouselData[index]
		});

		console.log('left', this.state.counter);
	};

	rightClick = () => {
		let index = this.state.counter;
		if (index === 0) {
			index = this.state.imgArray.length - 1;
		}
		index--;
		this.setState({
			counter    : index,
			currentImg : carouselData[index]
		});

		console.log('right', this.state.counter);
	};

	selectedImage = (i) => {
		return <img src={this.state.currentImg} style={{ display: 'block' }} />;
	};

	render() {
		return (
			<div className="carousel">
				<div className="left-button" onClick={this.leftClick}>
					{'<'}
				</div>
				<div>{this.selectedImage()}</div>
				<div className="right-button" onClick={this.rightClick}>
					{'>'}
				</div>
			</div>
		);
	}
}
