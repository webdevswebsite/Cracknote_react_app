
export const currencyReducer = (state, action) => {
    switch (action.type) {
        case "USD":
            return { ...state, currency: '$' };
        case "NGN":
            return { ...state, currency: '₦' };
        default:
           return state;
    }
}