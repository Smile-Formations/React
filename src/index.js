import React from 'react';
import { createRoot } from 'react-dom/client';
import JukeBox from './components/JukeBox/JukeBox';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <JukeBox />
    </React.StrictMode>
);