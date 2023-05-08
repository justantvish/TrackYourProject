import { NavLink } from 'react-router-dom';

import styles from './MainNavigation.module.scss';

const MainNavigation = () => {


    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink
                        to="/"
                        className={`${styles.link} ${({isActive}) =>
                             isActive ? styles.active : null
                        }`}
                    >Home</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavigation;
