import data from './data.json';
import formatDate from './helpers/formatDate';

const tableData = data.tours.map(item => ({
  ...item,
  startDate: formatDate(item.startDate),
  endDate: formatDate(item.endDate),
}));

const initialState = {
  data: tableData,
  index: 0,
  sortType: "alpabetic"
};

const reducer = (state = initialState, action ) => {
  console.log(state);
  switch (action.type) {
    case 'SORT':
      const { index, sortType } = action;
      return { ...state, index, sortType };
    default: 
      return state;
  };
};

export default reducer;
