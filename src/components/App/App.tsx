import { lazy, Suspense } from "react";
import {
    BrowserRouter as Router,
    /*Navigate,*/
    Route,
    Routes,
} from "react-router-dom";

// @ts-ignore
import Layout from "../Layout/Layout.tsx";
// @ts-ignore
import Loader from "../Loader/Loader.tsx";

// @ts-ignore
import Categories from "../../contexts/Categories.ts";
// @ts-ignore
import { useCategories } from "../../hooks/useCategories/useCategories.ts";

import "./App.css";

// @ts-ignore
const TrackPage = lazy(() => import("../TrackPage/TrackPage.tsx"));
// @ts-ignore
const TracksPage = lazy(() => import("../TracksPage/TracksPage.tsx"));
// @ts-ignore
const About = lazy(() => import("../About/About.tsx"));
// @ts-ignore
const Error404 = lazy(() => import("../Error404/Error404.tsx"));

function App() {

    const categories = useCategories();

    return (
        <Categories.Provider value={categories}>
            <Router>
                <Suspense fallback={<Loader/>}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<TracksPage />} />
                            <Route path="track" element={<TrackPage />} />
                            <Route path="track/:id" element={<TrackPage />} />
                            <Route path="about" element={<About />} />
                            <Route path="*" element={<Error404 />} />
                            {/*<Route path="*" element={<Navigate to="/" />} />*/}
                        </Route>
                    </Routes>
                </Suspense>
            </Router>
        </Categories.Provider>
    );
}

export default App;
