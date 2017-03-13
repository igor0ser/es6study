import './main.css';
import render from './helpers/render';
import tableData from './helpers/tableData';
import addHandlers from './helpers/handlers';

const columns = ['country', 'startDate', 'endDate', 'price'];

render(tableData, columns);
addHandlers(tableData, columns);

