import { lazy } from "react";
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";

import Categories from "../../contexts/Categories";
import { useCategories } from "../../hooks/useCategories/useCategories";

import Layout from "../Layout/Layout";

const TrackPage = lazy(() => import("../TrackPage/TrackPage"));
const TracksPage = lazy(() => import("../TracksPage/TracksPage"));

function App() {
    const categories = useCategories();

    return (
        <Categories.Provider value={categories}>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<TracksPage categories={categories} />} />
                        <Route
                            path="/track"
                            element={<TrackPage categories={categories} />}
                        />
                        <Route
                            path="/track/:id"
                            element={<TrackPage categories={categories} />}
                        />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Route>
                </Routes>
            </Router>
        </Categories.Provider>
    );
}

export default App;
