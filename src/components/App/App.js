import List from "../List/List";
import "./App.css"
import {useEffect, useState} from "react";

function App() {

    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/tracks')
            .then(data => data.json())
            .then(tracks => setTracks(tracks));
    }, [setTracks]);

    return (
        <List tracks={tracks} />
    );
}

export default App;