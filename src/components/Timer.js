import React, { useEffect, useReducer, useState } from 'react';

import { Card, CardActions, CardContent, CardHeader, IconButton, TextField } from '@mui/material';
import { Pause, PlayArrow, Stop } from '@mui/icons-material';

import './Timer.css';

const initialState = {
  step: 1,
  timer: 0
};

function reducer(state, action) {
  const { step, timer } = state;
  switch(action.type) {
    case 'tick':
      return {
        ...state,
        timer: timer + step
      };

    case 'step':
      return {
        ...state,
        step: action.value
      };

    case 'reset':
      return {
        ...state,
        timer: 0
      };

    default:
      return state;
  }
}

function Timer() {
  const [playState, setPlayState] = useState('stop');
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, timer } = state;

  useEffect(() => {
    if (playState === 'play') {
      const interval = setInterval(() => dispatch({ type: 'tick' }), 1000);
      return () => clearInterval(interval);
    }
    if (playState === 'stop') {
      dispatch({ type: 'reset' });
    }
  }, [playState]);

  return (
    <div className="container">
      <Card className="card">
        <CardHeader sx={{ '& .MuiCardHeader-title': { textAlign: 'center', fontSize: '3rem' } }} title={timer} />
        <CardContent className="content">
          <TextField
            id="step"
            label="Step"
            onChange={e => dispatch({ type: 'step', value: Number(e.target.value) })}
            type="number"
            value={step}
          />
        </CardContent>
        <CardActions>
          {playState === 'play'
            ? <IconButton onClick={() => setPlayState('pause')}><Pause/></IconButton>
            : <IconButton onClick={() => setPlayState('play')}><PlayArrow/></IconButton>
          }
          <IconButton onClick={() => setPlayState('stop')}>
            <Stop/>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default Timer;
