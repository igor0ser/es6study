import React, { PureComponent } from 'react';
import Header from './Header';

class Table extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			data: props.data
		};

		this.sortTable = this.sortTable.bind(this);
	}

/*	sortTable(event){
		const index = event.target.getAttribute('data-index');
		if (!index) return;

		const sortKey = this.props.columns[index - 1];
		const sortedData = [...this.state.data].sort((a, b) =>
			a[sortKey] > b[sortKey] ? 1 : -1
		);

		this.setState({ data: sortedData });
	}*/

	sortTable(sortKey) {
		const sortedData = [...this.state.data].sort((a, b) =>
			a[sortKey] > b[sortKey] ? 1 : -1
		);

		this.setState({ data: sortedData });
	}

	render() {
		const { columns } = this.props;
		const { data } = this.state;

		return (
			<table>
				<thead>
					<tr>
						{columns.map((headerText, index) => (
							<Header
								headerText={headerText}
								index={index}
								key={headerText}
								sortTable={this.sortTable}
							/>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((item, i) => (
						<tr key={i}>
							{columns.map((key, j) =>(
								<td key={j}>{item[key]}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		);
	}
};

export default Table;

/*(data, columns) => `
	<table>
		<thead>
			<tr>
				${columns.map((header, index) =>
					`<th data-index="${index + 1}">${startCase(header)}</th>`).join('')}
			</tr>
		</thead>
		<tbody>
			${
				data.map(item => `<tr>${
					columns.map(key => `<td>${item[key]}</td>`).join('')
				}</tr>`).join('')
			}
		</tbody>
	</table>
`;*/