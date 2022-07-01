import { ReactComponent as Logo } from '../../assets/Pokeball.svg';
import { ReactComponent as Menu } from '../../assets/Vector.svg';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';


const Header = () => {

    return (
        <header className={styles.header}>
            <Link className={styles.header__logo} to='/'>
                <Logo />
            </Link>
            <button className={styles.header__menu}>
                <Menu />
            </button>
        </header>
    )
}

export default Header;