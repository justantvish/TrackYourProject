import styles from './Column.module.scss';

const Column = (props) => {
    return (
        <div className={styles.col}>{props.children}</div>
    );
};

export default Column;
