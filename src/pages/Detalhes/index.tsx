import Pokemon from '../../components/PokemonDetalhes';
import style from './Detalhes.module.scss';

const Detalhes = () => {
    return (
        <div className={style.container}>
            <Pokemon />
        </div>
    )
}

export default Detalhes;