import { NEW_GAME, CREATE_ROUND } from './types'

export const newGame = (payload) => ({ type: NEW_GAME, payload: payload });
export const createRound = (payload) => ({ type: CREATE_ROUND, payload: payload });