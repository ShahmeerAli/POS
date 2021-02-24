import { BILLS_FAIL, BILLS_LOADING, BILLS_SUCCESS } from "../types";


const defaultState={
    loading:false
};

export const lastBillReducer = (state= defaultState, action) => {
    switch (action.type) {
        case BILLS_FAIL:
            return (false)
        case BILLS_LOADING:
            return (true)
        case BILLS_SUCCESS:
            return(action.payload)
        default:
            return state; 
    }
};