import { useState } from "react";

export const useCounter = () => {
    const handlePlus = () => {
        alert('Data Ditambah')
        setNumber(number + 1)
    }
    const handleMinuse = () => {
        if( number > 0) {
            alert("Data Dikurangi")
            setNumber(number - 1)
        }
    }

    const [number, setNumber] = useState(0) 

    return {
        number,
        handleMinuse,
        handlePlus
    }
}