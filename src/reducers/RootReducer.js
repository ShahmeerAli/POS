import { combineReducers } from 'redux';
import { pageReducer } from './pageReducer';
import { productsReducer } from './productReducers';
import { searchReducer } from './searchReducers';
import { sortReducer } from './sortReducers';
import { addToCartReducer } from './addToCartReducer';
import { calcAllTotalReducer } from './calcTotalReducer';
import { lastBillReducer } from './lastBillReducer';
import { orderTableReducer } from './getOrderTableReducer';
import { getBillReducer } from './getBillReducer';


const RootReducer = combineReducers({
    products: productsReducer,
    sort: sortReducer,
    search: searchReducer,
    page: pageReducer,
    cart: addToCartReducer,
    total: calcAllTotalReducer,
    lastBillId: lastBillReducer,
    orderTable: orderTableReducer,
    bill: getBillReducer
});
export default RootReducer;
