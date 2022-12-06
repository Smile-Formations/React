import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TracksPage from '../TracksPage/TracksPage';

import "./App.css";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TracksPage/>} />
                <Route path="/track" element={<TrackPage categories={categories} />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;