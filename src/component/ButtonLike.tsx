import { useState } from "react"


export const ButtonLike = () => {

    const [status, setStatus] = useState("")
    
    const handleChange = () => {
        if (status === "") {
            setStatus('like')
        } else if (status === "like") {
            setStatus('Unlike')
        } else {
            setStatus('like')

        }
    }

    return (
        <>
        <button onClick={handleChange}>{status}</button>
        </>
    )
}