import { createRoot } from 'react-dom/client';
import React from 'react';
import App from "./versions/v1/components/App/App";

//const element = <div>Hell Yeah!</div>;
const root = createRoot(document.getElementById('root'));
//root.render(element);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
