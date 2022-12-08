import React, { createContext, useContext, useState, useReducer } from 'react'
import { currencyReducer } from './Reducer'



const Currency = createContext()


const CurrencyContext = ({ children }) => {

    const [ currency, setCurrency ] = useState(localStorage.getItem('currency') === 'USD' ? '$' : '₦')
    console.log(setCurrency)

    const [ state, dispatch ] = useReducer(currencyReducer, {
        currency: currency,
        currencies: [ "USD", "NGN" ],
        rate: 144
    })

    return (
        <Currency.Provider
            value={{
                state, dispatch
            }}
        >
            {children}
        </Currency.Provider>
    )
}

export default CurrencyContext;

export const CurrencyState = () => {
    return useContext(Currency);
}