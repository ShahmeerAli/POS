import { NEXT_PAGE } from "../types";





export const pageReducer = (state= {}, action) => {
    switch (action.type) {
        case NEXT_PAGE:
            return{
                page:action.payload
            }
        default:
            return state; 
    }
};