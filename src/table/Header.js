import React, { PropTypes } from 'react';
import { startCase } from 'lodash';

const Header = ({ headerText, index, sortTable }) => (
	<th
		data-index={index + 1}
		onClick={() => sortTable(headerText)}
	>
		{startCase(headerText)}
	</th>
);

Header.propTypes = {
	headerText: PropTypes.string.isRequired
};

export default Header;
