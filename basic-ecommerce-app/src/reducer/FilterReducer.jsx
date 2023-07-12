const FilterReducer = (state, action) => {
    switch(action.type) {
        case "GET_ALL_PRODUCTS":
            let priceArr = action.payload.map((curElem) => curElem.price);

            let maxPrice = Math.max(...priceArr);
            let minPrice = Math.min(...priceArr)

            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: {...state.filters, maxPrice, price: maxPrice, minPrice},
            }

        case "UPDATE_FILTERS_VALUE":

            const { name, value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [`${name}`]: value,
                },
            };

            case "FILTER_PRODUCTS":
                let {all_products} = state;
                console.log(all_products)
                let tempFilterProduct = [...all_products];

                const {text, category, price, color} = state.filters;

                // if(text) {
                //     tempFilterProduct = tempFilterProduct.filter((curElem) => {
                //         return curElem.productName.toLowerCase().includes(text);
                //     })
                // }
                if(category !== "all") {
                    tempFilterProduct = tempFilterProduct.filter(product => JSON.stringify(product).includes(category))
                    return {
                        ...state,
                        filter_products: tempFilterProduct,
                    }
                }

                if (price === 0) {
                    tempFilterProduct = tempFilterProduct.filter(
                        (curPrice) => curPrice.price == price
                        );
                } else {
                    tempFilterProduct = tempFilterProduct.filter(
                        (curPrice) => curPrice.price <= price
                    );
                }

                if (color !== "all") {
                    tempFilterProduct = tempFilterProduct.filter((curColor) => {
                        return curColor.colors.includes(color)
                    })
                }

                return {
                    ...state,
                    filter_products: tempFilterProduct,
                }

        default:
            return state;
    }

}

export default FilterReducer