import './main.css';
import table from './table';
import reducer from './reducer';
import createStore from './createStore';

const columns = ['country', 'startDate', 'endDate', 'price'];

const store = createStore(reducer);
const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (e) => {
  const index = e.target.getAttribute('data-index');
  if (index) {
    store.dispatch({ type: 'SORT', index });
  }
});

const render = () => {
  const { data, index } = store.getState();

  const sortFunc = (item1, item2) => {
    const key = columns[index];
    return item1[key] > item2[key];
  }
  const tableHTML = table(columns, data.sort(sortFunc));
  wrapper.innerHTML = tableHTML;
};

render();

store.subscribe(render);

