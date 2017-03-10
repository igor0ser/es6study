import { startCase } from 'lodash';

const header = (columns) => {
  const headerCells = columns.map(col => `<th>${startCase(col)}</th>`);

  return `<thead><tr>${headerCells.join('')}</tr></thead>`;
};

export default header;