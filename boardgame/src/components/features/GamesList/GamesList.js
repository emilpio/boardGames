import styles from './GamesList.module.scss';
import Button from '../../common/Button/Button';
import { useSelector } from 'react-redux';
import { addGame } from '../../../redux/GamesReducer';
import { removeGame } from '../../../redux/GamesReducer';
import { useDispatch } from 'react-redux';

const GamesList = ({ id }) => {
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  const remove = (gameId) => {
    dispatch(removeGame(gameId));
  };

  return (
    <article className={styles.column}>
      <ul className={styles.cards}>
        {games.map((game) => (
          <li className={styles.card} key={game.id}>
            {' '}
            {game.title} by {game.author}{' '}
            <button onClick={remove}>remove</button>{' '}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default GamesList;
