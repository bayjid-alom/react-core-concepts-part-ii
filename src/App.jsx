import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users'
import { Suspense } from 'react';
import Friends from './Friends';
import Posts from './Posts';

import Players from './Players';



const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())


const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}


const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}



function App() {

  const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts()

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


      <Players></Players>

      <Suspense fallback={<h3>Posts are loading......</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>


      <Suspense fallback={<h3>Friends are coming......</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>



      <Suspense fallback={<h3>Loading........</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>



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


