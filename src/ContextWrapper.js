import React, { useReducer, createContext, useContext, useEffect } from "react";

const reducer = (state, action) => {

    let address;

    switch(action.type){
        case "gmail" :
            address= "osxzhg@gmail.com";
            return {...state,address};
        case "outlook" :
            address = "osxzhg@outlook.com";
            return {...state,address};
        case "addPhoneNumber" :
            const phoneNumber = action.phoneNumber;
            return {...state, phoneNumber};

    }
}

const initialState = {
    address: undefined
};

export const Context = createContext();

export const ContextProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const contextValue = {
        state,
        dispatch,
        addPhoneNumber: (phoneNumber) => dispatch({type:"addAddress",phoneNumber})
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );

}

export function useMyContext() {
    return useContext(Context);
}

export default ContextProvider;