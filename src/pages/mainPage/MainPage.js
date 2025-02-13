import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacter } from '../../redux/actions/action';
import CharactersCard from '../../components/characterCard/CharactersCard';
import styles from './MainPage.module.css';

function MainPage() {
    const { characters } = useSelector(state => state.charactersReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacter());
    }, [dispatch]);

    return (
        <div >
            <h1>Ледниковый пероиод персонажи</h1>
            <div className={styles.conatainer}>

                {characters && characters.map((item, index) => (
                    <CharactersCard key={index} item={item}  />
                ))}
            </div>
        </div>
    );
}

export default MainPage;