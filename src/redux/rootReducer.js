const initialState = {
    loading: false,
    cartItems:[]
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_LOADING':
            return {
                ...state,
                loading:true
            }
        case 'HIDE_LOADING':
            return {
                ...state,
                loading:false
            }
        case 'Add_To_Cart':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case 'UPDATE':
            return {
                ...state,
                cartItems: state.cartItems.map((item) => item._id === action.payload._id ? {...item, quantity: action.payload.quantity} : item)
            }
        case 'DELETE':
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item._id !== action.payload._id  )
            }
        default:
            return state;
    }
}