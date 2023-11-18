import MainNavigation from '../../MainNavigation/MainNavigation';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.project}></div>
            <div className={styles.inner}>
                <MainNavigation/>
            </div>
        </aside>
    );
};

export default Sidebar;