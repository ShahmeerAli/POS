import { ORDER_TABLE_FAIL, ORDER_TABLE_LOADING, ORDER_TABLE_SUCCESS } from "../types";


const defaultState={
    loading:false
};


export const orderTableReducer = (state= defaultState, action) => {
    switch (action.type) {
        case ORDER_TABLE_FAIL:
            return { loading: false,};
        case ORDER_TABLE_LOADING:
            return { loading: true,}
        case ORDER_TABLE_SUCCESS:
            return{
                loading:false,
                products: action.payload
            }
        default:
            return state; 
    }
};