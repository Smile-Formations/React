import List from "../List/List";

function Container(props) {

    return(
        <List
            tracks={props.tracks}
            categories={props.categories}
        />
    )
}

export default Container