import { createContext, useState, useContext } from 'react';

const LoaderContext = createContext();


export function LoaderProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);


    return (

        <>
            <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
                {children}
            </LoaderContext.Provider>

        </>

    );
}


// Hook personalizzato per usare il context più comodamente
export function useLoader() {
    return useContext(LoaderContext);
}