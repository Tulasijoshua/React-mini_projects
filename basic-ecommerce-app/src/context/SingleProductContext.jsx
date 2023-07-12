import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/SingleReducer'
import { PRODUCTS } from "../Products";

const SingleContext = createContext();

const initialState = {
    products: [],
    singleProduct: [],
}

export const SingleProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = (products) => {
        dispatch({type: "GET_PRODUCTS", payload: products})
    }

    useEffect(() => {
        getProducts(PRODUCTS)
    }, [])

    const getSingleProduct = (singleProduct) => {
        dispatch({type: "GET_SINGLE_PRODUCT", payload: singleProduct})
        // console.log(singleProduct)
    }

    return <SingleContext.Provider value={{...state, getSingleProduct}}>
        {children}
    </SingleContext.Provider>

};

export const useSingleContext = () => {
    return useContext(SingleContext);
};