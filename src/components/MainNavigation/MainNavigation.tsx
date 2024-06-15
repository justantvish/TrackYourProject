import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.scss';

const MainNavigation = () => {

    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <NavLink
                        to="/"
                        className={classes.link}
                        end
                    >
                        Dashboard
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        to="board"
                        className={classes.link}
                    >
                        Project
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavigation;
