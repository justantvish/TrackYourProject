import { NavLink } from 'react-router-dom';

import styles from './MainNavigation.module.scss';

const MainNavigation = () => {
    console.log(styles);

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink
                        to="/"
                        className={styles.link}
                        end
                    >
                        Home
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink
                        to="board"
                        className={styles.link}
                    >
                        Board
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavigation;
