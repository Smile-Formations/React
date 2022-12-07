import Container from "../Container/Container";
import {Link} from "react-router-dom";

import "./Error404.css";

function Error404 () {

    return (
        <Container>
            <h2>Error 404</h2>
            <p>Page not found</p>
            <Link className="Title__button" to="/">
                Back to Home
            </Link>
        </Container>
    )
}

export default Error404;