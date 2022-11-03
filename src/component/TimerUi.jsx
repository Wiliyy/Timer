import React  from 'react'

export default function TimerUi(props) {

  return (
    <div className="Time-result">
        <div className="circle">
            <div className="dot"></div>
            <div className="result">
              {props.state.time}
            </div>
            <svg>
                <circle cx="75" cy="75" r="60" strokeLinecap="round"></circle>
                <circle cx="75" cy="75" r="60" strokeLinecap="round"id="second_circle"></circle>
            </svg>
        </div>
    </div>
  )
}

