import styles from './Main.module.scss';

const Main = (props) => {
    return (
        <Main className={styles.main}>{props.children}</Main>
    );
};

export default Main;
