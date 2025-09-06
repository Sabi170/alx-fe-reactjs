import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const counterBoxStyle = {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        padding: '30px 40px',
        textAlign: 'center',
    };

    const paragraphStyle = {
        fontSize: '2.5em',
        marginBottom: '25px',
        fontWeight: 'bold',
        color: '#34495e',
    };

    const buttonBaseStyle = {
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '12px 25px',
        margin: '0 10px',
        fontSize: '1.1em',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        outline: 'none',
    };

    const incrementButtonStyle = {
        ...buttonBaseStyle,
        backgroundColor: '#3498db',
    };

    const decrementButtonStyle = {
        ...buttonBaseStyle,
        backgroundColor: '#e67e22',
    };

    const resetButtonStyle = {
        ...buttonBaseStyle,
        backgroundColor: '#e74c3c',
    };

    return (
        <div style={counterBoxStyle}>
            <p style={paragraphStyle}>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;