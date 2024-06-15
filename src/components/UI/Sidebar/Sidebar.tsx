import MainNavigation from '../../MainNavigation/MainNavigation';
import classes from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <aside className={classes.sidebar}>
            <div className={classes.project}></div>
            <div className={classes.inner}>
                <MainNavigation/>
            </div>
        </aside>
    );
};

export default Sidebar;