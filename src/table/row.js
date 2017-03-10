const row = (item, columns) =>
  columns.map(key => `<td>${item[key]}</td>`).join('');

export default row;