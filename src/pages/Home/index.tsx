import PokemonCard from '../../components/PokemonCard';
import style from './Home.module.scss';


const Home = () => {
    return (
        <main className={style.main}>
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
        </main>
    )
}

export default Home