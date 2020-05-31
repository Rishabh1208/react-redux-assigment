import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

export default class searchBar extends Component {
	render() {
		return (
			<>
				<Navbar bg='light' expand='lg'>
					<Navbar.Brand href='#home'>Inventory Product</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Form inline>
							<FormControl
								type='text'
								onChange={(e) => this.props.search(e.target.value)}
								value={this.props.value}
								placeholder='Search'
								className='mr-sm-2'
							/>
							<Link to='/addproduct'>
								<Button variant='primary'>Add Product</Button>
							</Link>
						</Form>
					</Navbar.Collapse>
				</Navbar>
				<Navbar bg='primary' expand='lg'>
					<Navbar.Brand href='#home'>Inventory List</Navbar.Brand>
				</Navbar>
			</>
		);
	}
}
