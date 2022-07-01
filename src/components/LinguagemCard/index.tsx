import style from './LinguagemCard.module.scss';
import pokemon from '../../assets/bulbassauro.svg';
import background from '../../assets/Pokeball-card.svg';
import { useNavigate } from 'react-router-dom';
import listaLinguagens from '../../linguagens.json'


interface Props {
	linguagem: typeof listaLinguagens[0]
}

const PokemonCard = ({ linguagem }: Props) => {

	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/detalhes/${linguagem.Language}`)
	}

	return (
		<div className={style.card} onClick={handleClick}>
			<span className={style.card__title}>{linguagem['Intended use']}</span>
			<div className={style.pokemon}>
				<div className={style.texts}>
					{linguagem.Imperative.split(',').map((detalhe, key) => (
						<>
							{detalhe ? (
								<span className={style.texts__atributos} key={key}>{detalhe.replace(' ', '')}</span>
							) : (
								null
							)}
						</>
					))}
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