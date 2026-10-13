/**
 * Components
 * JSX
 * Props
 * State
 * Events
 * [Conditional Rendering]
 */


// 1. API : Url: https://jsonplaceholder.typicode.com/users
 
/***
 * 1. Just write a simple fetch with json conversion
 * 2. Wrap the data loading component under sunspense
 */


/** 
 
Way - 01

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data))


Way - 02

const loadData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return data;
}   **/