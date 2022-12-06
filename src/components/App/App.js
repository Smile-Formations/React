import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import TracksPage from '../TracksPage/TracksPage';

import "./App.css";
import TrackPage from "../TrackPage/TrackPage";
import {useCategories} from "../../hooks/useCategories/useCategories";

function App() {

    const categories = useCategories();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TracksPage/>} />
                <Route path="/track" element={<TrackPage categories={categories}/>} />
                <Route path="/track/:id" element={<TrackPage categories={categories} />}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;