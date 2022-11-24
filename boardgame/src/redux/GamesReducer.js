import shortid from 'shortid';
import { API_URL } from '../config';

//selectors
export const getAllGames = ({ games }) => games;

export const getGamesById = ({ games }, id) =>
  games.find((game) => games.id === id);

// // // actions
const createActionName = (actionName) => `app/games/${actionName}`;
const ADD_GAME = createActionName('ADD_GAME');
const REMOVE_GAME = createActionName('REMOVE_GAME');
const UPDATE_GAMES = createActionName('UPDATE_GAMES');
const UPDATE = createActionName('UPDATE');

// // // action creators
export const addGame = (payload) => ({ type: ADD_GAME, payload });
export const removeGame = (payload) => ({ type: REMOVE_GAME, payload });
export const updateTables = (payload) => ({ type: UPDATE_GAMES, payload });
export const update = (payload) => ({ type: UPDATE, payload });

export const fetchGames = (dispatch) => {
  fetch(`${API_URL}/games`)
    .then((res) => res.json())
    .then((games) => dispatch(updateTables(games)));
};

const gamesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_GAME:
      return [...statePart, { ...action.payload, id: shortid() }];
    case REMOVE_GAME:
      return statePart.filter((game) => game.id !== action.payload);
    case UPDATE_GAMES:
      return [...action.payload];
    case UPDATE:
      return statePart.map((game) =>
        game.id === action.payload.id ? { ...game, ...action.payload } : game
      );
    default:
      return statePart;
  }
};
export default gamesReducer;
