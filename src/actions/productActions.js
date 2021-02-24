import { PRODUCTS_FAIL, PRODUCTS_SUCCESS,PRODUCTS_LOADING,SORT_PRODUCTS,SEARCH_PRODUCTS,NEXT_PAGE } from "../types";
import axios from "axios";


export const getProducts = () => async (dispatch) => {
    try{
        dispatch({
            type:PRODUCTS_LOADING
        })

        const res = await axios.get("http://localhost:5001/products");
        dispatch({
            type: PRODUCTS_SUCCESS,
            payload: res.data
        })
    } catch(e){
        dispatch({
            type: PRODUCTS_FAIL
        })
    }
}


export const sortProducts = (products, cat) => (dispatch) => {
    dispatch({
        type: SORT_PRODUCTS,
        payload: {
            cat: cat,
            items: cat === ""? products :
            products.filter(x => (x.category === cat))
        }
    })
}




export const searchProducts = (products, name) => (dispatch) => {
    dispatch({
        type: SEARCH_PRODUCTS,
        payload: {
            name: name,
            items: name === ""? products :
            products.filter(x => (x.title.includes(name.toUpperCase())))
        }
    })
}


export const nextPage = (lastPage, page, products) => (dispatch) => {
    dispatch({
        type: NEXT_PAGE,
        payload: {
                newPage: page === "next" ? ( products.length >= lastPage[0]+18 ? lastPage.map(e => (e+18)): lastPage) 
                    : page === "last" ? (lastPage[0] >= 18 ? lastPage.map(e => (e-18)): lastPage) : [0,18]
        }
    })
}


