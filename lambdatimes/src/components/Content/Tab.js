import React from 'react';

import PropTypes from 'prop-types';

const Tab = (props) => {
	let classValue = '';
	if (props.tab === props.selectedTab) {
		classValue = 'tab active-tab';
	} else {
		classValue = 'tab';
	}

	return (
		<div className={classValue} onClick={(e) => props.selectTabHandler(e, props.tab)}>
			{props.tab.toUpperCase()}
		</div>
	);
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
	cardData : PropTypes.string
};

export default Tab;
