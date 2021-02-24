import { ADDTOCART,BILLS_FAIL,BILLS_LOADING,BILLS_SUCCESS,BILL_FAIL,BILL_LOADING,BILL_SUCCESS,CALCALLTOTAL, ORDER_TABLE_FAIL, ORDER_TABLE_LOADING, ORDER_TABLE_SUCCESS } from "../types"
import axios from "axios";

export const addToCart = (cart) => (dispatch) => {
    dispatch({
        type: ADDTOCART,
        payload: cart
    })
}


export const calcAllTotal = (value) => (dispatch) => {
    dispatch({
        type: CALCALLTOTAL,
        payload: value
    })
}

export const getLastBill = () => async (dispatch) => {
    try{
        dispatch({
            type:BILLS_LOADING
        })

        const res = await axios.get("http://localhost:5001/lastBill");
        dispatch({
            type: BILLS_SUCCESS,
            payload: res.data[0]
        })
    } catch(e){
        dispatch({
            type: BILLS_FAIL
        })
    }
}



export const getOrderTable = () => async (dispatch) => {
    try{
        dispatch({
            type:ORDER_TABLE_LOADING
        })

        const res = await axios.get("http://localhost:5001/orderTable");
        dispatch({
            type: ORDER_TABLE_SUCCESS,
            payload: res.data
        })
    } catch(e){
        dispatch({
            type: ORDER_TABLE_FAIL
        })
    }
}



export const getBill = (id) => async (dispatch) => {
    try{
        dispatch({
            type:BILL_LOADING
        })

        const res = await axios.get(`http://localhost:5001/bill/${id}`);
        dispatch({
            type: BILL_SUCCESS,
            payload: res.data
        })
    } catch(e){
        dispatch({
            type: BILL_FAIL
        })
    }
}