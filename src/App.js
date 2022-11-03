import React , {useState , useEffect} from 'react'
import './index.css';
import TimerUi from './component/TimerUi'
import TimerInput from './component/TimerInput'
import TimerButton from './component/TimerButton'


function App() {
  const [state , setstate] = useState({timeon:false , time:0 , time_before_substract:0})
  let second =0;
  let minute =0;
  let hours =0;

  useEffect(() => {
      let interval = null
      if (state.time <=0) {
            updateUI(0)
      }
      if(state.timeon){
        updateUI(state.time_before_substract)
        interval = setInterval(() => {
            if (state.time <=0) {
              setstate(prev => {return {...prev , timeon:false}})
              clearInterval(interval)
            }else{
              setstate(prev => {return {...prev,  time:--prev.time }})
            }
        }, 1000);
      }else{
        clearInterval(interval)
      }
      return () =>  clearInterval(interval)
  })

  let updateUI = (totaltime)=>{
      if(totaltime !== 0){
        document.querySelector(".dot").style.transform =`rotate(${(360-(360*state.time)/totaltime)}deg)`
        document.querySelector("svg circle:nth-child(2)").style.strokeDashoffset=-(374-(374*state.time)/totaltime) 
      }
      else{
        document.querySelector(".dot").style.transform =''
        document.querySelector("svg circle:nth-child(2)").style.strokeDashoffset=-(374) 
      }
  }

  let handlestart =()=>{
    second + minute + hours !== 0 &&  
    setstate(prev => {return {...prev , timeon:true,time:second + minute + hours,time_before_substract:second + minute + hours}})
    document.querySelectorAll(".default_option")[0].selected = true
    document.querySelectorAll(".default_option")[1].selected = true
    document.querySelectorAll(".default_option")[2].selected = true  
  }

  let handleselect = (e)=>{
    let {value , name} = e.target
    second += name === "secondlist" ? +value  : 0
    minute += name === "minutelist" ? +value  * 60  : 0
    hours += name  === "hourslist"  ? (+value * 60) * 60 : 0
  }
  
 

  return (
    <div className="App">  
        <TimerInput state={state} handleselect={handleselect}/>
        <TimerUi state={state} />
        <TimerButton state={state} 
        handlestart={handlestart} 
        setreset={() => setstate(prev => {return {...prev , time:0,timeon:false}})} 
        setpause={value => setstate(prev => {return {...prev , timeon:value}})} 
        />
    </div>
  )
}


export default App;
