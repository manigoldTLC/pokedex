import { ReactComponent as Logo } from '../../assets/Pokeball.svg';
import { ReactComponent as Menu } from '../../assets/Vector.svg';
import styles from './Header.module.scss';


const Header = () => {
    return (
        <header className={styles.header}>
            <a className={styles.header__logo} href="#">
                <Logo />
            </a>
            <a className={styles.header__menu} href="#" >
                <Menu />
            </a>
        </header>
    )
}

export default Header;