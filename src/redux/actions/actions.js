export const changeTurn = data => {
  return {
    type: "TURN",
    payload: data
  }
}
export const changeCountPlayer1 = data => {
  return {
    type: "PLAYER1",
    payload: data
  }
}
export const changeCountPlayer2 = data => {
  return {
    type: "PLAYER2",
    payload: data
  }
}