import { useCounter } from "../hooks/useCounter";

const Counter = () => {
const { number, handleMinuse, handlePlus} = useCounter(); 
    return (
        <>
            <div style={{ display: 'flex', gap: 20}}>
                <button onClick={handleMinuse}>-</button>
                <p>{number}</p>
                <button onClick={handlePlus}>+</button>
            </div>
        </>
    )
}

export default Counter;