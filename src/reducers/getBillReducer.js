import { BILL_FAIL, BILL_LOADING, BILL_SUCCESS } from "../types";


const defaultState={
    loading:false
};


export const getBillReducer = (state= defaultState, action) => {
    switch (action.type) {
        case BILL_FAIL:
            return { loading: false,};
        case BILL_LOADING:
            return { loading: true,}
        case BILL_SUCCESS:
            return{
                loading:false,
                products: action.payload
            }
        default:
            return state; 
    }
};