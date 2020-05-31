import * as ActionTypes from '../actions/actionType';
import { ProductDetails } from '../data';

const product = [...ProductDetails];

export function FetchList(
	state = {
		productList: [],
		value: '',
		searchList: [],
	},
	action
) {
	switch (action.type) {
		case ActionTypes.PRODUCT_LIST:
			return { ...state, productList: product };

		case ActionTypes.SEARCH:
			const value = action.payload;
			const original = [...state.productList];

			const searchList = original.filter(
				(val) =>
					val.ProductName.toLowerCase().indexOf(value.toLowerCase()) !== -1
			);

			return { ...state, value, searchList };

		case ActionTypes.ADD_PRODUCT:
			const user = { ...action.payload };
			const newproduct = [...state.productList];
			console.log('oldproduct', newproduct[newproduct.length - 1].id + 1);
			user.id = newproduct[newproduct.length - 1].id + 1;
			console.log(user.id);
			newproduct.push(user);
			console.log('newproduct', newproduct);
			state.productList = [...newproduct];

			return { ...state };

		default:
			return state;
	}
}
