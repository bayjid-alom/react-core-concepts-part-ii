## ⚙️ React Core Concepts (ii)


```
App.jsx
Counter.jsx
Batsman.jsx

Summary.jsx

Users.jsx
Friends.jsx
Friends.jsx

Posts.jsx
Post.jsx


```


```
>> Different ways to handle events in React

```

```
<button onClick={handleClick}>Click Me</button>
```


way - 1

```

  function handleClick() {
    alert("I am clicked.");
  }
  <button onClick={handleClick}>Click Me</button>
```


way - 2

```
< button onClick = { function handleClick() {
  alert("Explore more button clicked!")
}}> Explore More</button >
```


way - 3 ARrow function (recommended)

```
  const handleClickThree = () => {
    alert("Learn Button clicked!")
  }

  <>
  <button onClick={handleClickThree}>Learn</button>
  </>
```

```
One line : (Not recommended)
      <button onClick={() => {
        alert("Read more button Clicked")
      }}> Read More</button >
```



### Add number +5
```
const handleClickFive = (number) => {
    const newNumber = number + 5;
    alert(newNumber)
  }

<button onClick={() => handleClickFive(10)}>Click to +5</button>
```



### 📌 Rules for Adding Event Handlers in React

<details>
<summary>1. Inline Arrow Function</summary>

**বাংলা:** সহজ কোনো কাজ সরাসরি event handler-এর মধ্যে করতে arrow function ব্যবহার করা যায়।

**Example:** `<button onClick={() => alert("Clicked")}>Click Me</button>`

</details>

<details>
<summary>2. Separate Event Handler Function</summary>

**বাংলা:** Event handler-এর code আলাদা function-এ লিখে `onClick`-এর মধ্যে function reference pass করা যায়।

**Example:**

`const handleClick = () => alert("Clicked");`

`<button onClick={handleClick}>Click Me</button>`

</details>

<details>
<summary>3. Never Call the Function Directly</summary>

**বাংলা:** Event handler-এ function call না করে function reference দিতে হবে। এতে click করার সময় function execute হবে, render হওয়ার সময় নয়।

- Correct: `onClick={handleClick}`
- Incorrect: `onClick={handleClick()}`

</details>

<details>
<summary>4. Use CamelCase Event Names</summary>

**বাংলা:** React-এ event-এর নাম camelCase-এ লিখতে হয়।

- Correct: `onClick`, `onChange`, `onSubmit`
- Incorrect: `onclick`, `onchange`, `onsubmit`

</details>

<details>
<summary>5. Pass Arguments to Event Handlers</summary>

**বাংলা:** Event handler function-এ argument পাঠাতে arrow function ব্যবহার করতে হয়।

**Example:** `<button onClick={() => handleDelete(5)}>Delete</button>`

</details>

<details>
<summary>6. Access the Event Object</summary>

**বাংলা:** Event object-এর মাধ্যমে click বা অন্য event সম্পর্কিত তথ্য পাওয়া যায়। Handler-এর parameter হিসেবে এটি গ্রহণ করা যায়।

**Example:** `<button onClick={(event) => console.log(event)}>Click Me</button>`

</details>

<details>
<summary>7. Handle Form Submission</summary>

**বাংলা:** Form submit করার সময় `onSubmit` ব্যবহার করা হয়। `event.preventDefault()` browser-এর default submission behavior, যেমন page reload, বন্ধ করতে সাহায্য করে।

**Example:**

`<form onSubmit={(event) => { event.preventDefault(); }}>`

</details>

<details>
<summary>8. Event Handler Must Be a Function</summary>

**বাংলা:** Event handler হিসেবে function দিতে হবে, string নয়। React event handler-এ JavaScript expression ব্যবহার করা হয়।

- Correct: `onClick={() => console.log("Hello")}`
- Incorrect: `onClick="console.log('Hello')"`

</details>


<br>









### 📌 What is React Hook?

`React-এ Hook হলো কিছু built-in function, যা Functional Component-এর মধ্যে React-এর বিভিন্ন feature ব্যবহার করতে সাহায্য করে। যেমন, useState দিয়ে state manage করা এবং useEffect দিয়ে side effects handle করা যায়। Hook-এর নাম সাধারণত use দিয়ে শুরু হয়। Hooks ব্যবহার করার মাধ্যমে আমরা Component-এর data, behavior ও lifecycle-related কাজ সহজে manage করতে পারি।`

### 📌 Most Used React Hooks

