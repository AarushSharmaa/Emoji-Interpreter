import React, { useState } from "react";
import "./styles.css";

/* This comment will indicate explanation of final code*/

// this comment will indicate all codebases that lead to the final code

/*this is our database/dictionary*/
const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
  // add more emojis
};

/*we made an array out of emojis that we know*/
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  /*setMeaning will set the meaning so that we can see it in our page*/
  const [meaning, setMeaning] = useState("");

  /*Input Handler -- processing */
  function emojiInputHandler(event) {
    //console.log(event.target.value);
    //setUserInput(event.target.value);
    
    
    // target gives you the element that triggered the event.
    // value retrieves the value of that element (an input field here).
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    //console.log(meaning); //to give in console
    setMeaning(meaning); //to update the value of meaning and render it
  }

  /*Click Handler -- processing piece*/
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); //this is a react part to show output
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>

      <input onChange={emojiInputHandler}></input>

      {/*Actual output set by React using useState() */}
      <h2> {meaning} </h2>

      <h3> click on an emoji to know what it means </h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
            {"    "}
          </span>
        );
      })}
    </div>
  );
}

/** 
*class --> className
*style --> takes a JS object instead of ""
*VISER --> View -> Interact -> State in Event Handle  -> Render

**/
