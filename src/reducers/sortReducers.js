import { SORT_PRODUCTS } from "../types";





export const sortReducer = (state= {}, action) => {
    switch (action.type) {
        case SORT_PRODUCTS:
            return{
                cat:action.payload.cat,
                items: action.payload.items
            }
        default:
            return state; 
    }
};