import style from './Pokemon.module.scss';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import PokemonSvg  from '../../assets/bulbassauro.svg';
import Tabela from '../Tabela';
import { useNavigate, useParams } from 'react-router-dom';
import linguagens from '../../linguagens.json';


const Pokemon: React.FC = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const linguagem = linguagens.find(item => item.Language === Number(id));

    return (
        <>
            <div className={style.pokemonHeader}>
                <HiOutlineArrowNarrowLeft onClick={() => navigate(-1)} />
                <span className={style.pokemonHeader__title}>{linguagem?.['Intended use']}</span>
            </div>
            <div className={style.pokemon}>
                    <>{linguagem?.Image ? (
                        <img src={linguagem.Image} alt="imagem da linguagem" />
                    ) : (
                        <img src={PokemonSvg} alt="imagem da página de detalhes" />
                    )}</>
            </div>
            <span className={style.detalhes}>Detalhes</span>
            <Tabela
                nomeLinguagem={linguagem?.['Intended use']}
                linguagemImperativa={linguagem?.Imperative}
                linguagemOO={linguagem?.['Object-oriented']}
                linguagemFuncional={linguagem?.Functional}
                linguagemProcedural={linguagem?.Procedural}
            />
        </>
    )
}

export default Pokemon;