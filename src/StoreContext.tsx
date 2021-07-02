import React from 'react';
import {storeType} from "./redux/store";

export const StoreContext = React.createContext({} as storeType);

type ProviderPropsType = {
    store:storeType;
    children:React.ReactNode
}

export const Provider = (props: ProviderPropsType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}