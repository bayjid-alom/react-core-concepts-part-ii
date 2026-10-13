import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';



function App() {

  const handleClickFive = (number) => {
    const newNumber = number + 5;
    alert(newNumber)
  }

  const handleClickThree = () => {
    alert("Learn Button clicked!")
  }

  function handleClick() {
    console.log("I am clicked.");
  }


  return (
    <>
      <h2>React Core Concepts (ii)</h2>






      <Batsman></Batsman>
      <Counter></Counter>


      <button onClick={() => handleClickFive(10)}>Click to +5</button>


      <button onClick={() => {
        alert("Read more button Clicked")
      }}>Read More (iv)</button >


      <button onClick={handleClickThree}>Learn More (iii)</button>


      <button onClick={function handleClick() {
        console.log("Explore more button clicked!")
      }}>Explore More (ii)</button>


      <button onClick={handleClick}>Click Me (i)</button>

    </>
  )
}

export default App


