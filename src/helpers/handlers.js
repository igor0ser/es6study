import { isNumber } from 'lodash';
import render, { wrapper } from './render';

const addHandlers = (tableData, columns) => {
  wrapper.addEventListener('click', (e) => {
    const index = +e.target.getAttribute('data-index');
    if (!isNumber(index)) return;
    const key = columns[index];
    tableData.sort((a, b) => (a[key] > b[key] ? -1 : 1));
    render(tableData, columns);
  });
}

export default addHandlers;
