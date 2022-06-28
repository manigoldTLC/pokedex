import style from './Pokemon.module.scss';
import PokemonSvg  from '../../assets/bulbassauro.svg';
import Tabela from '../Tabela';


const Pokemon = () => {
    return (
        <>
            <span className={style.title}>Bulbassauro</span>
            <div className={style.pokemon}>
                <img src={PokemonSvg} alt="imagem da página de detalhes" />
            </div>
            <span className={style.detalhes}>Detalhes</span>
            <Tabela />
        </>
    )
}

export default Pokemon