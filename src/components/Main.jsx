import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCountPlayer1, changeCountPlayer2 } from '../redux/actions/actions'
import '../style/style.css'
export default function Main() {
  const [dice1, setDice1] = useState()
  const [dice2, setDice2] = useState()
  const [turn, setTurn] = useState(1)
  const { player1 } = useSelector((state) => state)
  const { player2 } = useSelector((state) => state)
  const dispatch = useDispatch()
  const [winner, setWinner] = useState()

  const NewGame = () => {
    dispatch(changeCountPlayer1(0))
    setDice1('')
    dispatch(changeCountPlayer2(0))
    setDice2('')
  }
  useEffect(() => {
    CheckFinish()
  }, [dice1])

  const Random = () => {
    let a;
    let min = Math.ceil(1);
    let max = Math.floor(6);
    CheckFinish()
    if (turn == 1) {
      a = Math.floor(Math.random() * (max - min + 1) + min)
      setDice1(a);
      if (a == 1) {
        dispatch(changeCountPlayer1(0))
      }
      else {
        dispatch(changeCountPlayer1(player1 + a))
      }
    }
    if (turn == 2) {
      a = Math.floor(Math.random() * (max - min + 1) + min)
      setDice1(a);
      if (a == 1) {
        dispatch(changeCountPlayer2(0))
      }
      else {
        dispatch(changeCountPlayer2(player2 + a))
      }
    }
  }
  const CheckFinish = () => {
    if (player1 >= 50) {
      setWinner("Player1 Yutdi")
    }
    if (player2 >= 50) {
      setWinner("Player2 Yutdi")
    }
  }
  const ChangeTurn = () => {
    if (turn == 1) {
      setTurn(2)
    }
    if (turn == 2) {
      setTurn(1)
    }
  }
  return (
    <>
      <div className='main'>
        <h5>{winner}</h5>
        <div className="w-75 mx-auto play">
          <div className='new pt-5 mt-5'>
            <h2 className='text-center mb-5' onClick={() => NewGame()}>
              NEW GAME</h2>
            {dice1 ? <img className='w-25 img' src={`../images/dice-${dice1}.png`} alt="" /> : <img className='w-25 img' src={`../images/dice-6.png`} alt="" />}
            <h3 onClick={() => Random()}>ROOL DICE</h3>
            <h4 onClick={() => ChangeTurn()}>HOLD</h4>
          </div>
          {/* left */}
          <div className='w-50 left float-left pt-5'>
            <h3 className='text-center pt-5'>PLAYER 1</h3>
            <h1 className='text-center pt-3'>{player1}</h1>
            <div className='box' >
              <h4>Current</h4>
              {turn == 1 ? <h5>{1}</h5> : <h5>0</h5>}
            </div>
          </div>
          {/* right */}
          <div className='w-50 right float-right pt-5'>
            <h3 className='text-center pt-5'>PLAYER 2</h3>
            <h1 className='text-center pt-3'>{player2}</h1>
            <div className='box' >
              <h4>Current</h4>
              {turn == 2 ? <h5>{1}</h5> : <h5>0</h5>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
