import React from "react";
import ReactDOM from "react-dom";
import {choice, remove} from "./helpers";
import { fruits } from "./food";

function App(){
  let randomFruit = choice(fruits);
  let remainingFruits = remove(fruits, randomFruit);
  console.log("fruits array", fruits);
  console.log("REMAINING", remainingFruits)
return (
<div>
  <p>Id' like one {randomFruit}, please</p>
  <p>Here you go {randomFruit}</p>
  <p>Delicious! May I have another?</p>
  <p>I'm sorry, we are all out!  We have {remainingFruits.length} left.</p>
</div>
)
}

export default App;
