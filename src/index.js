import React from 'react';
import { createRoot } from 'react-dom/client';

import Timer from './components/Timer';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Timer />
  </React.StrictMode>
);
