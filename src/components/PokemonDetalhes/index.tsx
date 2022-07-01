import style from './Pokemon.module.scss';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import PokemonSvg  from '../../assets/bulbassauro.svg';
import Tabela from '../Tabela';
import { useNavigate, useParams } from 'react-router-dom';
import listaLinguagens from '../../linguagens.json'
import React, { useState } from 'react';

interface Linguagem {
    Language: number;
    "Intended use": string;
    Imperative: string;
    "Object-oriented": string;
    Functional: string | number | number[];
    Procedural: string;
    Generic: string;
    Reflective: string;
    "Event-driven": string;
    "Other paradigm(s)": string;
    "Standardized?": string;
}

const Pokemon = () => {

    const navigate = useNavigate();
    let { id } = useParams();
    const linguagens = listaLinguagens;

    const [ getLinguagemState, setGetLinguagemState ] = useState<React.SetStateAction<Linguagem | undefined>>();

    const getLinguagem = (id: string, linguagens: typeof listaLinguagens) => {
        if (typeof id !== undefined) {
            let idN: number = +id
            return linguagens[idN - 1]
        }
    }

    let linguagem;

    if (id) {
        linguagem = getLinguagem(id, linguagens)
    }

    return (
        <>
            <div className={style.pokemonHeader}>
                <HiOutlineArrowNarrowLeft onClick={() => navigate(-1)} />
                <span className={style.pokemonHeader__title}>{linguagem?.['Intended use']}</span>
            </div>
            <div className={style.pokemon}>
                <img src={PokemonSvg} alt="imagem da página de detalhes" />
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

export default Pokemon