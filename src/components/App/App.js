import "./App.css";

// Class Component example

/*class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            categories: []
        }
        this.interval = null;
        this.button = createRef();
        this.button2 = createRef();
    }

    componentDidMount() {
        this.bullshitFunction();
        this.button.current.
            addEventListener('click', this.handleClick);
        this.button2.current.
        addEventListener('click', this.handleClick);
    }

    componentWillUnmount() {
        this.button.current.
        removeEventListener('click', this.handleClick);
        this.button2.current.
        removeEventListener('click', this.handleClick);
    }

    bullshitFunction = () => {
        this.interval = setInterval(() => {
            this.handleClick();
            //console.log(this)
        }, 1000);
    }

    handleClick = (ev = null) => {
        if (ev) {
            switch (ev.target.name) {
                case 'inc': this.setState({count: this.state.count + 1}); break;
                case 'dec': this.setState({count: this.state.count - 10}); break;
            }
        } else {
            this.setState({count: this.state.count + 1})
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button ref={this.button} name="inc" type="button">Add +1</button>
                <button ref={this.button2} name="dec" type="button">Add -10</button>
            </div>
        )
    }
}*/



// Fucking HOC Explanation

/*function BlogPost(props) {

    return(
        <div style={props.style}>
            <h3>Toto{props.data && ' with HOC'}</h3>
            <p style={{color: 'pink'}}>Composant{props.data && ` de ${props.data}`}</p>
            {props.data &&
                <p>
                    Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus.

                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat.

                    Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta.
                </p>
            }
        </div>
    )
}

function Comments(props) {

    let comments = [];
    for (let i = 0; i < 20; i++) {
       comments.push('Je suis le commentaire ' + (i+1));
    }
    return(
        <>
            <small>Commentaires de l'article dont l'ID est "{props.articleId}"</small>
            <ul>
                {comments.map((comment, i) => {
                   return(<li key={i}>{comment}</li>)
                })}
            </ul>
        </>
    )
}

function fullBlogPostWithCommentsHOC(Cmp) {
    function WithHoc(props) {
        console.log(props)
        return (
            <article>
                <Cmp {...props} />
                <Comments articleId={props.articleId}/>
            </article>
        );
    }

    WithHoc.displayName = `WithHoc(${getDisplayName(Cmp)})`;
    return WithHoc;
}

function getDisplayName(Cmp) {
    return Cmp.displayName || Cmp.name || 'Component';
}

function App() {

    const FullPost = fullBlogPostWithCommentsHOC(BlogPost)
    console.log(FullPost.displayName)
    return(
        <>
            <BlogPost articleId="1"/>
            <hr/>
            <FullPost articleId="1" data='tata' style={{backgroundColor: 'black'}} />
        </>
    )
}*/

// Render props

function getFoobar() {
    return {foo: 'Papa', bar: ' Noël'}
}

function MyComponent(props){

    const { children } = props;

    const foobar = getFoobar();

    return (
        <div>
            {children(foobar)}
        </div>
    );
}

function App () {

    return (
        <MyComponent>
            {(myComponentChildrenFunction) => (
                <div style={styles.toto}>
                    <span>{process.env.REACT_APP_TOTO}</span>
                    <br/>
                    <span style={styles.span1}>{myComponentChildrenFunction.foo}</span>
                    <span style={styles.span2}>{myComponentChildrenFunction.bar}</span>
                </div>
            )}
        </MyComponent>
    )
}

const styles = {
    toto: {
        color: 'yellow',
        transformOrigin: '50% 50%',
        transform: 'rotate(-45deg)',
        width: 'max-content',
        position: 'relative',
        top: 50,
        left: 50
    },
    span1: {
        color: 'var(--primary-color)'
    },
    span2: {
        color: 'var(--secondary-color)'
    }
}

export default App;
