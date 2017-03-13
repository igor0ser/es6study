import table from '../table';

export const wrapper = document.getElementById('wrapper');

const render = (data, columns) => {
  const tableHTML = table(columns, data);
  wrapper.innerHTML = tableHTML;
};

export default render;