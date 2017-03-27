import React from 'react';
import { startCase } from 'lodash';

const Header = ({ headerText, index, sortTable }) => (
	<th
		data-index={index + 1}
		onClick={() => sortTable(headerText)}
	>
		{startCase(headerText)}
	</th>
);

export default Header;
