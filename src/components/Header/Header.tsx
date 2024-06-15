import Logo from '../Logo/Logo';
import Container from '../UI/Grid/Container';

import classes from './Header.module.scss';

const Header = () => {

    return (
        <header className={classes.header}>
            <Container optionalClass="container_max">
                <div className={classes.header_inner}>
                    <Logo />
                </div>
            </Container>
        </header>
    );
}

export default Header;