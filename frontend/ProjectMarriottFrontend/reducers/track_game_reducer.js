import { NEW_GAME, CREATE_ROUND } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case NEW_GAME: {
            return {...state, navigationAction: NEW_GAME}
        }
        case CREATE_ROUND: {
            return {...state, createGame: action.payload}
        }
        default: {
            return state;
        }
    }
};