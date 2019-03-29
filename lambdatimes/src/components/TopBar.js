import React from 'react';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

import { TopBarWrapper, Container, Left, LeftSpan, Center, CenterSpan, Right, RightSpan } from './StyledComp';

const TopBar = () => {
	return (
		<TopBarWrapper>
			<Container>
				<Left>
					<LeftSpan>TOPICS</LeftSpan>
					<LeftSpan>SEARCH</LeftSpan>
				</Left>
				<Center>
					<CenterSpan>GENERAL</CenterSpan>
					<CenterSpan>BROWNBAG</CenterSpan>
					<CenterSpan>RANDOM</CenterSpan>
					<CenterSpan>MUSIC</CenterSpan>
					<CenterSpan>ANNOUNCEMENTS</CenterSpan>
				</Center>
				<Right>
					<RightSpan>LOG IN</RightSpan>
				</Right>
			</Container>
		</TopBarWrapper>
	);
};

export default TopBar;
