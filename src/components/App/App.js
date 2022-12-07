import { lazy, Suspense } from "react";
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";

import Categories from "../../contexts/Categories";
import { useCategories } from "../../hooks/useCategories/useCategories";

import Layout from "../Layout/Layout";

import "./App.css";

const TrackPage = lazy(() => import("../TrackPage/TrackPage"));
const TracksPage = lazy(() => import("../TracksPage/TracksPage"));
const About = lazy(() => import("../About/About"));

function App() {
    const categories = useCategories();

    return (
        <Categories.Provider value={categories}>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<TracksPage />} />
                            <Route
                                path="track"
                                element={<TrackPage />}
                            />
                            <Route
                                path="track/:id"
                                element={<TrackPage />}
                            />
                            <Route
                                path="about"
                                element={<About />}
                            />
                            <Route
                                path="*"
                                element={<Error404 />}
                            />
                            {/*<Route path="*" element={<Navigate to="/" />} />*/}
                        </Route>
                    </Routes>
                </Suspense>
            </Router>
        </Categories.Provider>
    );
}

export default App;
