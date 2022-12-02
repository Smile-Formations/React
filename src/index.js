import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./versions/v1/components/App/App";

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
