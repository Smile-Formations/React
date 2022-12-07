import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import Categories from "../../contexts/Categories";
import { useCategories } from '../../hooks/useCategories/useCategories';

import TrackPage from '../TrackPage/TrackPage';
import TracksPage from '../TracksPage/TracksPage';
import About from "../About/About";
import Error404 from "../Error404/Error404";
import Layout from '../Layout/Layout';

import "./App.css";

function App() {

    const categories = useCategories();

    return (
        <Categories.Provider value={categories}>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<TracksPage />}/>
                        <Route path="track" element={<TrackPage />}/>
                        <Route path="track/:id" element={<TrackPage />}/>
                        <Route path="about" element={<About />}/>
                        <Route path="*" element={<Error404 />}/>
                        {/*<Route path="*" element={<Navigate to="/" />}/>*/}
                    </Route>
                </Routes>
            </Router>
        </Categories.Provider>
    );
}

export default App;