React Hooks হলো কিছু built-in function, যা Functional Component-এর মধ্যে React-এর বিভিন্ন feature ব্যবহার করতে সাহায্য করে।

<details>
<summary>📌 1. useState()</summary>

`useState()` Component-এর state বা data manage করতে ব্যবহৃত হয়। State পরিবর্তন হলে React UI re-render করে।

    const [count, setCount] = useState(0);

**Use cases:** Counter, form input, cart quantity, toggle button।

</details>

<details>
<summary>📌 2. useEffect()</summary>

`useEffect()` Component-এর মধ্যে side effects handle করতে ব্যবহৃত হয়, যেমন API থেকে data fetch করা বা event listener manage করা।

    useEffect(() => {
        console.log("Component rendered");
    }, []);

**Use cases:** API fetching, document title update, event listeners।

</details>

<details>
<summary>📌 3. useContext()</summary>

`useContext()` একাধিক Component-এর মধ্যে data share করতে সাহায্য করে, যাতে প্রতিটি level-এ props পাঠানোর প্রয়োজন না হয়।

**Use cases:** Theme, authentication data, user information।

</details>

<details>
<summary>📌 4. useRef()</summary>

`useRef()` এমন value সংরক্ষণ করতে এবং DOM element access করতে ব্যবহৃত হয়, যার পরিবর্তনে Component re-render হয় না।

**Use cases:** Input focus, DOM access, timer ID সংরক্ষণ।

</details>

<details>
<summary>📌 5. useReducer()</summary>

`useReducer()` তুলনামূলক complex state manage করতে সাহায্য করে। এটি একটি reducer function এবং initial state ব্যবহার করে state update করে।

**Use cases:** Complex forms, multiple related state updates।

</details>

<details>
<summary>📌 6. useMemo()</summary>

`useMemo()` কোনো calculation-এর result cache করে রাখে, যাতে dependency পরিবর্তন না হলে অপ্রয়োজনীয় recalculation এড়ানো যায়।

**Use cases:** Expensive calculations, large data filtering।

</details>

<details>
<summary>📌 7. useCallback()</summary>

`useCallback()` একটি function-এর reference cache করে রাখে, যাতে dependency পরিবর্তন না হলে একই function reference পুনরায় ব্যবহার করা যায়।

**Use cases:** Optimizing child components, preventing unnecessary re-renders in suitable cases।

</details>

<details>
<summary>📌 8. useId()</summary>

`useId()` Accessibility-এর জন্য unique ID তৈরি করতে ব্যবহৃত হয়, বিশেষ করে form elements-এর সঙ্গে label যুক্ত করার ক্ষেত্রে।

**Use cases:** Input-label association, accessible forms।

</details> <br>














### 📌 useState কী?

React-এর `useState` হলো একটি Hook, যা Component-এর মধ্যে data সংরক্ষণ ও পরিবর্তন করতে সাহায্য করে। State পরিবর্তন হলে React UI re-render করে নতুন value দেখায়। useState()-এর মধ্যে initial value দেওয়া হয় এবং এটি দুটি জিনিস return করে: বর্তমান state value ও state পরিবর্তনের জন্য একটি setter function। এটি counter, form input, cart quantity এবং toggle button-এর মতো dynamic UI তৈরি করতে ব্যবহৃত হয়।

```
const = useState (return এর উপরে থাকবে...)...Press Enter
const [count, setCount] = useState(0);
```

- count → State Variable — বর্তমান State-এর value রাখে।
- setCount → State Setter Function — State-এর value update করে।
এখানে count এবং setCount হলো useState() থেকে পাওয়া array-এর দুটি value, যেগুলো Array Destructuring-এর মাধ্যমে নেওয়া হয়েছে।



<details>
<summary>|| useState() Initial Values</summary>

    // Number: সংখ্যা রাখার জন্য
    const [count, setCount] = useState(0);

    // Boolean: true/false রাখার জন্য
    const [isActive, setIsActive] = useState(false);

    // String: Text রাখার জন্য
    const [name, setName] = useState("");

    // Array: একাধিক item রাখার জন্য
    const [items, setItems] = useState([]);

    // Object: একাধিক property-সহ data রাখার জন্য
    const [user, setUser] = useState({});

</details>









<details>
<summary>|| Counter Example using useState</summary>

