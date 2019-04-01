import React from 'react';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

import { HeaderWrapper, HeaderH1, Date, Temp } from './StyledComp';

const Header = () => {
	return (
		<HeaderWrapper>
			<Date>SMARCH 32, 2018</Date>
			<HeaderH1>Lambda Times</HeaderH1>
			<Temp>98°</Temp>
		</HeaderWrapper>
	);
};

export default Header;
