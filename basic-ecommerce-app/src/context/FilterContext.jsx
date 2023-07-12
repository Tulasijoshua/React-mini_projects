import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { PRODUCTS } from '../Products';
import reducer from '../reducer/FilterReducer'
import { useSingleContext } from './SingleProductContext';

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    filters: {
        text: "",
        category: "all",
        color: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },
}

// const reducer = (state, action) => {

// }

const FilterContextProvider = ({children}) => {
    const { products } = useSingleContext()

    const [state, dispatch] = useReducer(reducer, initialState);

    const updateFilterValues = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({type: "UPDATE_FILTERS_VALUE", payload: {name, value}});
    }

    useEffect(() => {
        dispatch({type: "FILTER_PRODUCTS"})
    }, [products, state.filters ])

    useEffect(() => {
        dispatch({type: "GET_ALL_PRODUCTS", payload: products})
    }, [products])

  return (
    <FilterContext.Provider value={{...state, updateFilterValues}}>
        {children}
    </FilterContext.Provider>
  )
};

export const useFilterContext = () => {
    return useContext(FilterContext)
}

export default FilterContextProvider;