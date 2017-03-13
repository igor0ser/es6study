import formatDate from '../helpers/formatDate';
import data from '../data.json';

const tableData = data.tours.map(item => ({
  ...item,
  startDate: formatDate(item.startDate),
  endDate: formatDate(item.endDate),
}));

export default tableData;