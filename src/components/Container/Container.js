import './Container.css';

function Container(props) {

  const { children } = props;

  return (
    <div className="Container">
      {children}
    </div>
  );
}

export default Container;
