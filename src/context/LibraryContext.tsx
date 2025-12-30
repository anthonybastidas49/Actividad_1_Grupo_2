import  {createContext, type JSX} from "react";

const LibraryContext = createContext({});

export const LibraryProvider = ({children}:{children: JSX.Element}) => {
    return (
        <LibraryContext.Provider value={{}}>
            {children}
        </LibraryContext.Provider>
    )
}