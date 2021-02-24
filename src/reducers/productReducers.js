import { PRODUCTS_FAIL, PRODUCTS_LOADING, PRODUCTS_SUCCESS } from "../types";



const defaultState={
    loading:false
};

export const productsReducer = (state= defaultState, action) => {
    switch (action.type) {
        case PRODUCTS_FAIL:
            return { loading: false,};
        case PRODUCTS_LOADING:
            return { loading: true,}
        case PRODUCTS_SUCCESS:
            return{
                loading:false,
                products: action.payload
            }
        default:
            return state; 
    }
};