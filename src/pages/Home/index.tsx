import PokemonCard from '../../components/PokemonCard';
import style from './Home.module.scss';
import linguagensJson from '../../linguagens.json'
import { useState } from 'react';


const Home = () => {

    const linguagensData = linguagensJson;

    return (
        <main className={style.main}>
            {linguagensData.map(linguagem => (
                <PokemonCard
                    key={linguagem.Language}
                    linguagem={linguagem}
                />
            ))}
        </main>
    )
}

export default Home