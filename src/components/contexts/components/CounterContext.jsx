import React, { createContext, useState } from 'react'
export const CounterContext = createContext();

export const CounterProvider = ({children}) => {
    const [contador, setContador] = useState(1); 
    
    return <CounterContext.Provider value={[contador, setContador]}>
            {children}
        </CounterContext.Provider>
}
