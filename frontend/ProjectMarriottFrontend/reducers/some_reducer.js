import { NEW_GAME, CREATE_ROUND } from '../actions/types';

const INITIAL_STATE = {
    currentUserId: 1,
    currentRoundId: 0,
    currentWindId: 0,
    currentGameId: 0,
};

export default (state = INITIAL_STATE, action) => {
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