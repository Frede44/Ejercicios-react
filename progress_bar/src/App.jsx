import { useState } from "react"
import ProgressBar from "./ProgressBar"
import "./App.css"


function App() {

  const [progress, setProgress] = useState(0)

 function incrementProgress() {
   if (progress < 100) {
     setProgress(progress + 10)
   }
 }

 function handleKeyDown(event) {
   if (event.key === "ArrowRight" || event.key === " ") {
     if (progress < 100) {
     setProgress(progress + 1)
   }
   }else if (event.key === "ArrowLeft") {
     if (progress > 0) {
       setProgress(progress - 1)
     }
   }
 }

  return (
    <>
     <div className="progress-container" onKeyDown={handleKeyDown} tabIndex={0}>
       <ProgressBar progress={progress} />
      <button onClick={incrementProgress}>Incrementar Progreso</button>
     </div>
    </>
  )
}

export default App
