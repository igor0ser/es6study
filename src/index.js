import './main.css';
import data from './data.json';
import render from './helpers/render';
import table from './table';
import formatDate from './helpers/formatDate';

const columns = ['country', 'startDate', 'endDate', 'price'];

const tableData = data.tours.map(item => ({
  ...item,
  startDate: formatDate(item.startDate),
  endDate: formatDate(item.endDate),
}));

console.log('tableData');
console.log(tableData);

render(table(columns, tableData));
