import "./JukeBox.css"

function JukeBox() {

    const track = {
        "id": 1,
        "title": "Find The Real",
        "album": "One Day Remains",
        "band": "Alter Bridge",
        "year": "2004",
        "poster": "https://i.ebayimg.com/images/g/OqoAAOSwJYVg1y6E/s-l500.jpg",
        "url": "https://www.youtube.com/watch?v=w9LZ0OkdxGg&ab_channel=AlterBridge-Topic",
        "category": 3,
        "description": "One Day Remains is the debut studio album by the American hard rock band Alter Bridge, released on August 10, 2004, on Wind-up Records."
    };

    return (
        <div className="JukeBox">
            <div>{track.title}</div>
            <div>{track.category}</div>
        </div>
    );
}

export default JukeBox;