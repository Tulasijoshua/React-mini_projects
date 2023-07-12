const SingleReducer = (state, action) => {


    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            }

        case "GET_SINGLE_PRODUCT":
            return {
                ...state,
                singleProduct: action.payload,
            }

        default:
            return state;
    }

}

export default SingleReducer;