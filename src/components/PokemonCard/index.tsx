import style from './PokemonCard.module.scss';
import pokemon from '../../assets/bulbassauro.svg';
import background from '../../assets/Pokeball-card.svg';


const PokemonCard = () => {
  return (
    <div className={style.card}>
        <span className={style.card__title}>Bulbassauro</span>
        <div className={style.pokemon}>
            <div className={style.texts}>
                <span className={style.texts__atributos}>green</span>
                <span className={style.texts__atributos}>poison</span>
            </div>

            <div className={style.imagem}>
                <img className={style.imagem__pokemon} src={pokemon} alt="imagem de um pokemon" />
                <img className={style.imagem__background} src={background} alt="imagem de background do card" />
            </div>
        </div>
    </div>
  )
}

export default PokemonCard