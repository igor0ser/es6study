import header from './header';
import body from './body';

const table = (columns, data) => `
  <table>
    ${header(columns)}
    ${body(columns, data)}
  </table`;

export default table;