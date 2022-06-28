import Pokemon from '../../components/Pokemon';
import style from './Detalhes.module.scss';

const Detalhes = () => {
    return (
        <div className={style.container}>
            <Pokemon />
        </div>
    )
}

export default Detalhes;