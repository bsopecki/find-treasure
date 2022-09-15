import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { addPlayer } from '../../store/Players';

import './Login.css'

const Login = () => {
  const dispatch = useDispatch()
  const playerName = useSelector((state)=> state.player.value)

  const [player,setPlayer] = useState('')
  console.log(playerName)

  return (
    <section className='form-wrapper'>
      <h1 className='form-title'>Ready to find your treasure?</h1>
      <form className="form" onSubmit={()=>{dispatch(addPlayer({id:Math.random().toString(),playerName:player}))}}>
        <label className='form-label'>What's your name?</label>
        <input type="text" required placeholder='Name' onChange={(event)=> {setPlayer(event.target.value)}}/>
        <button className="login-btn" type="submit">Let's play!</button>
      </form>
    </section>
  );
};

export default Login
