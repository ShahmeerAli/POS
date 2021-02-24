import { ADDTOCART } from "../types";

export const addToCartReducer = (state= {}, action) => {
    switch (action.type) {
        case ADDTOCART:
            return{
                cart:action.payload
            }
        default:
            return state; 
    }
};