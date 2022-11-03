import React from 'react'
import { Icon } from '@iconify/react';

export default function TimerButton(props) {
  return (
     <div className="Time-buttons">
        
          <button className={(props.state.timeon || props.state.time !== 0) ? 'Timer-button-reset' : 'disable_button' } 
          onClick={props.setreset}>
            <Icon icon="bx:reset" /> Reset 
          </button>

          {!props.state.timeon && props.state.time === 0 &&
          <button className='Timer-button' 
          onClick={props.handlestart}>
              <Icon icon="codicon:debug-start"  rotate={3} /> Start 
          </button>}

          {props.state.timeon &&
          <button className='Timer-button' 
          onClick={() => props.setpause(false)}>
              <Icon icon="codicon:stop-circle" /> Stop 
          </button>
          }
    
          {!props.state.timeon && props.state.time !== 0 && 
          <button className='Timer-button'
          onClick={() => props.setpause(true)}>
              <Icon icon="codicon:debug-reverse-continue" rotate={1} /> Continue 
          </button>}

        </div>
  )
}

