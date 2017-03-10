import './main.css';
import data from './data.json';
import render from './helpers/render';
import table from './table';

const columns = ['country', 'startDate', 'endDate', 'price'];

console.log('Hello, ES6!');
console.log(data);

console.log(table(columns, data.tours));

render(table(columns, data.tours));
