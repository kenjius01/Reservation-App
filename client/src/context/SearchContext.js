import { useEffect, useReducer } from 'react';
import { createContext } from 'react';

const INITIAL_STATE = {
    destination: JSON.parse(localStorage.getItem('searchInfo')).destination || null,
    dates: JSON.parse(localStorage.getItem('searchInfo')).dates || [],
    options:JSON.parse(localStorage.getItem('searchInfo')).options ||{
        adults: 0,
        children: 0,
        room: 0,
    },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
    switch (action.type) {
        case 'NEW_SEARCH':
            return action.payload;
        case 'RESET_SEARCH':
            return INITIAL_STATE;
        default:
            return state;
    }
};

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
    useEffect(() => {
        localStorage.setItem('searchInfo', JSON.stringify(state));
    }, [state]);

    return (
        <SearchContext.Provider
            value={{
                destination: state.destination,
                dates: state.dates,
                options: state.options,
                dispatch,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
