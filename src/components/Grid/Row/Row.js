import styles from './Row.module.scss';

const Row = (props) => {
    return (
        <div className={styles.row}>{props.children}</div>
    );
};