**📁 `Counter.jsx`**

    import { useState } from "react";

    export default function Counter() {
        const [count, setCount] = useState(0);

        const handleAdd = () => {
            const newCount = count + 1;
            setCount(newCount);
        };

        const counterStyle = {
            border: "1px solid aqua",
            marginBottom: "20px",
            borderRadius: "12px",
            backgroundColor: ""
        };

        return (
            <div style={counterStyle}>
                <h3>Count: {count}</h3>
                <button onClick={handleAdd}>Add</button>
            </div>
        );
    }

**📁 `App.jsx`**

    import Counter from "./Counter";

    export default function App() {
        return (
            <>
                <Counter />
            </>
        );
    }

**📝 Explanation:**

- `useState(0)` — Counter-এর initial value `0` সেট করে।
- `count` — বর্তমান counter value সংরক্ষণ করে।
- `setCount` — State-এর value update করে।
- `handleAdd()` — বর্তমান `count`-এর সঙ্গে `1` যোগ করে নতুন value তৈরি করে এবং `setCount()` দিয়ে state update করে।
- `counterStyle` — Counter container-এর inline CSS styling নির্ধারণ করে।
- `onClick={handleAdd}` — Button-এ click করলে `handleAdd` function execute হয়।
- `<Counter />` — `App.jsx`-এর মধ্যে `Counter` component render করে।

**🔄 Execution Flow:**

`App.jsx` → `Counter.jsx` → Add Button Click → `handleAdd()` → `setCount()` → State Update → UI Re-render

**Output:** প্রথমে `Count: 0` দেখাবে। প্রতিবার `Add` button-এ click করলে count-এর value ১ করে বাড়বে।

</details>








<details>
<summary>|| Cricket Score Counter using useState()</summary>

**📁 `Batsman.jsx`**

    import { useState } from "react";

    export default function Batsman() {
        let [runs, setRuns] = useState(0);

        // 🎯 Count total sixes
        const [sixes, setSixes] = useState(0);

        // 🎯 Count total fours
        const [fours, setFours] = useState(0);

        const handleSingle = () => {
            const updatedRuns = runs + 1;
            setRuns(updatedRuns);
        };

        const handleSix = () => {
            const updatedRuns = runs + 6;
            const updatedSixes = sixes + 1;
            setSixes(updatedSixes);
            setRuns(updatedRuns);
        };

        const handleFour = () => {
            const updatedRuns = runs + 4;
            const updatedFours = fours + 1;
            setFours(updatedFours);
            setRuns(updatedRuns);
        };

        return (
            <div style={{
                border: "1px solid red",
                marginBottom: "20px",
                borderRadius: "12px"
            }}>
                <p>Sixes: {sixes} ~ Fours: {fours}</p>

                {runs > 50 && <p>🎉 Boom! You scored {runs} runs!</p>}

                <h3>Player: Ben Stokes</h3>
                <h2>Score: {runs}</h2>

                <button onClick={handleSingle}>Single</button>
                <button onClick={handleFour}>Four</button>
                <button onClick={handleSix}>Six</button>
            </div>
        );
    }

**📝 Explanation:**

- `runs` — খেলোয়াড়ের মোট রান সংরক্ষণ করে।
- `sixes` — মোট ছক্কার সংখ্যা সংরক্ষণ করে।
- `fours` — মোট চারের সংখ্যা সংরক্ষণ করে।
- `handleSingle()` — মোট রানের সঙ্গে ১ যোগ করে।
- `handleFour()` — মোট রানের সঙ্গে ৪ যোগ করে এবং চারের সংখ্যা ১ বাড়ায়।
- `handleSix()` — মোট রানের সঙ্গে ৬ যোগ করে এবং ছক্কার সংখ্যা ১ বাড়ায়।
- Conditional rendering — মোট রান ৫০-এর বেশি হলে congratulatory message দেখায়।

**🔄 Execution Flow:** Button Click → Event Handler → State Update → Re-render → Updated Score

</details>





<>
### 📌 5 Use Cases of `useState()`

<details>
<summary>Common Use Cases of useState()</summary>

1. **State Management** — Component-এর data manage ও update করতে।
2. **Conditional Rendering** — State অনুযায়ী UI show বা hide করতে।
3. **Toggle Flags (true/false)** — কোনো feature on/off করতে।
4. **Counter** — সংখ্যা increase বা decrease করতে।
5. **Store API Data** — API থেকে পাওয়া data state-এ সংরক্ষণ করতে।

</details><br>












### React-এ Suspense কী?

