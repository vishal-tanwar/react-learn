import React from "react";
import { createRoot } from 'react-dom/client';


function App({name, age}) {


    return (
        <>
            <p>Hello, { name}, you're {age} years old </p>

        </>
    )
}

if (document.querySelector('#root')) {
    const root = createRoot(document.querySelector('#root'));

    root.render(
        <App name="Vishu" age="24" />
    )
}
