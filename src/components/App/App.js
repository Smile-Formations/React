import List from "../List/List";
import "./App.css"
import {useEffect, useState} from "react";
import {getTracks} from "../../services/track/track";
import {useCategories} from "../../hooks/useCategories/useCategories";

function App() {

    const [tracks, setTracks] = useState([]);
    const categories = useCategories();

    console.log(categories);

    useEffect(() => {
        getTracks().then(tracks => setTracks(tracks));
    }, []);

    return (
        <List tracks={tracks} />
    );
}

export default App;