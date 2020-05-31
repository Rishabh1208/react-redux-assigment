import * as ActionTypes from './actionType';

export function ProductList() {
	return {
		type: ActionTypes.PRODUCT_LIST,
	};
}

export function AddProduct(product) {
	return {
		type: ActionTypes.ADD_PRODUCT,
		payload: {
			id: product.id,
			Thumbnails: product.Thumbnails,
			ProductName: product.ProductName,
			category: product.category,
			SKU: product.SKU,
			Manufacturer: product.Manufacturer,
			InStock: product.InStock,
			Qty: product.Qty,
			ModelNumber: product.ModelNumber,
			Promotion: 'New',
			Status: 'Active',
		},
	};
}

export function Search(value) {
	return {
		type: ActionTypes.SEARCH,
		payload: value,
	};
}
