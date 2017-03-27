import React from 'react';
import { render } from 'react-dom';
import './main.css';
import { tours } from './data.json';
import Table from './table/Table';

const columns = ['country', 'price', 'startDate', 'endDate'];

render(
	<Table data={tours} columns={columns} />,
	document.getElementById('app')
);

/*
const render = tours => {
	wrapper.innerHTML =
		table(tours, columns);
};

render(tours);*/

/*
wrapper.addEventListener('click', (event) => {
	const index = event.target.getAttribute('data-index');
	if (index) {
		const sortKey = columns[index - 1];
		const sortedTours = [...tours].sort((a, b) =>
			a[sortKey] > b[sortKey] ? 1 : -1
		);

		render(tours);
	}
});
*/
