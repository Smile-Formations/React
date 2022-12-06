import TrackForm from '../TrackForm/TrackForm';
import Container from '../Container/Container';
import {Link} from "react-router-dom";

function TrackPage(props) {

    const { categories } = props;

    return (
        <Container>
            <Link to="/">
                <span className="TracksPage__button">Back</span>
            </Link>
            <TrackForm
                categories={categories}
            />
        </Container>
    );
}

TrackPage.defaultProps = {
    categories: []
};

export default TrackPage;