`<Suspense>` হলো React-এর একটি built-in component, যা এর children-এর content load হওয়ার সময় একটি বিকল্প UI দেখায়। `fallback` prop ব্যবহার করে loading message, spinner বা skeleton UI দেখানো যায়। Content প্রস্তুত হলে React মূল UI প্রদর্শন করে। এটি সাধারণত `lazy()` ব্যবহার করে component-এর code প্রয়োজনের সময় load করার ক্ষেত্রে ব্যবহৃত হয়। তবে এটি সাধারণ `fetch()` API request-এর loading স্বয়ংক্রিয়ভাবে handle করে না।

```
import { Suspense } from "react";

<Suspense fallback={<p>Loading...</p>}>
  <SomeComponent />
</Suspense>
```




**Q: What is `use` in React? Is it a Hook?**
use is a React API that lets you read a resource during rendering, such as a Promise or context.

**Answer:** React-এর `use` হলো একটি API, যা component render হওয়ার সময় `Promise` বা `Context` থেকে value পড়তে সাহায্য করে। এটি সাধারণ Hook নয়, তবে Hook-এর মতো কাজ করে। সাধারণ Hook-এর মতো `use`-কে শুধু top level-এ ব্যবহার করতে হয় না; এটি condition ও loop-এর মধ্যেও ব্যবহার করা যায়।
<br>












### || `Load Data` (Examples)




<details>
<summary>📌 Example: React use() with Suspense — App.jsx & Users.jsx</summary>

**App.jsx**
```jsx
import { Suspense } from 'react';
import Users from './Users';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json());

function App() {
    return (
        <>
            <h2>React Core Concepts (ii)</h2>
            <Suspense fallback={<h3>Loading........</h3>}>
                <Users fetchUsers={fetchUsers} />
            </Suspense>
        </>
    );
}

export default App;
```

**Users.jsx**
```jsx
import { use } from "react";

export default function Users({ fetchUsers }) {
    const users = use(fetchUsers);
    // use(fetchUsers) থেকে users array পাওয়া যাচ্ছে।
    // [{...}, {...}, {...}, ...]

    return (
        <div className="card">
            <h3>Users: {users.length}</h3>
        </div>
    );
}
```

**সংক্ষিপ্ত ব্যাখ্যা:**
- **App.jsx:** API থেকে users-এর data fetch করে Promise-টি `props` হিসেবে `Users` component-এ পাঠানো হয়েছে। `<Suspense>` component suspend হলে fallback UI প্রদর্শন করে।
- **Users.jsx:** `use(fetchUsers)` ব্যবহার করে Promise-এর resolved data পড়া হয়েছে এবং `users.length` দিয়ে মোট users-এর সংখ্যা প্রদর্শন করা হয়েছে।

**Execution Flow:** API Request → Promise → Props → `use()` → Users Array → UI Render

</details>







 <details>
<summary>📌 Example: React use() with Suspense — App.jsx & Friends.jsx</summary>

**App.jsx**

    import { Suspense } from 'react';
    import Friends from './Friends';

    const fetchFriends = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      return res.json();
    };

    function App() {
      const friendsPromise = fetchFriends();

      return (
        <>
          <h2>React Core Concepts (ii)</h2>
          <Suspense fallback={<h3>Friends are coming......</h3>}>
            <Friends friendsPromise={friendsPromise} />
          </Suspense>
        </>
      );
    }

    export default App;

**Friends.jsx**

    import { use } from "react";

    export default function Friends({ friendsPromise }) {
      const friends = use(friendsPromise);
      console.log(friends);

      return (
        <div className="card">
          <h3>Friends : {friends.length}</h3>
        </div>
      );
    }

**সংক্ষিপ্ত ব্যাখ্যা:**

- **App.jsx:** `fetchFriends()` API থেকে friends-এর data fetch করে একটি Promise return করে। Promise-টি `friendsPromise` নামে `Friends` component-এ `props` হিসেবে পাঠানো হয়েছে। `Suspense` data resolve হওয়ার জন্য অপেক্ষার সময় fallback UI প্রদর্শন করে।
- **Friends.jsx:** `use(friendsPromise)` ব্যবহার করে Promise-এর resolved data পাওয়া হয়েছে। `friends.length` দিয়ে মোট friends-এর সংখ্যা দেখানো হয়েছে।

**Execution Flow:** API Request → Promise → Props → `use()` → Friends Array → UI Render

</details>






### || `Load Data` & `Display Data` 



 <details>
<summary>📌 Example: React use() with Suspense — App.jsx, Friends.jsx & Friend.jsx</summary>

