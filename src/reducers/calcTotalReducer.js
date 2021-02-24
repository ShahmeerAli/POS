import { CALCALLTOTAL } from "../types";

export const calcAllTotalReducer = (state= {}, action) => {
    switch (action.type) {
        case CALCALLTOTAL:
            return{
                total:action.payload
            }
        default:
            return state; 
    }
};