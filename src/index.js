import './main.css';
import { tours } from './data.json';
import table from './table';

console.log(tours);

document.getElementById('app').innerHTML =
	table(tours, ['country', 'price', 'startDate', 'endDate']);

	console.log(table(tours, ['country', 'price', 'startDate', 'endDate']));

