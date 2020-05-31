import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ProductList, Search } from '../../actions/actionCreator';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Pagination from 'react-bootstrap/Pagination';
import SearchBar from './searchBar';
import Container from 'react-bootstrap/Container';

class InventoryListTable extends Component {
	componentDidMount() {
		if (this.props.product.length === 0) {
			this.props.ProductList();
		}
	}
	render() {
		return (
			<>
				<SearchBar value={this.props.value} search={this.props.search} />

				<Table responsive striped bordered hover size='sm'>
					<thead>
						<tr>
							<th>Product ID</th>
							<th>Thumbnails</th>
							<th>Product Name</th>
							<th>Category</th>
							<th>SKU</th>
							<th>Manufacturer</th>
							<th>In Stock</th>
							<th>Qty</th>
							<th>Model Number</th>
							<th>Promotion</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
					</thead>

					<tbody>
						{this.props.value //Logic about filtering the search
							? this.props.searchList.map((product) => {
									return (
										<tr key={product.id}>
											<td>{product.id}</td>
											<td>{product.Thumbnails}</td>
											<td>{product.ProductName}</td>
											<td>{product.category}</td>
											<td>{product.SKU}</td>
											<td>{product.Manufacturer}</td>
											<td>{product.InStock}</td>
											<td>{product.Qty}</td>
											<td>{product.ModelNumber}</td>
											<td>{product.Promotion}</td>
											<td>{product.Status}</td>
											<td>
												<DropdownButton
													id='dropdown-basic-button'
													title='Select Action'>
													<Dropdown.Item href='#/action-1'>
														View Product
													</Dropdown.Item>
													<Dropdown.Item href='#/action-2'>
														Edit Product
													</Dropdown.Item>
													<Dropdown.Item href='#/action-3'>
														Delete Product
													</Dropdown.Item>
												</DropdownButton>
											</td>
										</tr>
									);
							  })
							: this.props.product.map((product) => {
									return (
										<tr key={product.id}>
											<td>{product.id}</td>
											<td>{product.Thumbnails}</td>
											<td>{product.ProductName}</td>
											<td>{product.category}</td>
											<td>{product.SKU}</td>
											<td>{product.Manufacturer}</td>
											<td>{product.InStock}</td>
											<td>{product.Qty}</td>
											<td>{product.ModelNumber}</td>
											<td>{product.Promotion}</td>
											<td>{product.Status}</td>
											<td>
												<DropdownButton
													id='dropdown-basic-button'
													title='Select Action'>
													<Dropdown.Item href='#/action-1'>
														View Product
													</Dropdown.Item>
													<Dropdown.Item href='#/action-2'>
														Edit Product
													</Dropdown.Item>
													<Dropdown.Item href='#/action-3'>
														Delete Product
													</Dropdown.Item>
												</DropdownButton>
											</td>
										</tr>
									);
							  })}
					</tbody>
				</Table>

				<Pagination size='sm' style={{ paddingLeft: '20%' }}>
					<Pagination.First />
					<Pagination.Prev />
					<Pagination.Item>{1}</Pagination.Item>
					<Pagination.Ellipsis />

					<Pagination.Item>{10}</Pagination.Item>
					<Pagination.Item>{11}</Pagination.Item>
					<Pagination.Item active>{12}</Pagination.Item>
					<Pagination.Item>{13}</Pagination.Item>
					<Pagination.Item disabled>{14}</Pagination.Item>

					<Pagination.Ellipsis />
					<Pagination.Item>{20}</Pagination.Item>
					<Pagination.Next />
					<Pagination.Last />
				</Pagination>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	product: state.productList,
	searchList: state.searchList,
	value: state.value,
});

const mapDispatchToProps = (dispatch) => ({
	ProductList: () => dispatch(ProductList()),
	search: (value) => dispatch(Search(value)),
});
export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(InventoryListTable)
);
