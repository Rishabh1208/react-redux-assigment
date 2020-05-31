import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AddProduct } from '../../actions/actionCreator';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class AddProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			values: {
				id: 0,
				Thumbnails: 'image',
				ProductName: '',
				category: '',
				SKU: '',
				Manufacturer: '',
				InStock: '',
				Qty: 0,
				ModelNumber: '',
				Promotion: '',
				Status: '',
				Actions: 3,
			},
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.AddProduct(this.state.values);
		console.log(this.state.values);
		this.props.history.push('/list');
	};

	handleInputChange = (e) =>
		this.setState({
			values: { ...this.state.values, [e.target.name]: e.target.value },
		});

	render() {
		return (
			<>
				<Container fluid>
					<h5>Product General</h5>
					<Form onSubmit={this.handleSubmit}>
						<Form.Row>
							<Form.Group as={Col} md='4' controlId='validationCustom01'>
								<Form.Label>Product Name</Form.Label>
								<Form.Control
									required
									type='text'
									name='ProductName'
									value={this.state.values.ProductName}
									onChange={this.handleInputChange}
									placeholder='Product Name'
								/>
							</Form.Group>

							<Form.Group as={Col} md='3' controlId='formGridState'>
								<Form.Label>Category</Form.Label>
								<Form.Control
									as='select'
									name='category'
									onChange={this.handleInputChange}
									value={this.state.values.Category}>
									<option>Category</option>
									<option value='Module'>Module</option>
									<option value='Inverter'>Inverter</option>
									<option value='Optimizer'>Optimizer</option>
									<option value='Ports'>Ports</option>
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col} md='3' controlId='formGridState'>
								<Form.Label>Manufacturer</Form.Label>
								<Form.Control
									as='select'
									name='Manufacturer'
									onChange={this.handleInputChange}
									value={this.state.values.Manufacturer}>
									<option>Manufacturer</option>
									<option value='LG'>LG</option>
									<option value='Sun Edison'>Sun Edison</option>
									<option value='Videocon'>Videocon</option>
									<option value='Sony'>Sony</option>
								</Form.Control>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} md='4' controlId='validationCustom03'>
								<Form.Label>Model Number</Form.Label>
								<Form.Control
									type='text'
									name='ModelNumber'
									value={this.state.values.ModelNumber}
									onChange={this.handleInputChange}
									placeholder='model number'
									required
								/>
							</Form.Group>

							<Form.Group as={Col} md='3' controlId='validationCustom05'>
								<Form.Label>SKU</Form.Label>
								<Form.Control
									type='text'
									name='SKU'
									value={this.state.values.SKU}
									onChange={this.handleInputChange}
									placeholder='sku'
									required
								/>
							</Form.Group>
						</Form.Row>

						<br />

						<h5>Stock Information</h5>

						<Form.Row>
							<Form.Group as={Col} md='4' controlId='validationCustom01'>
								<Form.Label>Quantity in Stock</Form.Label>
								<Form.Control
									required
									type='text'
									name='InStock'
									placeholder='InStock'
									value={this.state.values.InStock}
									onChange={this.handleInputChange}
								/>
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} md='4' controlId='validationCustom03'>
								<Form.Label>Qty Ordered</Form.Label>
								<Form.Control
									type='text'
									name='Qty'
									value={this.state.values.Qty}
									onChange={this.handleInputChange}
									placeholder='Qty'
									required
								/>
							</Form.Group>
						</Form.Row>

						<Button type='submit'>Submit</Button>
					</Form>
				</Container>
			</>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	console.log('reddd');
	return {
		AddProduct: (values) => {
			console.log(values);
			return dispatch(AddProduct(values));
		},
	};
};
export default withRouter(connect(null, mapDispatchToProps)(AddProducts));
