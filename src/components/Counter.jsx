import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div className="compteur">
            <h3>Counter: {count}</h3>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};