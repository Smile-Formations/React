import {lazy, Suspense, useState, useTransition} from "react";
import {
    BrowserRouter as Router,
    /*Navigate,*/
    Route,
    Routes,
} from "react-router-dom";

import Categories from "../../contexts/Categories";
import { useCategories } from "../../hooks/useCategories/useCategories";

import Layout from "../Layout/Layout";
import Loader from "../Loader/Loader";

import "./App.css";

const TrackPage = lazy(() => import("../TrackPage/TrackPage"));
const TracksPage = lazy(() => import("../TracksPage/TracksPage"));
const About = lazy(() => import("../About/About"));
const Error404 = lazy(() => import("../Error404/Error404"));

function App() {
    const [isPending, startTransition] = useTransition();
    const [value, setValue] = useState(0);
    const [count, setCount] = useState(0);

    function handleChange(event) {
        const { value } = event.target;
        setValue(value);
        startTransition(() => {
            setCount(value);
        })
    }

    return (
        <div>
            <input type="range" onChange={handleChange} value={value}/>
            {isPending ? <div>Loading...</div> : <List count={count}/>}
        </div>
    );
}

function List(props) {
    const { count } = props;
    return new Array(+count).fill().map((_, i) => (
        <div key={i}>{i}</div>
    ));
}

export default App;
