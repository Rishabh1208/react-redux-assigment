import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideDrawer from './components/presentational/sideDrawer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InventoryListTable from './components/container/table';
import AddProduct from './components/container/addProduct';

// Adding routing to the application
function App() {
	return (
		<div>
			<BrowserRouter>
				<SideDrawer />
				<Switch>
					<Route path='/list' component={InventoryListTable} />
					<Route path='/addproduct' component={AddProduct} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
