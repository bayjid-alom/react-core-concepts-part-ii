import { useState } from "react"

export default function Batsman() {
    let [runs, setRuns] = useState(0)
    // Count total sixes
    const [sixes, setSixes] = useState(0)
    // Count total fours
    const [fours, setFours] = useState(0)

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns)
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes)
        setRuns(updatedRuns)
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        const updatedFours = fours + 1;
        setFours(updatedFours)
        setRuns(updatedRuns)
    }


    return (
        <div style={{
            border: '1px solid red',
            marginBottom: '20px',
            borderRadius: '12px'
        }}>

            <p>Sixes : {sixes}  ~  Fours : {fours} </p>
            {
                runs > 50 && <p>🎉 Boom! You scored {runs} runs!</p>
            }

            <h3>Player : Ben Stokes</h3>
            <h2>Score : {runs} </h2>

            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}