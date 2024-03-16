import { useState } from "react";


export const activePageHandler  = () => {

    const [isHomeActive, setHomeActive] =useState(localStorage.getItem("activePage")==="/");
    const [isAboutUsActive, setAboutUsActive] =useState(localStorage.getItem("activePage")==="/aboutUs");
    const [isContactUsActive, setContactUsActive] =useState(localStorage.getItem("activePage")==="/contactUs");
    const [isEnrollNowActive, setEnrollNowActive] =useState(localStorage.getItem("activePage")==="/enrollPage");
   

    const toggleHomeActive  = () => {
        setHomeActive(true)
        setAboutUsActive(false)
        setContactUsActive(false)
        setEnrollNowActive(false)
        localStorage.setItem("activePage","/")
    };
     
     const toggleAboutUsActive  = () => {
       setHomeActive(false)
       setAboutUsActive(true)
       setContactUsActive(false)
       setEnrollNowActive(false)
       localStorage.setItem("activePage","/aboutUs")
     };
     const toggleContactUsActive  = () => {
       setHomeActive(false)
       setAboutUsActive(false)
       setContactUsActive(true)
       setEnrollNowActive(false)
       localStorage.setItem("activePage","/contactUs")
     };
     
     const toggleEnrollNowActive  = () => {
       setHomeActive(false)
       setAboutUsActive(false)
       setContactUsActive(false)
       setEnrollNowActive(true)
       localStorage.setItem("activePage","/enrollPage")
     };

    return{
        toggleHomeActive,
        toggleAboutUsActive,
        toggleContactUsActive,
        toggleEnrollNowActive,
        isHomeActive, 
        isAboutUsActive,
        isContactUsActive,
        isEnrollNowActive

    }
    
};

