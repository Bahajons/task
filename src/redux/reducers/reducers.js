const initialState = {
  turn: 1,
  player1: 0,
  player2: 0,
}

export const myReducers = (state = initialState, action) => {
  switch (action.type) {
    case "PLAYER1": {
      return { ...state, player1: action.payload }
    }
    case "PLAYER2": {
      return { ...state, player2: action.payload }
    }
    case "TURN": {
      return { ...state, turn: action.payload }
    }
    default: {
      return state;
    }
  }
}