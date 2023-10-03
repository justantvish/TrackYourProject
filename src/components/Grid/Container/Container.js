import './Container.scss';

const Container = (props) => {

    return (
        <div className={props.class}>{props.children}</div>
    );
};

export default Container;
