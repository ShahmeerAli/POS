import { SEARCH_PRODUCTS } from "../types";





export const searchReducer = (state= {}, action) => {
    switch (action.type) {
        case SEARCH_PRODUCTS:
            return{
                name:action.payload.name,
                items: action.payload.items
            }
        default:
            return state; 
    }
};