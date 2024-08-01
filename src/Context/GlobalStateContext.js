import React, { createContext, useState, useReducer } from 'react';

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
    const [state, setState] = useState({
        isLogedin: false,
        id:'',
        isAnswered:false,
        categories  :[],
        UserName:'',
        loading:false,
        
    });

    const setLogedin = (i) => {
        setState((prevState) => ({
            ...prevState,
            isLogedin: i,
        }));
    };
    const setId = (i) => {
        setState((prevState) => ({
            ...prevState,
            id: i,
        }));
    };
    const setisAnswered = (i) => {
        setState((prevState) => ({
            ...prevState,
            isAnswered: i,
        }));
    };
    const setCategory = (i) => {
        setState((prevState) => ({
            ...prevState,
            categories: i,
        }));
    };
    const setUserName = (i) => {
        setState((prevState) => ({
            ...prevState,
            UserName: i,
        }));
    };
    const setLoading = (i) => {
        setState((prevState) => ({
            ...prevState,
            loading: i,
        }));
    };
    

    return (
        <GlobalStateContext.Provider value={{ state, setLogedin ,setId,setisAnswered ,setCategory,setUserName,setLoading}}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export { GlobalStateContext, GlobalStateProvider };
