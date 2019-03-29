import React from 'react';
import Tab from './Tab';

import PropTypes from 'prop-types';

const Tabs = (props) => {
	return (
		<div className="tabs">
			<div className="topics">
				<span className="title">TRENDING TOPICS:</span>

				{props.tabs.map((item, index) => (
					<Tab
						key={index}
						tab={item}
						selectedTab={props.selectedTab}
						selectTabHandler={props.selectTabHandler}
					/>
				))}
			</div>
		</div>
	);
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
	cardData : PropTypes.array
};

export default Tabs;