**App.jsx**

    import { Suspense } from 'react';
    import Friends from './Friends';

    const fetchFriends = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      return res.json();
    };

    function App() {
      const friendsPromise = fetchFriends();

      return (
        <>
          <h2>React Core Concepts (ii)</h2>
          <Suspense fallback={<h3>Friends are coming......</h3>}>
            <Friends friendsPromise={friendsPromise} />
          </Suspense>
        </>
      );
    }

    export default App;

**Friends.jsx**

    import { use } from "react";
    import Friend from "./Friend";

    export default function Friends({ friendsPromise }) {
      const friends = use(friendsPromise);
      console.log(friends);

      return (
        <div className="card">
          <h3>Friends : {friends.length}</h3>
          {/* To show in UI */}
          {friends.map(friend => (
            <Friend key={friend.id} friend={friend} />
          ))}
        </div>
      );
    }

**Friend.jsx**

    export default function Friend({ friend }) {
      const { name, email, phone, website } = friend;

      return (
        <div className="card-inner">
          <h3>Name : {name}</h3>
          <p>Email : {email}</p>
          <p>Website : {website}</p>
        </div>
      );
    }

**সংক্ষিপ্ত ব্যাখ্যা:**

- **App.jsx:** API থেকে friends-এর data fetch করে Promise-টি `friendsPromise` prop হিসেবে `Friends` component-এ পাঠানো হয়েছে। `Suspense` data load হওয়ার সময় fallback UI দেখায়।
- **Friends.jsx:** `use(friendsPromise)` দিয়ে API-এর resolved data পাওয়া হয়েছে। `friends.length` দিয়ে মোট friends-এর সংখ্যা দেখানো হয়েছে এবং `map()` ব্যবহার করে প্রতিটি friend-এর জন্য `Friend` component render করা হয়েছে। `key={friend.id}` প্রতিটি component-কে unique identity দেয়।
- **Friend.jsx:** `friend` prop থেকে `name`, `email`, `phone` ও `website` destructuring করা হয়েছে। এরপর প্রতিটি friend's name, email ও website UI-তে দেখানো হয়েছে। `phone` নেওয়া হলেও বর্তমান UI-তে প্রদর্শন করা হয়নি।

**Execution Flow:** API Request → Promise → Props → `use()` → Friends Array → `map()` → `Friend` Component → Data Display

</details> <br>










 <details>
<summary>📌 Example: React use() with Suspense — App.jsx, Posts.jsx & Post.jsx</summary>

**App.jsx**

    import { Suspense } from 'react';
    import Posts from './Posts';

    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      return res.json();
    };

    function App() {
      const postsPromise = fetchPosts();

      return (
        <>
          <h2>React Core Concepts (ii)</h2>
          <Suspense fallback={<h3>Posts are loading......</h3>}>
            <Posts postsPromise={postsPromise} />
          </Suspense>
        </>
      );
    }

    export default App;

**Posts.jsx**

    import { use } from "react";
    import Post from "./Post";

    export default function Posts({ postsPromise }) {
      const posts = use(postsPromise);
      // console.log(posts); // 100 ~ [{...}, {...}]

      return (
        <div className="card">
          <h3>All Posts are here</h3>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      );
    }

**Post.jsx**

    export default function Post({ post }) {
      const { body, id, title, userId } = post;

      return (
        <div className="card-inner">
          <h4>Title : {title}</h4>
          <h5>Body : {body}</h5>
          <p>UserID : {userId} ~ ID : {id}</p>
        </div>
      );
    }

**সংক্ষিপ্ত ব্যাখ্যা:**

- **App.jsx:** `fetchPosts()` API থেকে posts-এর data fetch করে একটি Promise return করে। `postsPromise` prop হিসেবে `Posts` component-এ পাঠানো হয়েছে। `Suspense` component suspend হলে fallback UI দেখায়।
- **Posts.jsx:** `use(postsPromise)` দিয়ে Promise-এর resolved data পাওয়া হয়েছে। `map()` ব্যবহার করে প্রতিটি post-এর জন্য `Post` component render করা হয়েছে। `key={post.id}` প্রতিটি post-এর জন্য unique key নির্ধারণ করে।
- **Post.jsx:** `post` prop থেকে `body`, `id`, `title` ও `userId` destructuring করে প্রতিটি post-এর তথ্য UI-তে দেখানো হয়েছে।

**Execution Flow:** API Request → Promise → Props → `use()` → Posts Array → `map()` → `Post` Component → Data Display

</details>










