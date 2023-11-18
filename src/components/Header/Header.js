import Logo from '../Logo/Logo';
import Container from '../Grid/Container/Container';

import styles from './Header.module.scss';

const Header = () => {

    return (
        <header className={styles.header}>
            <Container class="container_max">
                <div className={styles.header_inner}>
                    <Logo />
                </div>
            </Container>
        </header>
    );
}

export default Header;