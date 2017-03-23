import { startCase } from 'lodash';

const table = (data, columns) => `
<table>
	<thead>
		<tr>
			${columns.map(header => `<th>${startCase(header)}</th>`)}
		</tr>
	</thead>
	<tbody>
		${
			data.map(item => `<tr>${
				columns.map(key => `<td>${item[key]}</td>`)
			}</tr>`)
		}
	</tbody>
</table>
`;

export default table;