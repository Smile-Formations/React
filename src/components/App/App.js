import {
    BrowserRouter as Router,
    /*Navigate, */
    Route,
    Routes
} from 'react-router-dom';

import { useCategories } from '../../hooks/useCategories/useCategories';

import TrackPage from '../TrackPage/TrackPage';
import TracksPage from '../TracksPage/TracksPage';
import About from "../About/About";
import Layout from '../Layout/Layout';
import Error404 from "../Error404/Error404";

import "./App.css";

function App() {

    const categories = useCategories();

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<TracksPage categories={categories} />}/>
                    <Route path="track" element={<TrackPage categories={categories} />}/>
                    <Route path="track/:id" element={<TrackPage categories={categories} />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="*" element={<Error404 />}/>
                    {/*<Route path="*" element={<Navigate to="/" />}/>*/}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
