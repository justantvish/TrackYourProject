import MainNavigation from '../MainNavigation/MainNavigation';
import Logo from '../Logo/Logo';

import styles from './Header.module.scss';

const Header = () => {

    return (
        <header className={styles.header}>
            <Logo />
            <MainNavigation />
        </header>
    );
}

export default Header;