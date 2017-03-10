import row from './row';

const body = (columns, data) => {
  const rows = data
    .map(item => row(item, columns))
    .map(row => `<tr>${row}</tr>`);

  return `<tbody>${rows.join('')}</tbody>`;
};

export default body;