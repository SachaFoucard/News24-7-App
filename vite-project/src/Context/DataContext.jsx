import React, { useEffect, useState } from 'react'
import { createContext } from 'react';


export const DataContext = createContext();

export default function DataContextProvider({ children }) {

    const [worldWide, setWorldWide] = useState([]);
    const [business, setBusiness] = useState([])
    const [sciences, setSciences] = useState([]);
    const [entertainment, setEntertainment] = useState([]);
    const [politics, setPolitics] = useState([]);

    var myHeaders = new Headers();

    var myInit = { method: 'GET',
               headers: myHeaders,
               mode:'no-cors',
               cache: 'default' };

    const LoadApiWorld = async () => {
        try {
            let res = await fetch('https://inshorts.deta.dev/news?category=world');
            let data = await res.json();
            setWorldWide(data.data)
            console.log(worldWide);
        } catch (error) {
            console.log(error);
        }
    }

    const LoadApiBusiness = async () => {
        try {
            let res = await fetch('https://inshorts.deta.dev/news?category=business');
            let data = await res.json();
            setBusiness(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    const LoadApiSciences = async () => {
        try {
            let res = await fetch('https://inshorts.deta.dev/news?category=science');
            let data = await res.json();
            setSciences(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    const LoadApiEntertainment = async () => {
        try {
            let res = await fetch('https://inshorts.deta.dev/news?category=entertainment');
            let data = await res.json();
            setEntertainment(data.data)
        } catch (error) {
            console.log(error);
        }
    }
    const LoadApiPolitics = async () => {
        try {
            let res = await fetch('https://inshorts.deta.dev/news?category=politics');
            let data = await res.json();
            setPolitics(data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        LoadApiWorld();
        LoadApiBusiness();
        LoadApiSciences();
        LoadApiEntertainment()
        LoadApiPolitics()
    }, [])

    const value = {
        setWorldWide,
        worldWide,
        business,
        sciences,
        entertainment,
        politics
    }
    return (
        <>
            {
                <DataContext.Provider value={value} >
                    {children}
                </DataContext.Provider>
            }

        </>
    )
}
